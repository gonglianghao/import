import request from './index'
export const getAllShare = () =>{
    return request.get('/getAllShare')
}