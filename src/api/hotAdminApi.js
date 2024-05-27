import request from './index'

export const artGetDayList = (value)=>{
    console.log(value);
    return request.post('/artGetDayList',{value})
}




export const artGetAllDayList =()=>{
  return request.get('/artGetAllDayList')
 }


// 提交
 export const artPublishService = (obj,jsonImagePaths )=>{
  const {title,cate_name,content}=obj
    return request.post('/artPublishService',{title,cate_name,content,jsonImagePaths})
 }