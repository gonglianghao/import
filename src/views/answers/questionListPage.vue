<template>
    <div>
        <!-- 头部组件 -->
        <menuHeader></menuHeader>

        <div class="content-question">
            <!-- 相关评论部分 -->
            <article>
                <div class="main">
                    <section class="question-list" v-for="(item, index) in data.newArr" :key="index">
                        <div class="user">
                            <div class="username">{{ item.username }}</div>
                            <div class="time">{{item.c_time}}</div>
                        </div>
                        <div class="title">{{ item.title }}</div>
                        <div class="detail" v-html="item.content">

                        </div>
                        <div class="list">
                           <button> <div class="like  " @click="likebtn(item.cid,item.likecount,item.likeflag,item.isActive)">
                            <i class="iconfont icon-dianzan1"
                            :class="{active:item.isActive}"
                             >
                            </i>点赞({{item.likecount}})</div></button>
                           <button @click="btnComment(item.cid)"> <div class="answer"><i class="iconfont icon-xinxi"></i>回答</div></button>
                            <button><div class="collect" @click="collectbtn(item.cid,item.collectCount,item.collectFlag,item.isActiveCollect)">
                            <i class="iconfont icon-xinxi"
                            :class="{active:item.isActiveCollect}"
                            >
                            </i>收藏({{item.collectCount}})</div></button>
                        </div>
                    </section>
                </div>

                <div>
                    <el-pagination
                 @current-change="handleCurrentChange" 
                 background
                  layout="prev, pager, next"
                    :total="50" 
                    class="mt-4" 
                    style="margin-bottom: 20px;"
                    />
                </div>

            </article>
            <!-- 相关评论部分结束 -->
            <!-- 右侧我的提问开始 -->
            <div class="content-right">
                <div class="my-question"><span class="iconfont icon-tiwen">
                    </span><span @click="subquestion">我的提问</span>
                </div>
                <div class="related">
                    <h3>热门问答</h3>
                    <div class="relatedd-question">
                        <p>纯牛奶怎么变淡牛奶</p>
                        <p>生粉可以做珍珠吗</p>
                        <p>糯米粉和椰子粉可以一起吃吗</p>
                        <p>图纸肉怎么炖好吃</p>
                        <p>果冻要冻多长时间</p>
                        <p>板栗和三期可以和鸡一起煮吗？</p>
                        <p>死面火烧怎么打好吃</p>
                    </div>
                </div>
            </div>
            <!-- 右侧我的提问结束 -->
        </div>
        <!-- 分页 -->


    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
import { getQuestionMessage,postLikeCountMessag ,postCollectCountMessag} from '@/api/aswers'


const router = new useRouter()


// 点击我的提问跳转页面
const subquestion = () => {
    router.push('/askquestion')
}

const data = ref({
    arr: '',
    currentPage: '',
    pageSize: 5,
    newArr: [],
    likeCount:0,
    articleId:'',
    // likeFlag:1,
    collectCount:0,
    page:0
})

//点击跳转分页
const handleCurrentChange = (val) => {
    data.value.page = val 
    data.value.newArr = data.value.arr.slice(( data.value.page - 1) * data.value.pageSize,  data.value.page * data.value.pageSize)
    window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
}



//获取ask接口数据
const getAskQuestion = async () => {
    const res = await getQuestionMessage()
    // console.log(res.data);
    data.value.arr = res.data.reverse()
    data.value.newArr = data.value.arr.slice(0, 4)
}

// 点击点赞事件
const likebtn = async (cid, like, likeFlag, isActive) => {
    data.value.articleId = cid;
    data.value.likeCount = Number(like);

    // 点击后将 isActive 的值取反
    isActive = isActive ==1 ? 0 : 1
    console.log('isisActive----',isActive );
    if (likeFlag == 1) {
        data.value.likeCount = data.value.likeCount - 1;
    } else {
        data.value.likeCount = data.value.likeCount + 1;
    }

    const updatedItemIndex = data.value.newArr.findIndex(item => item.cid === cid);
    if (updatedItemIndex !== -1) {
        const updatedItem = data.value.newArr[updatedItemIndex];
        updatedItem.likecount = data.value.likeCount;
        updatedItem.likeflag = likeFlag ? 0 : 1;
        updatedItem.isActive = isActive; // 将更新后的 isActive 重新赋值给数据中的 isActive
        data.value.newArr.splice(updatedItemIndex, 1, updatedItem);
    }

    await postLikeCountMessag(data.value.articleId, data.value.likeCount, likeFlag, isActive);
}


// 点击收藏事件
const collectbtn = async (cid, collectCount, collectFlag, isActiveCollect) => {
    data.value.articleId = cid;
    data.value.collectCount = Number(collectCount);

    // 点击后更新 isActiveCollect 的值
    isActiveCollect = isActiveCollect == 1 ? 0 : 1;
    if (collectFlag == 1) {
        data.value.collectCount = data.value.collectCount - 1;
    } else {
        data.value.collectCount = data.value.collectCount + 1;
    }
    const updatedItemIndex = data.value.newArr.findIndex(item => item.cid === cid);
    if (updatedItemIndex !== -1) {
        const updatedItem = data.value.newArr[updatedItemIndex];
        updatedItem.collectCount = data.value.collectCount;
        updatedItem.collectFlag = collectFlag ? 0 : 1;
        updatedItem.isActiveCollect = isActiveCollect; // 将更新后的 isActiveCollect 重新赋值给数据中的 isActiveCollect
        data.value.newArr.splice(updatedItemIndex, 1, updatedItem);
    }

    await postCollectCountMessag(data.value.articleId, data.value.collectCount, collectFlag, isActiveCollect);
}

//点击回答跳转页面
const btnComment = (cid)=>{
    router.push({path:'/comment',query:{cid:cid}})  //携带参数进行跳转
}

onMounted(() => {
    getAskQuestion()
})
</script>

<style lang="less" scoped>
.active{
    color: #a3deb0;
}



button{
    all: unset;
}
.main{
    width: 800px;
    min-height: 600px;
}
.detail{
 line-height: 1.5;
}
.content-question {
    width: 1200px;
    margin: 0 auto;
    display: flex;

    .question-list {
        width: 800px;
        margin: 20px 0;
        padding: 20px 10px;
        background-color:#d7eedc;
        .title {
            font-weight: 600;
            font-size: 20px;
            margin: 20px 0;
            cursor: pointer;
        }

        // .title:hover {
        //     color: orange;
        // }

        .user {
            margin-bottom: 20px;

            .username {
                font-size: 18px;
                margin-bottom: 10px
            }

            .time {
                font-size: 16px;
            }
        }

        .detail {
            font-size: 18px;
        }

        .list {
            display: flex;
            justify-content: right;
            cursor: pointer;
            margin-top: 15px;
            .iconfont {
                margin: 0 10px;
                font-size: 18px;
            }
        }
    }

    .content-right {
        margin-top: 20px;
        width: 400px;
        margin-left: 40px;
        .my-question {
            width: 100%;
            height: 50px;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
            background-color: antiquewhite;

            span {
                font-size: 18px;
                margin-left: 10px;
            }
        }

    }
}

.related{
    h3{
        width: 400px;
        height: 50px;
        line-height: 50px;
        margin-top: 10px;
      font-size: 20px;
      text-align: center;
      background-color: rgb(243, 216, 183);
      border-bottom: 2px solid #eae6e3;
    }
    p{
        font-size: 18px;
      padding: 15px 0;  
      text-align: center;
      background-color: rgb(243, 216, 183);
      border-bottom: 2px solid #eae6e3;
    }
}
</style>