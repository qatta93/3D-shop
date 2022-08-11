export function product(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}