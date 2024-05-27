<template>
    <el-drawer
      v-model="visibleDrawer"
      :title="formModel.id ? '编辑文章' : '添加文章'"
      direction="rtl"
      size="40%"
    >
      <!-- 发表文章表单 -->
      <el-form :model="formModel" ref="formRef" label-width="100px">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="cate_name">
          <channel-edit
            v-model="formModel.cate_id"
            width="100%"
          ></channel-edit>
        </el-form-item>
        <el-form-item label="文章封面" prop="jsonImagePaths"> 
            <el-upload  
                 :auto-upload="false"
                    v-model:file-list="state.fileList" 
                    list-type="picture-card" 
                    :on-preview="handlePictureCardPreview"
                    :on-change="handleFileChange">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
                <el-dialog v-model="state.dialogVisible">
                    <img w-full :src="state.dialogImageUrl" alt="Preview Image" />
                </el-dialog>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <div class="editor">
            <QuillEditor theme="snow" placeholder="请输入笔记内容" v-model:content="formData.content"
                        contentType="html" style="height: 200px; margin-bottom: 50px;" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="publish">发布</el-button>
          <!-- <el-button type="info">草稿</el-button> -->
        </el-form-item>
      </el-form>
    </el-drawer>
  </template>

<script setup>
import {ref,reactive} from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {artPublishService} from '@/api/hotAdminApi'
// 抽屉显示隐藏
const visibleDrawer = ref(false)
// 默认数据
const defaultForm = {
    title: '',  //标题
  cate_name: '',   //几天内
  jsonImagePaths: '', //图片
  content: '',
}

const formModel = ref({
 ...defaultForm
})
// 组件对外暴露一个方法 open,  基于 open 的参数，初始化表单数据，并判断区分是添加 还是 编辑

// 1. open({ })    =>  添加操作，添加表单初始化无数据
// 2. open({ id: xx,  ...  })  =>  编辑操作，编辑表单初始化需回显
const open = (row)=>{
    visibleDrawer.value = true
    
   if(row.cate_name){
    
    // console.log('编辑回显');
   }else{
    formModel.value = {...defaultForm}

    // console.log('添加');
   }
}

defineExpose({
    open
})

const handleFileChange = (file, fileList) => {
  // 当上传的文件改变时触发
  fileList.forEach((item, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // 将图片转换为 base64 格式
      fileList[index].base64 = e.target.result;
    };
    reader.readAsDataURL(item.raw);
  });
};

const state = reactive({
    fileList: [],
    dialogVisible: false,
    dialogImageUrl: '',
    jsonImagePaths:[]
})
const formData = ref({

content: '',
});


// const emit  = defineEmits(['success'])
// 提交事件
const publish =async ()=>{
    state.jsonImagePaths = state.fileList[0].base64
  //   const fd = new FormData()
  //   for (let key in formModel.value) {
  //   fd.append(key, formModel.value[key])
  // }

    // 发请求
    if(formModel.value.cate_name){
        console.log('编辑操作');
    }else{
        console.log(formModel.value);
        await artPublishService(formModel.value, state.jsonImagePaths )
    // ElMessage.success('添加成功')
    // visibleDrawer.value = false
    // emit('success', 'add')
    }
}

// 图片上传事件
const handlePictureCardPreview = (file) => {
state.dialogImageUrl = file.url || file.row
state.dialogVisible = true
}

</script>

<style lang="less" scoped>

</style>