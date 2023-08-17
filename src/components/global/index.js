import Navbar from './Navbar.vue';
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';
import MyBreadcrumbs from './MyBreadcrumbs.vue';

const components = [
    {name: 'Navbar', component: Navbar},
    {name: 'MyHeader', component: MyHeader},
    {name: 'MyFooter', component: MyFooter},
    {name: 'MyBreadcrumbs', component: MyBreadcrumbs},
];

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }
}