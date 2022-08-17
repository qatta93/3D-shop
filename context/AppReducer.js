export function product(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return [
        ...state,
        {products: action.payload, quantity: action.payloadQuantity }
      ];
    case "DELETE_PRODUCT_FROM_CART":
      const productToDeleteIndex = state.findIndex(item => item.products === action.payload);
      if(productToDeleteIndex > 0)state.splice(productToDeleteIndex, 1)
      return [
        ...state,
      ];
    case "ADD_PRODUCT_QUANTITY":
      const findIndex = state.findIndex(item => item.products === action.payload);
      state[findIndex] = {products: state[findIndex].products, quantity: Number(action.payloadQuantity) + 1}
      return [
        ...state
      ];
    case "SUBTRACT_PRODUCT_QUANTITY":
      const index = state.findIndex(item => item.products === action.payload);
      state[index] = {products: state[index].products, quantity: Number(action.payloadQuantity) - 1}
      return [
        ...state
      ];
    default:
      return state;
  }
}