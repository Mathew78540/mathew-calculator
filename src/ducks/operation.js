import { handleActions, createAction } from 'redux-actions';

// Types
export const ADD_IN_OPERATION = 'src/reducers/ADD_IN_OPERATION';
export const GET_RESULT_OPERATION = 'src/reducers/GET_RESULT_OPERATION';
export const CLEAR_OPERATION = 'src/reducers/CLEAR';

// Actions
export const AddOperation = createAction(ADD_IN_OPERATION);
export const getResultOperation = createAction(GET_RESULT_OPERATION);
export const clearOperation = createAction(CLEAR_OPERATION);

// Initial State
const initialState = {
  calcul: '',
  result: '',
};

// Reducer
const operationReducer = handleActions({
  [ADD_IN_OPERATION]: (state, { payload }) => ({
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
