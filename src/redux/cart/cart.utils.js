export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cI) =>
      cI.id === cartItemToAdd.id ? { ...cI, quantity: cI.quantity + 1 } : cI
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseCartItemQuantity = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem && existingCartItem.quantity > 1) {
    return cartItems.map((cI) =>
      cI.id === cartItemToAdd.id ? { ...cI, quantity: cI.quantity - 1 } : cI
    );
  }

  return clearItemFromCart(cartItems, cartItemToAdd);
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
