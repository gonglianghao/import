<template>

    <div class="head">
        <div @click="getBack" class="getBack"><span class="iconfont icon-ziyuan"></span>返回</div>
        <h2 class="pub-answer">我要分享</h2>
    </div>

    <div class="note-publish" style="background-color: #faebd7;">
        <el-form style="max-width: 800px; min-height:180px;" :model="formData" label-width="auto" class="demo-dynamic ">
            <!-- <el-form-item class="flex-form-item" label="标题">
                <el-input v-model="formData.title" class="flex-input"></el-input>
            </el-form-item> -->
            <el-form-item>
                <div class="editor">
                    <QuillEditor theme="snow" placeholder="请输入笔记内容" v-model:content="formData.content"
                        contentType="html" style="height: 200px; margin-bottom: 50px;" />
                </div>
            </el-form-item>
            <el-form-item>
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
            <el-form-item class="btn-container">
                <div class="btn-center">
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>

</template>

<script setup>
import { ref, reactive, } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { useRouter } from 'vue-router';
import { postShareOrder } from '@/api/share';
import { ElMessage, } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'


const router = new useRouter()
const formData = ref({

    content: '',
});


const state = reactive({
    fileList: [],
    dialogVisible: false,
    dialogImageUrl: '',
    jsonImagePaths:[]
})


// const handleFileChange = (file, fileList) => {
//   // 当上传的文件改变时触发
//   fileList.forEach((item, ) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       // 将图片转换为 base64 格式
//       item.base64 = e.target.result;
//     };
//     reader.readAsDataURL(item.raw);
//   });
// };



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




const onSubmit = async () => {
//   console.log(state.fileList[0]);
  state.jsonImagePaths = state.fileList[0].base64
    const uid = JSON.parse(localStorage.getItem('user')).user.id
    const { username } = JSON.parse(localStorage.getItem('userInfo'))

    const obj = { username, uid, ...formData.value, }
    // console.log(obj);
    await postShareOrder(obj,state.jsonImagePaths)
    
    ElMessage.success('提交成功')
    setTimeout(() => {
        router.push('/shareList')
    }, 1500)
}






const getBack = () => {
    router.push('/shareList')
}

// 图片上传事件

const handlePictureCardPreview = (file) => {

    state.dialogImageUrl = file.url || file.row
    state.dialogVisible = true
}


</script>

<style lang="less" scoped>

.head {
    width: 800px;
    margin: 50px auto 0;
    display: flex;
    align-items: center;

    .pub-answer {
        font-size: 28px;
        font-weight: 400;
        flex: 1;
        text-align: center;
        margin-left: -30px;
    }

    .getBack {
        padding-left: 30px;
        width: 60px;
        cursor: pointer;
    }
}

.editor {
    width: 800px;

}

.note-publish {
    width: 800px;
    margin: 20px auto 0;
}

.flex-form-item {
    display: flex;
    align-items: center;
    /* 可选，用于垂直居中对齐 */
    font-size: 22px;
}

.flex-input {
    width: 800px;
    border: none;
    margin-top: 10px;
}


.btn-container {
    width: 800px;
    height: 100px;

    .btn-center {
        margin: 0 auto;
    }

}
</style>
