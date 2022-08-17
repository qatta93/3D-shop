export function product(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return [
        ...state,
        {products: action.payload, quantity: action.payloadQuantity }
      ];
    case "ADD_PRODUCT_QUANTITY":
      const findIndex = state.findIndex(item => item.products === action.payload);
      state[findIndex] = {products: state[findIndex].products, quantity: Number(action.payloadQuantity) + 1}
      return [
        ...state
      ];
    default:
      return state;

  }

}