import request from './index'

// 注册接口
export const userRegisterServer = ({username,nickname,password,phone})=>{
      return request.post('/register',{
           username,nickname,password,phone 
      })
}
// 登录接口
export const userLoginServer = ({phone,password})=>{
    return  request.post('/login',{phone,password})
}

// 获取用户信息接口
export const userGetInfoService = (id)=>{
   return request.post('/user',{
    id
   })
}