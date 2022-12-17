import { defineStore } from "pinia";
import { itemTypes } from "../constants/actionsType/index";
const DEFAULT_STATE = {
    data: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: "",
    totalPage:1,
    activePage:1,
    skip:1,
    textSearch:''
};

export const useStore = defineStore({
    id: "item",
    state: () => DEFAULT_STATE,
    getters: {
        items: (state) =>
            state.listItem.reduce((items, item) => {
                items.push({ name: item });
                return items;
            }, []),
    },
    actions: {
        //get
        getRequest() {
            // console.log('reducer')
            itemTypes.GET_ITEMS_REQUEST;
            this.isFetching = true;
        },
        getSuccess(payload) {
            this.data = payload.data,
            itemTypes.GET_ITEMS_SUCCESS,
            this.isFetching = false
            this.totalPage = payload.totalPage;
            this.activePage = payload.activePage,
            this.skip = payload.skip
        },
        searchFailure() {
            itemTypes.SEARCH_ITEMS_FAILURE;
        },
        //SEARCH
        searchRequest() {
            // console.log('reducer')
            itemTypes.SEARCH_ITEMS_REQUEST;
            this.isFetching = true;
        },
        searchSuccess(payload) {
            this.data = payload.data,
            itemTypes.SEARCH_ITEMS_SUCCESS,
            this.isFetching = false
            this.totalPage = payload.totalPage;
            this.activePage = payload.activePage,
            this.skip = payload.skip,
            this.textSearch = payload.textSearch
        },
        searchFailure() {
            itemTypes.SEARCH_ITEMS_FAILURE;
        },
        //add
        addRequest() {
            // console.log('reducer')
            itemTypes.ADD_ITEMS_REQUEST;
            this.isFetching = true;
        },
        addSuccess() {
            itemTypes.ADD_ITEMS_SUCCESS, 
            this.isFetching = false;
        },
        addFailure() {
            itemTypes.ADD_ITEMS_FAILURE;
        },
        //delete
        deleteRequest() {
            itemTypes.DELETE_ITEMS_REQUEST;
            this.isFetching = true;
        },
        deleteSuccess() {
            itemTypes.DELETE_ITEMS_SUCCESS, 
            this.isFetching = false;
        },
        deleteFailure() {
            itemTypes.DELETE_ITEMS_FAILURE;
        },
        //update
        updateRequest() {
            itemTypes.UPDATE_ITEMS_REQUEST;
            this.isFetching = true;
        },
        updateSuccess() {
            itemTypes.UPDATE_ITEMS_SUCCESS, 
            this.isFetching = false;
        },
        updateFailure() {
            itemTypes.UPDATE_ITEMS_FAILURE;
        },
    },
});
