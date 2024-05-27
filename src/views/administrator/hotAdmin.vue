<template>
  <div class="wrap">
    <div class="title"> <span>美食食谱平台后台管理</span></div>
    <div class="wrap-list">
      <adminList></adminList>
      <div class="content">

        <page-container title="文章管理">
          <template #extra>
            <el-button type="primary" @click="onAddArticle">添加文章</el-button>
          </template>
          <!-- 表单区域 -->
          <el-form inline>
            <el-form-item label="热门分类">
              <ChannelEdit v-model="params.cate_name"></ChannelEdit>
            </el-form-item>
            <!-- <el-form-item label="发布状态">
              <el-select v-model="params.state">
                <el-option label="已发布" value="1"></el-option>
                <el-option label="草稿" value="0"></el-option>
              </el-select>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="onSearch">搜索</el-button>
              <el-button @click="onReset">重置</el-button>
            </el-form-item>
          </el-form>
          <!-- 表单区域结束 -->
          <!-- 表格区域 -->
          <el-table v-loading="loading" :data="articleList.slice((page - 1) * limit,page * limit)">
            <el-table-column label="文章标题" prop="title"></el-table-column>
            <el-table-column label="分类" prop="cate_name"></el-table-column>
            <el-table-column label="发表时间" prop="c_time"></el-table-column>
           
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
          <!-- 抽屉组件开始 -->
          <ArticleEdit ref="articleEditRef"></ArticleEdit>
          <!-- 抽屉组件结束 -->
        </page-container>

      </div>
    </div>

  </div>
</template>

<script setup>

import { ref ,onMounted} from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import {artGetAllDayList,artGetDayList} from '@/api/hotAdminApi.js'


// 假数据
const articleList = ref([])

// 定义请求参数对象
const params = ref(
   {
    cate_name:'',
    cate_id:''
   }
)

// 默认总条数
const total = ref(10)
// 当前页
const page= ref(1)
// 每页长度
const limit =ref (5)

const loading = ref(false)
onMounted( () => {
  getAllDayList()
}) 

const getAllDayList = async ()=>{
  loading.value = true
  const res   = await artGetAllDayList()
  total.value = res.data.length
  articleList.value = res.data
  loading.value = false
}

// 每页条数发生更变
const handleSizeChange = (val)=>{
    limit.value = val
    page.value = 1
} 
// 当前页发生改变
const handleCurrentChange = (val)=>{
  page.value = val
  
}

// 搜索逻辑
const onSearch = async()=>{
  page.value = 1
  const res = await artGetDayList(params.value.cate_name)
  articleList.value = res.data
  total.value = res.data.length
}
// 重置逻辑
const onReset = ()=>{
  page.value=1
  params.value.cate_name=''
  getAllDayList()
}

const articleEditRef = ref()
// 点击添加文章
const onAddArticle = ()=>{
articleEditRef.value.open({}) //传入空对象表示添加
}

// 点击编辑
 const onEditChannel= (row)=>{
  // console.log(row);
  articleEditRef.value.open(row) //传入row表示编辑
 }



</script>
<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: 20px auto 0;

  .title {
    width: 1200px;
    height: 60px;
    font-size: 22px;
    line-height: 60px;
    background-color: #f3d8b7;
    display: flex;
    justify-content: right;
    border-radius: 20px;

    span {
      padding-right: 100px;
    }
  }

  .wrap-list {
    display: flex;
  }

}
</style>
<style>
.el-select {
  width: 200px;

}
</style>
