<template>
	<div class="tab-bar-item" @click="itemClicked">
		<div v-if="!isActive"> <slot name="item-icon"></slot> </div>
		<div v-else> <slot name="item-hover-icon"></slot> </div>
		<div :style="hoverColor"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
	  name: 'TabBarItem',
	  props: {
		  tabBarItemHoverColor:{
			  type:String,
			  default:'#1afa29'
		  },
		  path:{
			  type:String,
			  default:'/',
			  required: true
		  }
	  },
	  computed:{
		  isActive(){
			  return this.$route.path.indexOf(this.path) !== -1
		  },
		  hoverColor(){
			  return this.isActive?{color:this.tabBarItemHoverColor}:{}
		  }
	  },
	  methods:{
		  itemClicked(){
			  this.$router.replace(this.path)
		  }
	  }
	}
</script>

<style scoped>
 .tab-bar-item{
	flex: 1;
	height: 49px;
	font-size: 10px;
	text-align: center;
	padding-top: 4px;
} 
.tab-bar-item img{
	width: 22px;
	height: 22px;
}
</style>
