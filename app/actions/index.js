// @flow
import {
    ADD_ITEM,
    SORT_ITEMS,
    SET_ITEM,
    REMOVE_ITEM,
    SET_CURRENCY,
    SET_DATE_FORMAT,
    SET_PAID_STATUS,
    SET_ADDINFO,
    SET_INVOICE_DETAILS,
    SET_STATUS,
    SET_ISSUE_DATE,
    SET_DUE_DATE,
    SET_WIDTH,
    SET_DOWNLOAD_STATUS
} from "../constants";

export type Action = {
    type: string,
    id?: number,
    value?: Object,
    order?: Array<number>,
    discount?: string,
    tax?: string,
    amountPaid?: string,
    paidStatus?: boolean,
    currency?: Object,
    dateFormat?: Object,
    invoiceDetails?: Object,
    status?: Object,
    issueDate?: Date,
    width?: number,
    downloadStatus?: boolean,
    dueDate?: Date,
    name?: string,
    val?:string
};

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

export function setAddInfo(discount: string, tax: string, amountPaid: string, vat: string): Action {
    return {
        type: SET_ADDINFO,
        discount,
        tax,
        amountPaid,
        vat
    }
}

export function setCurrency(currency: Object): Action {
    return {
        type: SET_CURRENCY,
        currency
    }
}

export function setDateFormat(dateFormat: Object): Action {
    return {
        type: SET_DATE_FORMAT,
        dateFormat
    }
}

export function setStatus(status: Object): Action {
    return {
        type: SET_STATUS,
        status
    }
}

export function setPaidStatus(paidStatus: boolean): Action {
    return {
        type: SET_PAID_STATUS,
        paidStatus
    }
}

export function setDownloadStatus(downloadStatus: boolean): Action {
    return {
        type: SET_DOWNLOAD_STATUS,
        downloadStatus
    }
}

export function setInvoiceDetails(name: string, val: string): Action {
    return {
        type: SET_INVOICE_DETAILS,
        name,
        val
    }
}

export function setIssueDate(issueDate: Date): Action {
    return {
        type: SET_ISSUE_DATE,
        issueDate
    }
}

export function setDueDate(dueDate: Date): Action {
    return {
        type: SET_DUE_DATE,
        dueDate
    }
}

export function setWidth(width: number): Action {
    return {
        type: SET_WIDTH,
        width
    }
}
