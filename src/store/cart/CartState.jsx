import { atom } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const addToCart = (product, cart, amount) => {
  let newCart = [...cart];
  let index = newCart.findIndex(
    (itemInCart) => itemInCart.id === product.id // trả về
  );
  if (index < 0) {
    // product = JSON.parse(product);
    product.amount = amount;
    newCart.push(product);
    return newCart;
  } else {
    let tempArray = newCart.map((item) => {
      if (item.id === newCart[index].id) {
        let temp = { ...item, amount: item.amount + amount };
        return temp;
      }
      return item;
    });
    return tempArray;
  }
};
