import request from './index'
export const getAllAnswer = () =>{
    return request.get('/getAllAnswer')
}