<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center mt--4">
                        <div class="col-lg-6 col-7 pt-0">
                            <nav aria-label="breadcrumb" class="d-none d-block">
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                        <a href="/dashboard"><i class="fas fa-home"></i></a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="/settings/user_management/users">Users</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Create User</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <router-link to="/settings/user_management/users" class="btn btn-lg btn-neutral btn_animated">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loader-component v-if="hideShowLoader"></loader-component>
        <!-- Page content -->
        <div class="container-fluid mt--3">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Name</label>
                                            <input type="text" id="input-username" class="form-control" :class="{'is-invalid': invalidName}" placeholder="Name" v-model.trim="userName" @keyup="nameIsValid">
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ invalidName }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Email</label>
                                            <input type="email" id="input-username" class="form-control" :class="{'is-invalid': invalidEmail}" placeholder="Email" v-model="userEmail" @keyup="emailIsValid">
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ invalidEmail }}</strong>
                                            </span>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-if="toggleSomeComponent">
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Password</label>
                                            <input type="password" id="input-username" class="form-control" :class="{'is-invalid': invalidPassword}" placeholder="Password" v-model="userPassword" @keyup="passwordIsValid">
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ invalidPassword }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Confirm Password</label>
                                            <input type="password" id="input-username" class="form-control" :class="{'is-invalid': invalidConfirmPassword}" placeholder="Confirm Password" v-model="confirmPassword" @keyup="confirmPasswordIsValid">
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ invalidConfirmPassword }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Select Country Code</label>
                                            <select class="form-control" v-model="country_code">
                                                <!-- <option :value="item.dial_code+'-'+item.name" v-for="(item, index) in countries" :key="index">
                                                    {{item.dial_code}} - {{item.name}}
                                                </option> -->
                                                <option value="93">93 - Afghanistan</option>
                                                <option value="355">355- Albania</option>
                                                <option value="91">91 - India</option>
                                                <option value="355">44- United Kingdom</option>
                                                <option value="1">1 - United States</option>
                                                <option value="34">34 - Spain</option>
                                                <option value="57">57 - Colombia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Mobile Number</label>
                                            <input type="number" id="input-username" class="form-control" :class="{'is-invalid': invalidContact}" placeholder="Mobile Number" v-model="userContact" @keyup="mobileIsValid">
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ invalidContact }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Role</label>
                                            <select class="form-control" placeholder="Select Role" v-model="role_id">
                                                <option value="">Select User Role</option>
                                                <option value="1">Admin</option>
                                                <option :value="role.id" v-for="(role, index) in roles" :key="index">{{role.role_name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 py-0">
                                        <div class="form-group">
                                            <label class="form-control-label" for="input-username">Status</label>
                                            <select class="form-control" placeholder="User Status"  v-model="status">
                                                <option value="1">Active</option>
                                                <option value="0">In-Active</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 py-0" v-if="toggleSomeComponent">
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-lg btn_animated" @click.prevent="saveAndCreateUser">Save</button>
                                            <button type="reset" class="btn btn-secondary btn-lg btn_animated">Reset</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 py-0" v-else>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-lg btn_animated" @click.prevent="updateUserDetails">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userEmail: '',
            userPassword: '',
            confirmPassword: '',
            userName: '',
            userContact: '',
            invalidEmail: '',
            invalidPassword: '',
            invalidConfirmPassword: '',
            invalidName: '',
            invalidContact: '',
            country_code: '1',
            phone_number: '',
            role_id: '1',
            status: '1',
            hideShowLoader: false,
            roles: [],
            toggleSomeComponent: true,
        }
    },
    methods:{
        // name validation
        nameIsValid() {
            const nameFormate = /^[A-Za-z ]+$/;
            if(!this.userName) {
                this.invalidName = 'Name is required.';
            }
            else if(!this.userName.match(nameFormate)) {
                this.invalidName = 'Please enter valid name.';
            }
            else {
                this.invalidName = '';
            }
        },
        // email validation
        emailIsValid() {
            const mailFormat = /^[^@]+@\w+(\.\w+)+\w$/;
            if(!this.userEmail) {
                this.invalidEmail = 'Email is required.';
            }
            else if(!this.userEmail.match(mailFormat)) {
                this.invalidEmail = 'Please enter valid email.';
            }
            else {
                this.invalidEmail = '';
            }
        },
        // password validation
        passwordIsValid() {
            if(!this.userPassword) {
                this.invalidPassword = 'Password is required.';
            }
            else if(this.userPassword.length < 6) {
                this.invalidPassword = 'Please enter valid password.';
            }
            else {
                this.invalidPassword = '';
            }
        },
        // confirm password validation
        confirmPasswordIsValid() {
            if(!this.confirmPassword) {
                this.invalidConfirmPassword = 'Password is required.';
            }
            else if(!this.confirmPassword.match(this.userPassword)) {
                this.invalidConfirmPassword = 'Please re-enter your password.';
            }
            else {
                this.invalidConfirmPassword = '';
            }
        },
        // mobile number validation
        mobileIsValid() {
            const mobileFormat =  /^[0-9]+$/;
            if(!this.userContact) {
                this.invalidContact = 'Mobile number is required.';
            }
            else if(!this.userContact.toString().match(mobileFormat)) {
                this.invalidContact = 'Please enter valid mobile number.';
            }
            else if(this.userContact.toString().length !== 10) {
                this.invalidContact = 'Mobile number must be 10 number.';
            }
            else {
                this.invalidContact = '';
            }
        },
        // save and create user
        saveAndCreateUser() {
            this.nameIsValid();
            this.emailIsValid();
            this.passwordIsValid();
            this.confirmPasswordIsValid();
            this.mobileIsValid();
            if(!this.userEmail || !this.userPassword || !this.confirmPassword || !this.userName || !this.userContact || this.invalidEmail || this.invalidPassword || this.invalidConfirmPassword || this.invalidName || this.invalidContact) {
                return false;
            }
            else {
                this.axios.post(this.$api + '/settings/user/', {
                    name: this.userName,
                    email: this.userEmail,
                    password: this.userPassword,
                    phone_number: this.userContact,
                    role_id: this.role_id,
                    status: this.status,
                    country_code: this.country_code,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                    }
                })
                .then(response => {
                    if(response.data.success) {
                        this.$router.push('/settings/user_management/users');
                    }
                    else {
                        console.log('User registration failed.');
                    }
                })
                .catch(error => {
                    console.log(error)
                }); 
            }
        },
        // get all user data
        getUserRole() {
            this.axios.get(this.$api + '/settings/role', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                }
            })
            .then(response => {
                if(response.data.success) {
                    console.log(response.data.data)
                    this.roles = response.data.data;
                    // this.$router.push('/authenticator/validate');
                }
                else {
                    console.log('User registration failed.');
                }
            })
            .catch(error => {
                console.log(error)
            }); 
        },
        // edit user details
        editUserDetails(id) {
            this.hideShowLoader = true;
            this.axios.get(this.$api + '/settings/user/' + id, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                }
            })
            .then(response => {
                if(response.data.success) {
                    this.userName = response.data.data.name
                    this.userEmail = response.data.data.email
                    this.userPassword = response.data.data.password
                    this.userContact = response.data.data.phone_number
                    this.role_id = response.data.data.role_id
                    this.status = response.data.data.status
                    this.country_code = response.data.data.country_code
                    this.hideShowLoader = false;
                }
                else {
                    console.log('User registration failed.');
                    this.hideShowLoader = false;
                }
            })
            .catch(error => {
                console.log(error);
                this.hideShowLoader = false;
            });
        },
        // update(edit) user details
        updateUserDetails() {
            this.axios.post(this.$api + '/settings/user/' + this.$route.params.id, {
                name: this.userName,
                email: this.userEmail,
                password: this.userPassword,
                phone_number: this.userContact,
                role_id: this.role_id,
                status: this.status,
                country_code: this.country_code,
                _method: 'PUT'
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
                }
            })
            .then(response => {
                if(response.data.success) {
                    this.$router.push('/settings/user_management/users');
                }
                else {
                    console.log('User registration failed.');
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        // reset form data
        // resetForm() {
        //     window.location.reload();
        // }
    },
    mounted() {
        this.getUserRole();
        if(this.$route.params.id) {       
            this.toggleSomeComponent = false;
            this.editUserDetails(this.$route.params.id);
        }
    }
}
</script>

<style  scoped>
.border-red-600 {
    --border-opacity: 1;
    border-color: #e53e3e;
    border-color: rgba(229,62,62,var(--border-opacity));
}
.text-red-600 {
    --text-opacity: 1;
    color: #e53e3e;
    color: rgba(229,62,62,var(--text-opacity));
}
</style>
