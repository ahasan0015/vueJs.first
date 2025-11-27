import { createRouter, createWebHistory } from 'vue-router'

import ComparePlans from '@/views/pages/ComparePlans.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import Home from '@/views/pages/Home.vue'
import Pricing from '@/views/pages/Pricing.vue'
import Form from '@/views/pages/Form.vue'
import PlanDetails from '@/views/pages/PlanDetails.vue'

const myRouter = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/price', component: Pricing },
        { path: '/Compair', component: ComparePlans },
        { path: '/welcome', component: TheWelcome },
        { path: '/create', component: Form },
        { path: '/planDetails/:id', component: PlanDetails },

    ]
});

export default myRouter