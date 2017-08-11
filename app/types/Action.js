// @flow
import { SET_USER, ADD_ITEM, SORT_ITEMS } from "../constants";

type sortItemsAction = {
    type: SORT_ITEMS;
    items: Array<mixed>;
};

type addItemAction = {
    type: ADD_ITEM;
};

export type Action = sortItemsAction | addItemAction;