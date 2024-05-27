<!-- <template>
       <div class="main-list">
        <ul>
            <li v-for="(item,index) in state" :key="index"  :class="{ active: currentIndex==index}"> 
                <span class="iconfont " :class=" item.icon" ></span>
                <button @click="goList(item.title,index)">{{item.title}}</button>
            </li>
        </ul>
       </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {reactive,ref} from 'vue'
const router = useRouter()
  const state = reactive([
    {title:'后台首页',
     icon:'icon-shouye'
    },
    {title:'热门管理',
    icon:'icon-remen'
    },
    {title:'问答管理',
    icon:'icon-wenda'
    },
    {title:'分享管理',
     icon:'icon-fenxiang'
    },
    {title:'用户管理',
    icon:'icon-shouye'
    },
    ])
    const currentIndex = ref(0)
    const goList =(title,index)=>{
        
        currentIndex.value = index
        console.log(currentIndex.value);
     if(title=='后台首页'){
        router.push('/adminHome')
       
     }else if(title == '热门管理'){
        router.push('/hotAdmin')
  

     }else if(title =='问答管理'){
       
        router.push('/adminAnswer')
      
     }else if(title == '分享管理'){
        
        router.push('/adminShare')
        
     }else if(title=='用户管理'){
       
        router.push('/adminUser')
       
     }
    }
</script>

<style lang="less" scoped>

   
    
        .main-list{

            .active{
              background-color: pink !important;
              }
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
       
 

</style> -->





<template>
    <div class="main-list">
      <ul>
       
        <li class="list-li" v-for="(item, index) in state" :key="index" >
          <span class="iconfont" :class="item.icon"></span>
          <button @click="goList(item.title, index)">{{ item.title }}</button>
        </li>
       
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { reactive, } from 'vue';
  
  const router = useRouter();
  const state = reactive([
    { title: '后台首页', icon: 'icon-shouye' },
    { title: '热门管理', icon: 'icon-remen' },
    { title: '问答管理', icon: 'icon-wenda' },
    { title: '分享管理', icon: 'icon-fenxiang' },
    { title: '用户管理', icon: 'icon-shouye' }
  ]);

  
  const goList = (title, ) => {
   
    
    switch (title) {
      case '后台首页':
        router.push('/adminHome');
        break;
      case '热门管理':
        router.push('/hotAdmin');
        break;
      case '问答管理':
        router.push('/adminAnswer');
        break;
      case '分享管理':
        router.push('/adminShare');
        break;
      case '用户管理':
        router.push('/adminUser');
        break;
      default:
        break;
    }
  };
  </script>
  
  <style lang="less" scoped>
  .main-list {
    ul {
      margin-right: 20px;
      width: 280px;
  
      .list-li {
        padding: 20px 10px;
        font-size: 20px;
        margin: 10px 0;
        background-color: #faebd7;
        text-align: center;
        border-radius: 0 30px 30px 0;
  
        span {
          padding-right: 10px;
          font-size: 20px;
        }
      }
    }
  }
  </style>
  