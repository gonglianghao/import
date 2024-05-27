<template>
    <div>
        <MenuHeader></MenuHeader>
       <div class="wrap">
        <div class="tab-list">
            <ul>
                <li v-for="(item,index) in liList" :key="index"><button @click="goList(item)">{{item}}</button></li>
            </ul>
        </div>
       </div>
    </div>
</template>

<script setup>

import {useRouter} from 'vue-router'
import {ref} from 'vue'

const router = useRouter()
  const liList = ref(['一天内' ,'三天内','七天内'])
  const goList = (isDay)=>{
   if(isDay=='一天内'){
    router.push('/onedayPage')
   }else if(isDay=='三天内'){
    router.push('/triduumPage')

   }else if(isDay=='七天内'){
    router.push('/hebdomadPage')
   }
  }
</script>

<style lang="less" scoped>
button {
    all: unset;
    cursor: pointer;
}
.wrap{
    width: 1200px;
    margin: 10px auto 0;
    .tab-list{
        ul{
            display: flex;
            li{
                width: 200px;
                height: 50px;
                font-size: 22px;
                margin: 0 15px;
                text-align: center;
                line-height: 50px;
                background-color: #faebd7;
            }
        }
    }
}
</style>