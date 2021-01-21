export const SET_HELLO = 'SET_HELLO';

export type ApplicationState = {
  hello: string;
};

interface SetHelloAction {
  type: typeof SET_HELLO;
  payload: string;
}

export type ApplicationActionTypes = SetHelloAction;
