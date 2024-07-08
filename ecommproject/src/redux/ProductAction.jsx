import {  PRODUCT_LIST} from "./Constant"

export const productList = (data) => {
    
    return {
        type: PRODUCT_LIST,
        data
    }
}

