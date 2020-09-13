export const initialState = {
  user: null,
  masks: [],
  masksOnSale: [],
  detailMask: {},
  currencyList: [],
  currency: {
    base: "EUR",
    prevDiff: 1,
    symbol: "€",
  },
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_MASKS: "SET_MASKS",
  SET_DETAIL_MASK_SALE: "SET_DETAIL_MASK_SALE",
  SET_CURRENCY_LIST: "SET_CURRENCY_LIST",
  SET_DETAIL_MASK_NEW: "SET_DETAIL_MASK_NEW",
  SET_MASKS_ONSALE: "SET_MASKS_ONSALE",
  FILTER_MASKS_TYPE: "FILTER_MASKS_TYPE",
  FILTER_MASKS_PRICE_GTE: "FILTER_MASKS_PRICE_GTE",
  FILTER_MASKS_PRICE_LTE: "FILTER_MASKS_PRICE_LTE",
  CHANGE_CURRECY: "CHANGE_CURRENCY",
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

    case actionTypes.SET_MASKS_ONSALE:
      return {
        ...state,
        masksOnSale: action.masks,
      };

    case actionTypes.SET_DETAIL_MASK_SALE:
      return {
        ...state,
        detailMask: action.mask,
      };

    case actionTypes.SET_DETAIL_MASK_NEW:
      return {
        ...state,
        detailMask: action.mask,
      };

    case actionTypes.CHANGE_CURRECY:
      return {
        ...state,
        currency: action.currency,
      };

    case actionTypes.SET_CURRENCY_LIST:
      return {
        ...state,
        currencyList: action.currencyList,
      };

    default:
      return state;
  }
};

export default reducer;
