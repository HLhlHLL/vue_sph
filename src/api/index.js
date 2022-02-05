// 统一管理API
import request from './request'
export const reqCategoryList = () => request.get('/product/getBaseCategoryList')
