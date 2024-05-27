import request from './index'
export const getAllUser = () =>{
    return request.get('/getAllUser')
}