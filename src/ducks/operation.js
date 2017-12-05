import { handleActions, createAction } from 'redux-actions';

// Types
export const ADD_CALCUL = 'src/ducks/ADD_CALCUL';
export const GET_RESULT_OPERATION = 'src/ducks/GET_RESULT_OPERATION';
export const CLEAR_OPERATION = 'src/ducks/CLEAR';

// Actions
export const addCalcul = createAction(ADD_CALCUL);
export const getResultOperation = createAction(GET_RESULT_OPERATION);
export const clearOperation = createAction(CLEAR_OPERATION);

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
    result: eval(state.calcul).toString(), // TODO Catch error
  }),
  [CLEAR_OPERATION]: (state) => initialState,
}, initialState);

export default operationReducer;
