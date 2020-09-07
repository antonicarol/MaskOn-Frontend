export const initialState = {
  user: null,
  masks: [],
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_MASKS: "SET_MASKS",
  FILTER_MASKS_TYPE: "FILTER_MASKS_TYPE",
  FILTER_MASKS_PRICE_GTE: "FILTER_MASKS_PRICE_GTE",
  FILTER_MASKS_PRICE_LTE: "FILTER_MASKS_PRICE_LTE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MASKS:
      return {
        ...state,
        masks: action.masks,
      };

    case actionTypes.FILTER_MASKS_PRICE_GTE:
      return {
        ...state,
        masks: action.masks,
      };

    case actionTypes.FILTER_MASKS_PRICE_LTE:
      return {
        ...state,
        masks: action.masks,
      };

    default:
      return state;
  }
};

export default reducer;
