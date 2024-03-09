import { fetchuser, fetchCart } from "../utils/fetchLocalStorage";

const userInfo = fetchuser();
const cartInfo = fetchCart();



export const initialState = {
user : userInfo,
foodItems: null,
cartShow: false,
cartItems: cartInfo,
};  