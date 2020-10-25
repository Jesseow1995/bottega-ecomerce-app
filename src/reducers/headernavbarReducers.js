import { actionTypes } from "redux-form";

import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types'

const INITIAL_STATE = {
    headerLinks: [],
    navbarLinks: []
}

export default function (state = INITIAL_STATE) {
    switch (actionTypes.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: actionTypes.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLinks: actionTypes.payload
            }

        default:
            return state;
    }
}