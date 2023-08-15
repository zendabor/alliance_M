import Navbar from './Navbar.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const components = [
    {name: 'Navbar', component: Navbar},
    {name: 'Header', component: Header},
    {name: 'Footer', component: Footer},
];

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component);
        })
    }
}