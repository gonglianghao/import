<template>
    <div class="wrap">
        <div class="title"> <span>美食食谱平台后台管理</span></div>
        <div class="wrap-content">
            <adminList></adminList>
        <div class="content">
           <!-- 表格区域开始 -->
             <div class="head">
              <ul>
                <li>用户名</li>
                <li>图片</li>
                <li>内容</li>
                <li>发表时间</li>
                <li style="margin-right: 0;">操作</li>
              </ul>
             </div>
             <div class="body">
               <div class="center" v-for="item in articleList" :key="item.id">
                 <div class="username">{{item.username}}</div>
                 <div class="center-image">
                  <img :src="item.jsonImagePaths" alt="" srcset="">
                 </div>
                 <div class="artcontent">
                  {{item.content}}
                 </div>
                 <div class="c_time">{{item.c_time}}</div>
                 <div class="caozuo">
                  <el-button type="primary">修改</el-button>
                  <el-button type="danger">删除</el-button>
                   </div>
               </div>
             </div>
          <!-- 表格区域结束 -->
          <!-- 分页区域开始 -->
          <el-pagination
             :current-page="page"
             :page-size="limit"
             :page-sizes="[ 2, 3, 5]"
             background
             layout="jumper,total, sizes, prev, pager, next, "
             :total="total"
             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             style="margin-top: 20px;"
           />
           <!-- 分页区域结束-->
        </div>
        </div>
    </div>
</template>

<script setup>
// import { Delete, Edit } from '@element-plus/icons-vue'
import {ref,onMounted} from 'vue'
import {getAllShare} from '@/api/adminShare'
// 默认总条数
const total = ref(10)
// 当前页
const page= ref(1)
// 每页长度
const limit =ref (5)
// 每页条数发生更变
const handleSizeChange = (val)=>{
    limit.value = val
    page.value = 1
} 
// 当前页发生改变
const handleCurrentChange = (val)=>{
  page.value = val
}

// 假数据
const articleList = ref([])
const loading = ref(false)
onMounted(() => {
    allShare()
})
const allShare = async()=>{
  const  res  = await getAllShare()
  loading.value = true
  
  total.value = res.data.length
  articleList.value = res.data
  // console.log(articleList.value);
  loading.value = false
}





</script>

<style lang="less" scoped>
.wrap{
    width: 1200px;
    margin: 20px auto 0;
    // background-color: pink;
    .wrap-content{
        display: flex;
        .content{
          width: 920px;
         .head{
          margin-top: 20px;
            ul{
           display: flex;
             li{
              margin: 0 120px 0 0;
              text-align: center;
             }
          }
         }
        }
    }
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
}
</style>

<style>
.center{display: flex;
        margin: 0 120px 0 0;
}
.center-image{
  img{
    width: 150px;
     height: 100px;
     margin-top: 20px;
     margin-left: 10px;
  }
}
.username{
  margin-top: 20px;
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.artcontent{
  width: 150px;
  height: 100px;
  margin-top: 20px;
  margin-left: 10px;
  display: -webkit-box;             /* 使用 flexbox 布局 */
  -webkit-box-orient: vertical;     /* 垂直排列子元素 */
  -webkit-line-clamp: 3;            /* 限制显示的行数 */
  overflow: hidden;                 /* 隐藏溢出内容 */
  text-overflow: ellipsis;          /* 使用省略号表示溢出的文本 */
  max-height: 4.5em;                /* 行高1.5em乘以行数3 */
  line-height: 1.5em;               /* 设定行高 */
}
.c_time{
  margin-top: 20px;
  margin-left: 20px;
  width: 150px;
  height: 50px;
  line-height: 50px;
}
.caozuo{
  margin-top: 20px;
  display: flex;
  margin-left: 50px;
}
</style>