import React from "react";
import { createResource, WrappedPromise } from '../../requests/Suspense'

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