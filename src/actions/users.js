import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({ email, password }) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Jesse Williamson',
                address: '123 Bark Avenue',
                cartProducts: []
            }
        }
    })
}
export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}


export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Some generic description Some generic description Some generic description Some generic description Some generic description Some generic description Some generic description',
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80',
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Some generic description Some generic description Some generic description Some generic description Some generic description Some generic description Some generic description',
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80',
                },
                quantity: 1
            }
        ]
    })
}
export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 1.23,
                orderNumber: 'ASDFQWER1234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'

                }
            },
            {
                _id: 1,
                total: 2.34,
                orderNumber: 'QWERASDF1234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Bob',
                    shippingAddress: '4321 street'

                }
            },
            {
                _id: 2,
                total: 5.0,
                orderNumber: 'kjhgtyui76574',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Dog Doggerson',
                    shippingAddress: 'ABC street SE'

                }
            },
            {
                _id: 3,
                total: 3.42,
                orderNumber: 'yuiioolkjh657543',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Cat Catterson',
                    shippingAddress: 'Cat Street NewYork'

                }
            },
            {
                _id: 4,
                total: 4.32,
                orderNumber: 'asdfasdfqweqr13442',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Pig Piggerston',
                    shippingAddress: 'A random address'

                }
            },
            {
                _id: 5,
                total: 6.12,
                orderNumber: 'TREWERQWYDG654',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mole Molston',
                    shippingAddress: 'A new address'

                }
            },
            {
                _id: 6,
                total: 7.34,
                orderNumber: '1234afaewr123415a',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'This is my name',
                    shippingAddress: 'This is my address'

                }
            },
            {
                _id: 7,
                total: 1.23,
                orderNumber: '54367QWETWETS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Hi There',
                    shippingAddress: 'abcd address State Street'

                }
            }

        ]
    })
}