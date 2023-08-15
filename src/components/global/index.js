import Navbar from './Navbar.vue';
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';

const components = [
    {name: 'Navbar', component: Navbar},
    {name: 'MyHeader', component: MyHeader},
    {name: 'MyFooter', component: MyFooter},
];

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }
}