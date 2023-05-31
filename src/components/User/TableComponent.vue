<template>
    <div class="table-responsive">
        <table class="table align-items-center">
            <thead class="thead-light">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th style="width:15%;" class="text-center">Action</th>
                </tr>
            </thead>
            <tbody class="list">
                <tr v-for="(user, index) in users" :key="index">
                    <th>{{index+1}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.country_code}} - {{user.phone_number}}</td>
                    <td class="text-center">
                        <a href="javascript:void(0);" @click="editUser(user.id)">
                            <img src="../../assets/img/icons/edit.svg" style="width:30px">
                        </a>
                        <a href="javascript:void(0);" @click="deleteUser(user.id)">
                            <img src="../../assets/img/icons/bin.svg" style="width:30px">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['users', 'updateUserData'],
        methods: {
            editUser(id) {
                this.$router.push('/settings/user_management/users/' + id + '/edit');
            },
            deleteUser(id) {
                this.axios.delete(this.$api + '/settings/user/' + id, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                    }
                })
                .then(response => {
                    if(response.data.success) {
                        this.updateUserData();
                    }
                    else {
                        console.log("Didn't delete.");
                    }
                })
                .catch(error => {
                    console.log(error)
                }); 
            }
        }
    }
</script>

<style scoped>
    .thead-light tr th {
        padding: 15px 18px !important;
        font-size: 14px !important;
    }
    .list th {
        font-weight: bold;
    }
</style>