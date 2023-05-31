import {createRouter, createWebHistory} from 'vue-router';
import EmailAuth from './components/Auth/EmailAuth.vue';
import LogIn from './components/Auth/LogIn.vue';
import TwoFA from './components/Auth/TwoFactoreAuth.vue';
import ResetPassword from './components/Auth/ResetPassword.vue';
import DashboardComponent from './components/DashboardComponent.vue';
import DisplayUsers from './components/User/DisplayUsers.vue';
import CreateUser from './components/User/CreateUser.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LogIn},
        {path: '/password/reset', component: ResetPassword},
        {path: '/', redirect: '/dashboard', meta: {auth: true}},
        {path: '/dashboard', component: DashboardComponent, meta: {auth: true}},
        {path: '/authenticator/validate', component: TwoFA, meta: {auth: true}},
        {path: '/authenticator/validate/email', component: EmailAuth, meta: {auth: true}},
        {path: '/settings/user_management/users', component: DisplayUsers, meta: {auth: true}},
        {path: '/settings/user_management/users/create', component: CreateUser, meta: {auth: true}},
        {path: '/settings/user_management/users/:id/edit', component: CreateUser, meta: {auth: true}},
    ]
});

router.beforeEach((to, from, next) => {
    if(to.meta.auth) {
        const registeredUserId = sessionStorage.getItem('Token');
        if(registeredUserId) {
            next();
        }
        else {
            next('/login');
        }
    }
    else {
        next();
    }
})

export default router;