import  Helpers from '../util/helpers/index';
import ApiScheme from './@scheme'


export const itemApi = {
    getItem: Helpers.createApi(ApiScheme.ITEMS.GET),
    addItem:Helpers.createApi(ApiScheme.ITEMS.ADD),
    updateItem: Helpers.createApi(ApiScheme.ITEMS.UPDATE),
    deleteItem: Helpers.createApi(ApiScheme.ITEMS.DELETE),
    searchItem: Helpers.createApi(ApiScheme.ITEMS.SEARCH)
}
