<template>
    <div class="wrap">
        <div class="title"> <span>美食食谱平台后台管理</span></div>
        <div class="wrap-content">
       <adminList></adminList>
       <div class="bg">
       </div>
    </div>
    <div class="bottom">欢迎管理员进入美食食谱平台
        <div class="goWebHome">
        <el-button type="primary" @click="goWebHomeBtn">前往前端首页</el-button>
    </div>
    </div>
    
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goWebHomeBtn = ()=>{
router.push('/homePage')
}
// import { useRouter } from 'vue-router';
// import {reactive,ref} from 'vue'
// const router = useRouter()
//   const state = reactive([
//     {title:'后台首页',
//      icon:'icon-shouye'
//     },
//     {title:'热门管理',
//     icon:'icon-remen'
//     },
//     {title:'问答管理',
//     icon:'icon-wenda'
//     },
//     {title:'分享管理',
//      icon:'icon-fenxiang'
//     },
//     {title:'用户管理',
//     icon:'icon-shouye'
//     },
//     ])
//     const flag = ref(false)
//     const goList =(title)=>{
//      flag.value = false
//      if(title=='后台首页'){
//         router('/adminHome')
//      }else if(title == '热门管理'){
//         router.push('/hotAdmin')
//      }else if(title =='问答管理'){
//         router.push('/adminAnswer')
//      }else if(title == '分享管理'){
//         router.push('/adminShare')
//      }else if(title=='用户管理'){
//         router.push('/adminUser')
//      }
//     }
</script>

<style lang="less" scoped>
.wrap{
    width: 1200px;
    margin: 20px auto 0;
    .title{
        width: 1200px;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        background-color: #f3d8b7;
        display: flex;
        justify-content: right;
        border-radius: 20px;
        span{
            padding-right: 100px;
          
        }
    }
    .wrap-content{
        display: flex;
        .mian-list{
       ul{
        margin-right: 20px;
        width: 280px;
        // margin-top: 40px;
        // background-color: pink;
        li{
            padding: 20px 10px;
            font-size: 20px;
            margin: 10px 0;
            background-color: #faebd7;
            text-align: center ;
            border-radius: 0 30px 30px 0;
            span{
                padding-right: 10px;
                font-size: 20px;
            }
        }
       } 
    }
        .bg{
            margin-top: 10px;
            width: 900px;
            height: 531px;
            background: url('@/assets/img/adminBg.png') no-repeat;
             background-size: cover;
           border-radius: 0 20px 20px 0;
        }
    }
    .bottom{
        width: 1200px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        font-size: 22px;
        margin-top: 15px;
        background-color: #faebd7;
    }
}
</style>