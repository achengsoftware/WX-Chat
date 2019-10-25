<template>
	<div class="tab-bar">
		<slot>
			<TabBarItem 
				v-for="bar in bars" 
				:key="bar.path"
				:path="bar.path">
					<template v-slot:item-icon> <img :src="bar.normalIcon"/> </template>
					<template v-slot:item-hover-icon> <img :src="bar.hoverIcon"/> </template>
					<template v-slot:item-text> <div>  {{bar.text}}</div> </template>
			</TabBarItem>

		</slot>
	</div>
</template>

<script>
	import TabBarItem from './TabBarItem.vue'
	export default {
	  name: 'TabBar',
	  props: {
		  bars:{
			  type:Array
		  }
	  },
	  data(){
		  return{
		  }
	  },
	  components:{
		  TabBarItem
	  },
	  mounted() {
	  	console.log(this.bars)
	  }
	}
</script>

<style scoped>
	.tab-bar{
		display: flex;
		width: 100%;
		height: 49px;

		background-color: rgb(248,246,247);
		box-shadow: -1px -1px 2px rgba(100,100,100,0.2);
		
		position: fixed;
		left: 0;
		bottom: 0;
	}
</style>
