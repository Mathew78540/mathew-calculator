import { handleActions, createAction } from 'redux-actions';

// Helpers
import { returnCalculResult } from './helper';

// Types
export const ADD_CALCUL = 'src/ducks/ADD_CALCUL';
export const GET_RESULT_OPERATION = 'src/ducks/GET_RESULT_OPERATION';
export const CLEAR_OPERATION = 'src/ducks/CLEAR';
export const RANDOM_OPERATION = 'src/ducks/RANDOM_OPERATION';

// Actions
export const addCalcul = createAction(ADD_CALCUL);
export const getResultOperation = createAction(GET_RESULT_OPERATION);
export const clearOperation = createAction(CLEAR_OPERATION);
export const randomOperation = createAction(RANDOM_OPERATION);

// Initial State
const initialState = {
  calcul: '',
  result: '',
};

// Reducer
const operationReducer = handleActions({
  [ADD_CALCUL]: (state, { payload }) => ({
    ...state,
    calcul: `${state.calcul}${payload}`,
  }),
  [GET_RESULT_OPERATION]: (state) => ({
    ...state,
    result: returnCalculResult(state.calcul),
  }),
  [CLEAR_OPERATION]: () => initialState,
  [RANDOM_OPERATION]: (state, { payload: operation }) => operation,
}, initialState);

export default operationReducer;
