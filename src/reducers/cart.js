/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import * as Types from './../constants/ActionType';

// eslint-disable-next-line no-unused-vars
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];


// eslint-disable-next-line no-unused-vars
const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    // eslint-disable-next-line no-unused-vars
    var index = -1; //khong tim thay thi index = -1
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        // eslint-disable-next-line no-fallthrough
        default: return [...state];


    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;