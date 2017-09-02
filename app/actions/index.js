// @flow
import {
    SET_USER,
    ADD_ITEM,
    SORT_ITEMS,
    SET_ITEM,
    REMOVE_ITEM,
    SET_CURRENCY,
    SET_PAYDATE,
    SET_ADDINFO,
    SET_INVOICE_DETAILS
} from "../constants";

export type Action = {
    type: string,
    user?: string,
    id?: number,
    value?: Object,
    order?: Array<number>,
    discount?: string,
    tax?: string,
    payDate?: boolean,
    currency?: Object,
    invoiceDetails?: Object
};

export function setUser(user: string): Action {
    return {
        type: SET_USER,
        user
    }
}

export function addItem(id: number, value: Object): Action {
    return {
        type: ADD_ITEM,
        id,
        value
    }
}

export function setItemsOrder(order: Array<number>): Action {
    return {
        type: SORT_ITEMS,
        order
    }
}

export function setItem(id: number, value: Object): Action {
    return {
        type: SET_ITEM,
        id,
        value
    }
}

export function removeItem(id: number): Action {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function setAddInfo(discount: string, tax: string): Action {
    return {
        type: SET_ADDINFO,
        discount,
        tax
    }
}

export function setCurrency(currency: Object): Action {
    return {
        type: SET_CURRENCY,
        currency
    }
}

export function setPayDate(payDate: boolean): Action {
    return {
        type: SET_PAYDATE,
        payDate
    }
}

export function setInvoiceDetails(name, val: Object): Action {
    return {
        type: SET_INVOICE_DETAILS,
        name,
        val
    }
}
