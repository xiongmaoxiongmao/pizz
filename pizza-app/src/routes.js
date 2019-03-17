
import Home from './components/home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'


// 二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'


//三级路由
import Phone from './components/about/contact/Phone.vue'
import PersonName from './components/about/contact/PersonName.vue'
 

export const routes = [
    {path:'/',name:'homeLink',components:{
        default:Home,   
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin,
    //beforeEnter: (to, from, next) => {
            // if(to.path =='/login' || to.path =='/register'){
            //     next();
            // }else{
            //     alert('请先登录');
            //     next('/login');
            // }
    //}
},
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About, children:[
        {path:'contact',name:"contactLink",redirect:'/personname',component:Contact,children:[
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/personName',name:'personName',component:PersonName}
        ]},
        {path:'/history',name:"historyLink",component:History},
        {path:'/delivery',name:"deliveryLink",component:Delivery},
        {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
    ]},
    {path:'/register',name:'registerLink',component:Register},
    {path:'/login',name:'loginLink',component:Login},
    {path:'*',redirect:'/'}
]


// 全局守卫
// router.beforeEach((to,from,next)=>{
//     if(to.path =='/login' || to.path =='/register'){
//         next();
//     }else{
//         alert('请先登录');
//         next('./login');
//     }
// })