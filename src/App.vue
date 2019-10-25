<template>
  <div id="app">
	<router-view></router-view>
	<TabBar v-bind:bars="tabbarData">
	</TabBar> 
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
export default {
  name: 'app',
  components: {
    TabBar
  },
  data(){
	  return{
		  tabbarData:[
			  {
				  normalIcon:require('./assets/img/tabbar/chat.png'),
				  hoverIcon:require('./assets/img/tabbar/chat-hover.png'),
				  text:'微信',
				  path:'/chat'
			  },
			  {
					normalIcon:require('./assets/img/tabbar/contacts.png'),
			  				 hoverIcon:require('./assets/img/tabbar/contacts-hover.png'),
			  				  text:'通讯录',
			  				  path:'/contact'
			  },
			  {
			  				  normalIcon: require('@/assets/img/tabbar/find.png'),
			  				  hoverIcon:require('@/assets/img/tabbar/find-hover.png'),
			  				  text:'发现',
			  				  path:'/find'
			  },
			  {
			  				  normalIcon:require('@/assets/img/tabbar/profile.png'),
			  				  hoverIcon:require('@/assets/img/tabbar/profile-hover.png'),
			  				  text:'我',
			  				  path:'/profile'
			  }
		  ]
	  }
  }
}
</script>

<style>
	@import url("assets/css/base.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.bottom{
	height: 49px;
	width: 100%;
}
</style>
