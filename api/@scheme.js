import { REST_API_METHOD as METHOD, BASE_URL } from '../constants/index'

const API_SCHEME = {
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
    },
    //business API
    ITEMS: {
        GET: {
            url: `${BASE_URL}/item`,
            method: METHOD.GET
        },
        SEARCH: {
            url: `${BASE_URL}/item/search`,
            method: METHOD.SEARCH
        },
        ADD: {
            url: `${BASE_URL}/item`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/item/:id`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/item/:id`,
            method: METHOD.DELETE
        },
    }
}
 
export default API_SCHEME
