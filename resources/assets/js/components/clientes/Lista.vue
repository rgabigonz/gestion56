<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/clientes/nuevo" class="btn btn-primary btn-sm">Nuevo</router-link>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table table-hover">
                <thead class="thead-light">
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <template v-if="!clientes.length">
                        <tr>
                            <td colspan="4" class="text-center">No hay clientes cargados</td>
                        </tr>
                    </template>

                    <template v-else>
                        <tr v-for="cliente in clientes" :key="cliente.id">
                            <td>{{ cliente.nombre }}</td>
                            <td>{{ cliente.email }}</td>
                            <td>{{ cliente.telefono }}</td>
                            <td>
                                <router-link :to="`/clientes/${cliente.id}`">Detalle</router-link>
                            </td>
                        </tr>
                    </template>                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'lista',
        mounted() {
            /*if (this.clientes.length) {
                return;
            }*/
            this.$store.dispatch('getClientes');
        },
        computed: {
            clientes() {
                return this.$store.getters.clientes;
            }
        }
    }
</script>

<style scoped>
    .btn-wrapper {
        text-align: right;
        margin-bottom: 20px;
    }
</style>