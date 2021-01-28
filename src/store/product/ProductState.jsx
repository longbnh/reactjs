import { atom, selector } from "recoil";

export const productState = atom({
  key: "product",
  default: [
    { id: 1, name: "AK-47", price: 500, country: "Russia", amount: 1000 },
    { id: 2, name: "Bomb B-52", price: 1500, country: "USA", amount: 1000 },
    { id: 3, name: "Shotgun", price: 500, country: "China", amount: 1000 },
    { id: 4, name: "Rocket", price: 2500, country: "Nì Hon", amount: 1000 },
    { id: 5, name: "Tank", price: 11500, country: "Đông Lào", amount: 1000 },
  ],
});

// export const listProductSearch = selector({
//   key: "filter",
//   get: ({ get }) => {
//     const list = get(productState);

//     return list;
//   },
// });
