import {
  AppReducerPayloadAction,
  AppReducerState
} from "../reducers/AppReducer";

interface DragPayload<T> {
  elem: T;
  handler: () => void;
}

const handleDrag = <T extends unknown>(
  state: AppReducerState,
  action: AppReducerPayloadAction<DragPayload<T>>
) => ({
  ...state,
  dragInfo: { elem: action.payload.elem, handler: action.payload.handler }
});

export const dragElement = <T extends unknown>(
  elem: T,
  handleDrop: () => void
): AppReducerPayloadAction<DragPayload<T>> => ({
  handler: handleDrag,
  payload: { elem: elem, handler: handleDrop }
});
