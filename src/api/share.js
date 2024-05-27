import request from './index'

export const postShareOrder = (obj,jsonImagePaths)=>{
    const {username,uid,content} = obj
   return request.post('/postShareOrder',{username,uid,content,jsonImagePaths})
}

export const getShareOrder = ()=>{
    return request.get('/getShareOrder')
}