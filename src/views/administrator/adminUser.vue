<template>
    <div class="wrap">
        <div class="title"> <span>美食食谱平台后台管理</span></div>
        <div class="wrap-content">
            <adminList></adminList>
        <div class="content">
 <!-- 表格区域开始 -->
 <el-table v-loading="loading" :data="articleList.slice((page - 1) * limit,page * limit)">
                    <el-table-column label="用户名" prop="username"></el-table-column>
                    <el-table-column label="昵称" prop="nickname"></el-table-column>
            <el-table-column label="手机号" prop="phone"></el-table-column>
            <el-table-column label="密码" prop="password"></el-table-column>
           
            <el-table-column label="操作" width="100" >
              <template #default="{ row }">
      <el-button
        :icon="Edit"
        circle
        plain
        type="primary"
        @click="onEditChannel(row)"
      ></el-button>
      <el-button
        :icon="Delete"
        circle
        plain
        type="danger"
        @click="onDelChannel(row)"
      ></el-button>
    </template>
            </el-table-column>
          </el-table>
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
import { Delete, Edit } from '@element-plus/icons-vue'
import {ref,onMounted} from 'vue'
import {getAllUser} from '@/api/adminUser'
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
    allAnswer()
})
const allAnswer = async()=>{
  const  res  = await getAllUser()
  loading.value = true
  
  total.value = res.data.length
  articleList.value = res.data
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