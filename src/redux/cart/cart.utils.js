export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cI) =>
      cI.id === cartItemToAdd.id ? { ...cI, quatity: cI.quatity + 1 } : cI
    );
  }

  return [...cartItems, { ...cartItemToAdd, quatity: 1 }];
};
