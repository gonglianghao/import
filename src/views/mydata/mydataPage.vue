<template>
   <MenuHeader></MenuHeader>
    <div class="content">
           <el-descriptions
   class="margin-top"
   title="用户信息"
   :column = 1
   :border="true"
 >
   <template #extra>
     <el-button type="primary" plain round size="large" @click="openDrawer">编辑用户信息</el-button>
     <dataDrawer ref="Drawer"/>
   </template>
   <el-descriptions-item>
       <template #label>
           <div class="cell-item">
           <el-icon><user /></el-icon>UID
           </div>
       </template>
       {{ userData.id }}
   </el-descriptions-item>
   <el-descriptions-item>
       <template #label>
           <div class="cell-item">
           <el-icon><user /></el-icon>用户名
           </div>
       </template>
       {{ userData.username }}
   </el-descriptions-item>
   <el-descriptions-item>
       <template #label>
           <div class="cell-item">
           <el-icon><iphone /></el-icon>手机号码
           </div>
       </template>
       {{ '' || userData.phone }} 
   </el-descriptions-item>
       <el-descriptions-item>
       <template #label>
           <div class="cell-item">
           <el-icon>
               <Message />
           </el-icon>
          昵称
           </div>
       </template>
       {{ '小白' ||userData.nickname }}
       </el-descriptions-item>
       <el-descriptions-item>
        <template #label>
            <div class="cell-item">
            <el-icon>
                <office-building />
            </el-icon>
           地址
            </div>
        </template>
         {{ '江西南昌' || userData.address }} 
        </el-descriptions-item>
   </el-descriptions>
   <el-button type="primary" plain round  size="large" class="admin" @click="goAdmin">管理员登录</el-button>
   </div>
   
</template>

<script setup>
import MenuHeader from '@/components/MenuHeader.vue';
import {Iphone,User,Message,OfficeBuilding} from '@element-plus/icons-vue'
// import { useUserStore } from '@/store/user';
import { ref, } from 'vue'
import dataDrawer from './dataDrawer.vue'
import {useRouter} from 'vue-router'
const router = useRouter()
// const UserStore = useUserStore()
const userData = JSON.parse(localStorage.getItem('userInfo'))

const Drawer = ref()
const openDrawer = ()=>{
   Drawer.value.openDrawer()
}
// onMounted(()=>{
//    if(UserStore.userData.addressList.length>0)
//    UserStore.userData.deliveryAddress = UserStore.userData.addressList.find(item=>item.default).address
// })

//管理员跳转
const goAdmin = ()=>{
    router.push('/adminLogin')
}
</script>

<style scoped lang="less">
.content{
    width: 1200px;
    margin: 20px auto;
}
.el-icon{
   width: 25px;
   height: 25px;
   margin-right: 10px;
}
@media screen and (max-width: 820px) {
   .el-button--large.is-round{
       padding: 0;
       font-size: 0.7rem;
       width: 5.5rem;
       height: 2rem;
   }
   ::v-deep(.el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell){
       padding: 0.6rem 1rem;  
   }
   ::v-deep(.el-descriptions__label.el-descriptions__cell.is-bordered-label){
       width: 5rem;
       font-size: 0.7rem;
       height: 2.7rem !important;
       padding: 0 !important;
   }
   .el-icon{
   width: 1.5rem;
   height: 1.5rem;
   margin-right: 0.1rem !important;
   padding: 0 !important;
}
}
::v-deep(.admin){
    margin-left: 500px;
    margin-top: 20px;
}
</style>
