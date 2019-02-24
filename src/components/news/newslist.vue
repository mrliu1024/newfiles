<template>
    <div>
    <ul class="mui-table-view">
    <!-- 渲染, v-for="item in 数据" 注意, :key="" 的设置 -->
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return {
            newslist:[]
        }
    },
    methods:{
        getNewsList() {
        // 获取新闻列表 , 注意, 请求地址的设置, 在main.js 里面 ; 
        this.$http.get("api/getnewslist").then(result => {
        // console.log(result)
        // 先输出一下,res 看看数据设置
        if (result.body.status === 0) {  //注意这个 status 是数据的状态,. 如果是0 代表成; 
          // 如果没有失败，应该把数据保存到 data 上
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
    },
    created () { //生命周期函数 , 调用数据
        this.getNewsList();
    }
}
</script>

// 为什么设置lang="scss" scoped
// scoped 代表, 对象样式的设置 , 只针对 本 单组件样式 ,  lang="scss"是设置的scss  样式语法
<style lang="scss" scoped>  
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
