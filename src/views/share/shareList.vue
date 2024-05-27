<template>
    <div>
       
        <MenuHeader></MenuHeader> 
         <div class="wrap">
            
            <div class="center">
                <div class="shiyan" v-for="(item,index) in state" :key="index">
                  <div class="userinfo">
                    <div class="username">{{item.username}}</div>
                    <div class=" time">{{item.c_time}}</div>
                </div>
                   
                   <div class="img-wrap">
                <img :src="item.jsonImagePaths" alt="" srcset="">
                </div>
                   <div class="content">{{item.content}}</div>
                   
                </div>
            </div>
            <div class="right">
                <div class="right-header">
                    <div class="btn-share">
                    <button @click="go">go</button>
                </div>
                <div class="right-user">
                    <span>活跃用户</span>
                </div>
                </div>
                <ul class="user-list">
                    <li>香蕉不拿那</li>
                    <li>笨蛋炒饭</li>
                    <li>盒子精</li>
                    <li>老马呀</li>
                    <li>胸口睡大猫</li>
                    <li>葱花是花</li>
                    <li>鸟是拖鞋</li>
                    <li>画师九练</li>
                    <li>疯人院院长</li>
                    <li>午夜的太阳</li>
                </ul>
            </div>
         </div>
    </div>
</template>

<script setup>
import {onMounted,ref} from 'vue';
import { useRouter } from 'vue-router';
import {getShareOrder} from '@/api/share';
const router = useRouter()
const go = ()=>{
    router.push('/shareOrder')
}

const state = ref('')

const getShareList = async()=>{
      const res  =  await getShareOrder() 
     
    state.value = res.data
    console.log( state.value);
    
    }

onMounted(() => {
    getShareList()
})
</script>

<style lang="less" scoped>
button {
    all: unset;
    cursor: pointer;
}
.wrap{
    display: flex;
    width: 1200px;
    margin: 15px auto 0;
   .center{
    width: 693px;
   margin: 10px 0;
   .userinfo{
    display: flex;
     justify-content: space-between;
     background-color: #f3d8b7;
    .time{
        padding:10px 10px ;
        
    }
    .username{
        font-size: 24px;
        padding:  10px 10px;
    }
   }
    .content{
        font-size: 20px;
        line-height: 1.5;
        padding:  10px 10px;
        background-color: #f3d8b7;
        margin-bottom: 30px;
    }
   
   }
   .right{
    width: 400px;
   
    margin:10px 0 0 20px;
    .right-header{
        display: flex;
        justify-content: space-between;
        .btn-share{
        width: 200px;
        height: 50px;
        background-color: #faebd7;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        margin:10px 0 0 20px;
    }   
    .right-user{
        width: 200px;
        height: 50px;
        background-color: #faebd7;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        margin:10px 0 0 20px;
    }
    }
    
    .user-list{
        margin:10px 0 0 50px;
        text-align: center;
        li{
            width: 300px;
            height: 50px;
            background-color: #f3d8b7;
           line-height: 50px;
           font-size: 20px;
        }
    }
   }
}
</style>