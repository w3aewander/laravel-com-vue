import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
import MemberComponent from './components/MemberComponent.vue';
import TesteComponent from './components/TesteComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

/**
 * Carregar todas as dependências do projeto, incluindo Vue e outras bibliotecas.
 */
require('./bootstrap');

// Criar a aplicação Vue
const app = createApp({});

// Registrar componentes globalmente
app.component('example-component', ExampleComponent);
app.component('membro-component', MemberComponent);
app.component('teste-component', TesteComponent);
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);
app.component('navbar-component', NavbarComponent);

// Montar a aplicação na div com o id "app"
app.mount('#app');