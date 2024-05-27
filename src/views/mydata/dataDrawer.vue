<template>
    <div>
     <el-drawer 
     v-model="visible"
     @close="cancel"
     >
       <template #header>
         <h4>编辑个人信息</h4>
       </template>
      <div>
         <el-form
          
             label-width="100px"
             style="max-width: 460px"
             :model="data"
             :rules="rules"
             ref="formRef"
         >
             <el-form-item label="用户名" prop="username">
             <el-input v-model="data.username"/>
             </el-form-item>
             <el-form-item label="手机号码" prop="phone">
             <el-input v-model="data.phone"/>
             </el-form-item>
             <el-form-item label="位置" prop="address">
             <el-input v-model="data.address"/>
             </el-form-item>
             
             <el-form-item label="昵称" prop="nickname">
             <el-input v-model="data.nickname"/>
             </el-form-item>
         </el-form>
         <div class="footer">
         <el-button plain @click="cancel">取消</el-button>
         <el-button plain type="primary" @click="submit">确认</el-button>
         </div>
      </div>
     </el-drawer>
    </div>
 </template>
 
 <script setup>
 import {ref } from "vue";
//  import { useUserStore } from '@/store/user';
//  const UserStore = useUserStore()
 const formRef = ref()
 
//  onMounted(()=>{
//      if(UserStore.userData.addressList.length>0)
//      UserStore.userData.deliveryAddress = UserStore.userData.addressList.find(item=>item.default).address
//  })
 const data = ref({
     username: '',
     phone: '',
     address: '',
     nickname: ''
 })
//  const setData = ()=>{
//      data.value.username = UserStore.userData.username
//      data.value.phone = UserStore.userData.phone
//      data.value.address = UserStore.userData.address
//      data.value.addressList = UserStore.userData.deliveryAddress
//      data.value.email = UserStore.userData.email
//  }
 const submit = ()=>{
    localStorage.removeItem('userinfo')
    localStorage.setItem('userinfo',JSON.stringify(data.value))
 }
 
 const rules = ref({
     username:[{ required: true, message: '用户名不能为空', trigger: 'blur' }],
     phone:[
         { required: true, message: '联系电话不能为空', trigger: 'blur' },
         { min: 11, max: 11, message: '联系电话输入有误', trigger: 'blur' }],
     address:[{ required: true, message: '地址不能为空', trigger: 'blur' }],
     nickname:[{ required: true, message: '昵称不能为空', trigger: 'blur' }],
     
 })
 const visible = ref(false)
 const openDrawer = ()=>{
    
     visible.value = true
 }
 

 
 const cancel = ()=>{
     formRef.value.resetFields()
     visible.value = false
 }
 defineExpose({
     openDrawer
 })
 </script>
 
 <style lang="less" scoped>
 .footer{
     margin-top: 40px;
     text-align: center;
     .el-button{
         margin-right: 10px;
     }
 }
 @media screen and (max-width: 820px) {
     ::v-deep(.el-drawer.rtl.open){
         width: 15rem !important;
     }
     ::v-deep(.el-drawer__body){
         padding: 0 0.6rem 0 0;
     }
 }
 </style>