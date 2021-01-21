import { AppThunk } from '../index';
import { ApplicationActionTypes, SET_HELLO } from './types';

export function setHello(hello: string): ApplicationActionTypes {
  return {
    type: SET_HELLO,
    payload: hello,
  };
}
