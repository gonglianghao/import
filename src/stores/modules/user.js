import {defineStore} from 'pinia'
import {ref} from 'vue'
import {userGetInfoService} from '@/api/user'

export const useUserStore = defineStore('user',()=>{
    const user = ref({
        id:'',
        username:'',
        nickname:'',
        phone:''
    })
  
    const getUser = async () => {
      const res = await userGetInfoService(user.value.id) // 请求获取数据
      console.log(res);
    //   user.value = res.data
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return {
     getUser,
     setUser ,
     user 
    }
},{
    persist:true
})