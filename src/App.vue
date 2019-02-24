<!-- 写页面结构 -->

<template>
  <div class="app-container">
    <!-- 头部 Header -->
    <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
    <!-- 头部 -->
    <!-- 中间挂载, (占位把相关组件都挂载上; 根组件, 类似 把组件数据 , 挂载到根 组件上  -->
		<transition>
		<router-view> </router-view>
		</transition>
    <!-- 中间 -->
    <!-- 底部 Tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {

}
</script>

// 页面结构的样式， 通过类名去设置 ； 

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
	padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>