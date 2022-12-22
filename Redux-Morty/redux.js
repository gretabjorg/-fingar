// types
export const FETCH_BEES = "FETCH_ALL_BEES";
export const FETCH_BEES_SUCCESS = "FETCH_ALL_BEES_SUCCESS";
export const FETCH_BEES_ERROR = "FETCH_ALL_BEES_ERROR";

// selector
export function getMorty(state) {
  return state.bees.morty;
}

// action creator
export const fetchBees = () => ({ type: FETCH_BEES });
export const fetchBeesSuccess = (data) => ({
  type: FETCH_BEES_SUCCESS,
  payload: data,
});
export const fetchBeesError = (error) => ({
  type: FETCH_BEES_ERROR,
  payload: error,
});

// reducer
const initialState = {
  morty: null,
  loading: false,
  error: null,
};

const beesReducer = (state = initialState, action) => {
  if (action.type === FETCH_BEES) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === FETCH_BEES_SUCCESS) {
    return {
      ...state,
      morty: action.payload,
      loading: false,
    };
  }
  if (action.type === FETCH_BEES_ERROR) {
    console.log(action.payload);
    return {
      ...state,
      error: "404 villa, prufid aftur sidar",
      loading: false,
    };
  }

  return state;
};

export default beesReducer;
