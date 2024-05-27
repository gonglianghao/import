<template>
    <div class="wrap">
        <MenuHeader></MenuHeader>
        <div class="main">
            <div class="left-content">
                <div class="top">
                    <div class="allQuestion top-demo"><button @click="btnQuestion">全部问题</button></div>
                    <div class="muAnswer top-demo"><button @click="btnAnswer">我要提问</button></div>
                </div>
                <div class="question">
                    <div class="userinfo">
                        <div class="username">用户名： {{ data.username }}</div>
                        <div class="createTime">日期： {{ data.c_time }}</div>
                    </div>
                    <div class="question-wrap">
                        <div class="title">标题：{{ data.title }}
                            <div style="font-size: 18px; padding: 13px 0;">内容:</div>
                        </div>
                        <div class="content" v-html="data.content"></div>
                    </div>
                </div>
                <div class="comment">
                   <div class="comment-count">评论数 {{arr.length}} </div>
                   <div class="comment-input">
                    <div class="comment-input-user">空格</div>
                    <div class=" comment-input-content">
                        <el-input 
                        class="el-input"
                    v-model="data.textarea" 
                    maxlength="300" 
                    show-word-limit
                    :rows = 'data.isRows'
                    @blur="handleBlur"  
                    @focus='handleFocus'
                    placeholder="平等表达，友善交流"
                     type="textarea" />
                    </div>
                   </div>
                   <div class="submit">
                    <div class="submit-btn">
                        <button @click="send">发送</button>
                    </div>
                   </div>
                </div>
                <div class="commentList" v-for="(item,index) in newArr.value" :key="index">
                    <div class="commentList-user" >{{uname}}</div>
                    <div class="commentList-content">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref,reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getQuestionDetail,postUserComment ,getUserComment} from '@/api/aswers'
import {flattenArray} from '@/utils/arrayPatting'

const route = useRoute()
const router = useRouter()

const data = ref({
    username: '',
    c_time: '',
    title: '',
    content: '',
    isRows:2,
    textarea:'',
    
})

const arr = reactive([])
const newArr = reactive([])
const uname = ref('')
const Array = ref([])
// 渲染问题详情
const questionDetail = async () => {
   const res = await getQuestionDetail(route.query.cid)
   data.value = res.data
}

// 失去焦点事件
const handleBlur = ()=>{
     setTimeout(() => {
        data.value.isRows = 2
     }, 1000);
}

//获得焦点
const handleFocus = ()=>{
    data.value.isRows = 4
}

// 点击按钮发布评论
const send =async ()=>{
    // const uid = JSON.parse(localStorage.getItem('user')).user.id
    arr.push(data.value.textarea)
     Array.value = JSON.stringify(arr)
  await postUserComment(route.query.cid,Array.value)
     data.value.textarea = ''
    //  arr.shift()
    userComment()
}

// 回显评论
const userComment = async ()=>{
    const res = await getUserComment(route.query.cid)
    // console.log(res.data);
     newArr.value = JSON.parse(res.data.comment)
     newArr.value = flattenArray(newArr.value)
     arr.push(newArr.value) 
    console.log(newArr.value);
    uname.value = JSON.parse(localStorage.getItem('user')).user.username
}

//   跳转全部问题
const btnQuestion = () => {
    router.push('/questionpage')
}

//   跳转去提问
const btnAnswer = () => {
    router.push('/askquestion')
}
onMounted(() => {
    questionDetail()
    userComment()
})
</script>

<style lang="less" scoped>
button {
    all: unset;
    cursor: pointer;
}

.main {
    width: 1200px;
    margin: 0 auto;

    .left-content {
        width: 800px;
        margin: 30px 0 0 0;


        .top {
            display: flex;
            justify-content: left;

            .top-demo {
                width: 100px;
                height: 50px;
                font-size: 20px;
                text-align: center;
                line-height: 50px;
                margin-right: 20px;

                padding: 10px 30px;
                background-color: #faebd7;
            }
        }

        .question {

            margin-top: 10px;
            background-color: #f3d8b7;

            .userinfo {
                display: flex;
                justify-content: space-between;
                padding: 15px;
                font-size: 18px;

            }

            .question-wrap {
                padding: 0 15px;

                .title {
                    font-size: 20px;
                    margin-top: 15px;
                    // margin: 12px 0;
                }

                .content {
                    font-size: 18px;
                    padding-bottom: 15px;
                    line-height: 1.5;
                }
            }
        }
        .comment{
            margin-top: 10px;
            .comment-count{
                font-weight: 600;
               margin: 20px 0;
            }
            .comment-input{
                display: flex;
                .comment-input-user{
                    font-size: 18px;
                    margin-right: 10px;
                    align-self: center;
                }
                .comment-input-content{
                    .el-input{
                        width: 750px;
                       
                    }
                }
            }
            .submit{
                margin-top: 10px;
                display: flex;
                justify-content: right;
               .submit-btn{
                button{
                    border-radius: 20px;
                    text-align: center;
                    width: 60px;
                    height: 35px;
                    color: white;
                    background-color: #1171ee;
                    font-size: 15px;
                }
               }
            }
        }
        .commentList{
            margin: 20px 0 20px 0;
             padding: 10px 15px 15px 15px;
            background-color: #faebd7;
            .commentList-user{
                font-size: 20px;
                margin: 15px 0;
              
            }
            .commentList-content{
               font-size: 18px; 
               line-height: 1.5;
               
            }
        }
    }
}

::v-deep .el-input .el-input__count {
  align-items: flex-end !important;

}


::v-deep .el-textarea__inner{
padding-right: 52px !important;
}
</style>