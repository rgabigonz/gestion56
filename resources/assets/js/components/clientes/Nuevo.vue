<template>
    <div class="cliente-nuevo">
        <form @submit.prevent="agregar">
            <table class="table">
                <tr>
                    <th>Nombre</th>
                    <td>
                        <input type="text" class="form-control" v-model="cliente.nombre" placeholder="Nombre"/>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="cliente.email" placeholder="Email"/>
                    </td>
                </tr>
                <tr>
                    <th>Telefono</th>
                    <td>
                        <input type="text" class="form-control" v-model="cliente.telefono" placeholder="Telefono"/>
                    </td>
                </tr>
                <tr>
                    <th>Direccion</th>
                    <td>
                        <input type="text" class="form-control" v-model="cliente.direccion" placeholder="Direccion"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/clientes" class="btn btn-danger">Cancelar</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Crear" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <!-- <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }} -->
                    <strong>{{ fieldsError.join('\n') }}</strong>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import validate from 'validate.js';

    export default {
        name: 'nuevo',
        data() {
            return {
                cliente: {
                    nombre: '',
                    email: '',
                    telefono: '',
                    direccion: ''
                },
                errors: null
            };
        },
        methods: {
            agregar() {
                this.errors = null;

                const constraints = this.getConstraints();

                const errors = validate(this.$data.cliente, constraints);

                if(errors) {
                    this.errors = errors;
                    return;
                }

                axios.post('/api/clientes/new', this.$data.cliente)
                    .then((response) => {
                        this.$router.push('/clientes');
                    });
            },
            getConstraints() {
                return {
                    nombre: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Debe tener como minimo 3 caracteres'
                        }
                    },
                    email: {
                        presence: true,
                        email: true
                    },
                    telefono: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Debe tener como minimo 10 numeros'
                        }
                    },
                    direccion: {
                        presence: true,
                        length: {
                            minimum: 1,
                            message: 'Debe tener como minimo 1 caracter'
                        }
                    }
                };
            }
        }
    }
</script>

<style>
    .errors {
        background: lightcoral;
        border-radius:5px;
        padding: 21px 0 2px 0;
    }
</style>