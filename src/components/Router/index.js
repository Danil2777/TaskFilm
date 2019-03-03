import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable */
Vue.use(Router)
import Film from '@/components/library/modules/Film'
import Result from '@/components/library/modules/Result'
import Search from '@/components/library/modules/Search'
import Root from '@/components/Root'
import Library from '@/components/library'

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'root',
            component: Root,
        },
        {   
            path: '/film/:id',
            name: 'film',
            component: Film 
                
            
        }
    ]
})