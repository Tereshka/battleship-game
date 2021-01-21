import {
  combineReducers,
  createStore,
  AnyAction,
  applyMiddleware,
} from 'redux';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './app/reducers';

export const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
type ThunkDispatchType = ThunkDispatch<RootState, undefined, AnyAction>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware<ThunkDispatchType, RootState>(thunk)),
);

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
