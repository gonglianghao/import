import request from './index'
//提交发布问题
export const askQuestionMessage = ({username,uid,title,content})=>{
    return request.post('/ask',{username,uid,title,content})
}

//获取发布的问题
export const getQuestionMessage = ()=>{
    return request.get('/getquestion')
}

//点赞接口
export const postLikeCountMessag =(articleId,likeCount,likeFlag,isActive)=>{
    return request.post('/postLikeCountMessag',{
       articleId, likeCount,likeFlag,isActive
    })
}

// 收藏接口
export const postCollectCountMessag =(articleId,collectCount,collectFlag,isActiveCollect)=>{
   return request.post('/postCollectCountMessage',{
    articleId,collectCount,collectFlag,isActiveCollect
   })
}

// 获取单个问题的接口数据
export const getQuestionDetail = (cid)=>{
    
    return request.post('/getQuestionDetail',{cid})
}


//上传用户评论
export const postUserComment = (cid,arr)=>{
    return request.post('/postUserComment',{cid,arr})
}

//获取评论

export const getUserComment = (cid)=>{
    return request.post('/getUserCommet',{cid})
}