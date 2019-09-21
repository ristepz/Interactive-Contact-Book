import Vue from 'vue';
import VueRouter from 'vue-router';
import AddContact from '../components/pages/AddContact';
import AllContacts from '../components/pages/AllContacts';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: AddContact
        },
        {
            path: '/contacts',
            component: AllContacts
        }
    ]
});