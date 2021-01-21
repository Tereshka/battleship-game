import { ApplicationState, ApplicationActionTypes, SET_HELLO } from './types';

const initialState: ApplicationState = {
  hello: 'Hello!',
};

export function appReducer(
  state = initialState,
  action: ApplicationActionTypes,
): ApplicationState {
  switch (action.type) {
    case SET_HELLO:
      return {
        ...state,
        hello: action.payload,
      };
    default:
      return state;
  }
}
