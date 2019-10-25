import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import ClientesPrincipal from './components/clientes/Principal.vue';
import ClientesLista from './components/clientes/Lista.vue';
import ClienteNuevo from './components/clientes/Nuevo.vue';
import Cliente from './components/clientes/Vista.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/clientes',
        component: ClientesPrincipal,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: ClientesLista,
            },
            {
                path: 'nuevo',
                component: ClienteNuevo,
            },
            {
                path: ':id',
                component: Cliente,
            }     
        ]
    } 
];