// 统一管理API
import request from './ajax'
import mockRequest from './mockAjax'

export const reqCategoryList = () => request.get('/product/getBaseCategoryList')

export const reqBannerList = () => mockRequest.get('/banner')

export const reqFloorList = () => mockRequest.get('/floor')

export const reqSearchList = (params) => request.post('/list', params)

export const reqGoodDetails = (skuid) => request.get(`/item/${skuid}`)

export const reqShopCart = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`)

export const reqCartList = () => request.get('/cart/cartList')

export const reqRemoveCartById = (skuId) => request.delete(`/cart/deleteCart/${skuId}`)

export const reqChangeChecked = (skuId, isChecked) => request.get(`/cart/checkCart/${skuId}/${isChecked}`)

export const reqCode = (phone) => request.get(`/user/passport/sendCode/${phone}`)

export const reqRegister = (user) => request.post('/user/passport/register', user)

export const reqLogin = (user) => request.post('/user/passport/login', user)

export const reqUserInfo = () => request.get('/user/passport/auth/getUserInfo')

export const reqLogOut = () => request.get('/user/passport/logout')

export const reqUserAddress = () => request.get('/user/userAddress/auth/findUserAddressList')

export const reqTradeInfo = () => request.get('/order/auth/trade')

export const reqSubmitOrder = (tradeNo, data) => request.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data)

export const reqPayInfo = (orderId) => request.get(`/payment/weixin/createNative/${orderId}`)

export const reqPayStatus = (orderId) => request.get(`/payment/weixin/queryPayStatus/${orderId}`)

export const reqMyOrderList = ({ page, limit }) => request.get(`/order/auth/${page}/${limit}`)
