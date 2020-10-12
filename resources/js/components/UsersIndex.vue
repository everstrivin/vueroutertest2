<template>
    <div class="users">
        <!--<div class="loading" v-if="loading">
            Loading...
        </div>-->

        <ul v-if="users">
            <li v-for="{ id, name, email } in users">
                <strong>Name:</strong> {{ name }},
                <strong>Email:</strong> {{ email }}
            </li>
        </ul>
        
        <div class="pagination">
            <button :disabled="! prevPage" @click.prevent="goToPrev">Previous</button>
            {{ paginatonCount }}
            <button :disabled="! nextPage" @click.prevent="goToNext">Next</button>
        </div>

        <div v-if="error" class="error">
            <p>{{ error }}</p>

            <!--<p>
                <button @click.prevent="fetchData">
                    Try Again
                </button>
            </p>-->
        </div>
    </div>
</template>
<script>
import axios from 'axios';

const getUsers = (page, callback) => {
    const params = { page };

    axios
        .get('/api/users', { params })
        .then(response => {
            callback(null, response.data);
        }).catch(error => {
            callback(error, error.response.data);
        });
};

export default {
    data() {
        return {
            //loading: false,
            users: null,
            meta: null,
            links: {
                first: null,
                last: null,
                next: null,
                prev: null,
            },
            error: null,
        };
    },
    created() {
        //this.fetchData();
    },
    computed: {
        nextPage() {
            if (! this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }

            return this.meta.current_page + 1;
        },
        prevPage() {
            if (! this.meta || this.meta.current_page === 1) {
                return;
            }

            return this.meta.current_page - 1;
        },
        paginatonCount() {
            if (! this.meta) {
                return;
            }
            //console.log(this.users);
            const { current_page, last_page } = this.meta;
            //console.log(this.current_page +" of "+ this.last_page);
            return `${current_page} of ${last_page}`;
        },
    },
    beforeRouteEnter (to, from, next) {
        /*const params = {
            page: to.query.page
        };*/
        //console.log("beforeEnter");
        getUsers(to.query.page, (err, data) => {
            next(vm => vm.setData(err, data))
        })
    },
    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    beforeRouteUpdate (to, from, next) {
        this.users = this.links = this.meta = null;
        //console.log("beforeUpdate");
        getUsers(to.query.page, (err, data) => {
            this.setData(err, data);
            next();
        });
    },
    methods: {
        goToNext() {
            this.$router.push({
                query: {
                    page: this.nextPage,
                },
            });
        },
        goToPrev() {
            this.$router.push({
                name: 'users.index',
                query: {
                    page: this.prevPage,
                }
            });
        },
        /*fetchData() {
            this.error = this.users = null;
            this.loading = true;
            axios
                .get('/api/users')
                .then(response => {
                    this.loading = false;
                    console.log(JSON.stringify(response.data));
                    this.users = response.data.data;
                }).catch(error => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        },*/
        setData(err, { data: users, links, meta }) {
            //console.log(JSON.stringify(users));
            if (err) {
                this.error = err.toString();
            } else {
                this.users = users;
                this.links = links;
                this.meta = meta;
            }
        },
    }
}
</script>