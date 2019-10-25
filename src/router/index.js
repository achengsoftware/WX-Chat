import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)


export default new Router({
	mode:'history',
	routes:[
	{
		path:'/',
		redirect: '/chat'
	},
	{
		name:'chat',
		path:'/chat',
		component: resolve => require(['../views/chat/Chat.vue'], resolve)
	},
	{
		name:'contact',
		path:'/contact',
		component: resolve => require(['../views/contact/Contact.vue'], resolve)
	},
	{
		path:'/find',
		component: resolve => require(['../views/find/Find.vue'], resolve)
	},
	{
		path:'/profile',
		component: resolve => require(['../views/profile/Profile.vue'], resolve)
	}
]
})
