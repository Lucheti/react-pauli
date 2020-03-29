import React, { Dispatch, SetStateAction } from 'react'
import { createResource, WrappedPromise } from '../../requests/Suspense'
import { AppContext } from '../../index'
import { UserModel } from '../../types/UserModel'
import { dragElement } from '../../Actions/DragAndDropActions'

export const useBoolean = (defaultValue: boolean = false): [boolean, () => void] => {
  const [state, set] = React.useState(defaultValue)
  const toggle = () => set(!state)
  return [state, toggle]
}

export interface Ref {
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  valid?: boolean;
}

export const useInput = (defaultValue?: string): Ref => {
  const ref = React.useRef<HTMLInputElement>(null);
  return {
    ref: ref,
    get value() {
      return ref.current ? ref.current.value : defaultValue ? defaultValue : "";
    }
  };
};

export const useCounter = (): [number, () => void] => {
  const [counter, setCounter] = React.useState<number>(0)
  const add = () => setCounter(counter + 1)
  return [counter, add]
}

export const useGetResource =<T extends any> ( apiFetch: () => Promise<T> ): WrappedPromise<T> => {
  const [resource, setResource] = React.useState<WrappedPromise<T>>( {data: {read: () => undefined}} )
  React.useEffect(() => {
    const newResource =  createResource<T>( apiFetch )()
    setResource( newResource )
  },[])
  return resource
}

export const useResource = <T extends any> (resource: WrappedPromise<T>): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = React.useState<T>(resource.data.read()!)
  React.useEffect(() => setData(resource.data.read()!),[resource])
  return [data, setData]
}

export const useDragAndDrop = <T extends unknown>( data: T[] , setData: Dispatch<SetStateAction<T[]>>, equals: (t1: T, t2: T) => boolean): [(elem: T) => void, () => void] => {
  const [state,dispatch] = React.useContext(AppContext)
  const { dragInfo } = state;
  const { elem , handler } = dragInfo

  const onDragEnd = (draggedElem: T) => setData(data?.filter(elem => !equals(draggedElem, elem)));

  const handleDrop = async () => {
    if (!data?.find(user => equals(user, elem))) {
      await handler()
      await setData([...data!, elem]);
    }
  };

  const onDrag = (draggedElem: T) => {
    dispatch(dragElement(draggedElem, () => onDragEnd(draggedElem)));
  };

  return [onDrag, handleDrop]
}