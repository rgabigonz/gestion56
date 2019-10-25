<template>
    <div class="cliente-vista" v-if="cliente">
        <div class="user-img">
            <img src="https://www.scottsdaleazestateplanning.com/wp-content/uploads/2018/01/user.png" alt="">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>#</th>
                    <td>{{ cliente.id }}</td>
                </tr>
                <tr>
                    <th>Nombre</th>
                    <td>{{ cliente.nombre }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ cliente.email }}</td>
                </tr>
                <tr>
                    <th>Telefono</th>
                    <td>{{ cliente.telefono }}</td>
                </tr>
                <tr>
                    <th>Direccion</th>
                    <td>{{ cliente.direccion }}</td>
                </tr>
            </table>
            <router-link to="/clientes">Clientes</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vista',
        created() {
            if (this.clientes.length) {
                this.cliente = this.clientes.find((cliente) => cliente.id == this.$route.params.id);
            } else {
                axios.get(`/api/clientes/${this.$route.params.id}`)
                    .then((response) => {
                        this.cliente = response.data.cliente
                });
            }
        },
        data() {
            return {
                cliente: null
            };
        },
        computed: {
            clientes() {
                return this.$store.getters.clientes;
            }
        }
    }
</script>

<style scoped>
    .cliente-vista {
        display: flex;
        align-items: center;
    }
    .user-img {
        flex: 1;
    }
    .user-img img {
        max-width: 160px;
    }
    .user-info {
        flex: 3;
        overflow-x: scroll;
    }
</style>