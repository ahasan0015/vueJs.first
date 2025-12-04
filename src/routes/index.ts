import { createRouter, createWebHistory } from 'vue-router'

import ComparePlans from '@/views/pages/ComparePlans.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import Home from '@/views/pages/Home.vue'
import Pricing from '@/views/pages/Pricing.vue'
import Form from '@/views/pages/Form.vue'
import PlanDetails from '@/views/pages/PlanDetails.vue'
import PostManage from '@/views/pages/posts/postManage.vue'
import PostDetails from '@/views/pages/posts/PostDetails.vue'
import PostDetailsOld from '@/views/pages/posts/PostDetailsOld.vue'
import PostCreate from '@/views/pages/posts/PostCreate.vue'
import CategoryManage from '@/views/pages/categories/CategoryManage.vue'
import CategoryCreate from '@/views/pages/categories/CategoryCreate.vue'

const myRouter = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/price', component: Pricing },
        { path: '/Compair', component: ComparePlans },
        { path: '/welcome', component: TheWelcome },
        { path: '/create', component: Form },
        { path: '/planDetails/:id', component: PlanDetails },
        { path: '/posts', component: PostManage },
        { path: '/postsOld/:id/details/:userId', component: PostDetailsOld },
        { path: '/posts/:id/details/:userId', component: PostDetails },
        { path: '/posts/create', component: PostCreate },
        { path: '/categories', component: CategoryManage },
        { path: '/categories/create', component: CategoryCreate },
    ]
});

export default myRouter