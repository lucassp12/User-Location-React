/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "user/ADD_REQUEST",
  ADD_SUCCESS: "user/ADD_SUCCESS",
  ADD_FAILURE: "user/ADD_FAILURE",
  REMOVE: "user/REMOVE"
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  data: [],
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.user.id)
      };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user }
  })
};
