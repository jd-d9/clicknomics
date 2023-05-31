<template>
    <!-- sidebar start here -->
    <div class="sidebar" :class="{'hide-show-sidebar': !hideShowSidebar}" v-if=toggleComponent>
        <div class="sidebar-inner">
            <div class="text-center py-3 px-2">
                <router-link to="/dashboard" class="sidebar-logo">
                    <img src="../../assets/img/brand/logo.png" class="d-full" :class="{'d-none': !hideShowSidebar}" alt="logo">
                    <img src="../../assets/img/brand/favicon.png" class="d-half" :class="{'d-none': hideShowSidebar}" alt="logo">
                </router-link>
            </div>
            <div class="sidebar-contents">
                <router-link :to="sortingDropdownSidebar(data.id) ? '' : data.routes" class="side-menu text-decoration-none" v-for="data in sideBarData" :key="data" @click="subDropDown(data.id)">
                    <img :src="iconSource + data.icon" alt="icon" title="Dashboard">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">{{ data.menu }}</span>
                    <i class="fa-solid fa-angle-right ms-auto" v-if="sortingDropdownSidebar(data.id)"></i>
                </router-link>
                <!-- <router-link to="/dashboard" class="side-menu text-decoration-none active">
                    <img src="../../assets/img/icons/layout-left.svg" alt="icon" title="Dashboard">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Dashboard</span>
                </router-link>
                <a href="javascript:void(0)" class="side-menu sidebar-dropdown text-decoration-none" @click="openOnClick">
                    <img src="../../assets/img/icons/dolar.svg" alt="icon" title="Accounting">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Accounting</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a> -->
                <!-- list item dropdown -->
                <div class="sidebar-dropdown-menu" :class="{'d-block': showDropdownOnClick}">
                    <div class="sidebar-dropdown-head px-3 py-2">
                        <p class="mb-0 text-white py-1">Accounting</p>
                    </div>
                    <div class="sidebar-dropdown-menubars" v-for="data in subDropDownTabs" :key="data">
                        <router-link :to="data.routes">{{ data.menu }}</router-link>
                    </div>
                    <!-- <div class="sidebar-dropdown-head px-3 py-2">
                        <p class="mb-0 text-white py-1">Accounting</p>
                    </div>
                    <div class="sidebar-dropdown-menubars active-menu">
                        <router-link to="">Master Accounting</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars">
                        <router-link to="">Credit Card Payments</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars">
                        <router-link to="">Team Member Payments</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars">
                        <router-link to="">Fixed Monthly Coast</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars">
                        <router-link to="">Variable Monthly Coast</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars">
                        <router-link to="">Invoice</router-link>
                    </div>
                    <div class="sidebar-dropdown-menubars p-0">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Additional Menu 1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <router-link to="" class="accordian-hover">content here 1</router-link>
                                        <router-link to="" class="accordian-hover">content here 2</router-link>
                                        <router-link to="" class="accordian-hover">content here 3</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Additional Menu 2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <router-link to="" class="accordian-hover">content here A</router-link>
                                        <router-link to="" class="accordian-hover">content here B</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Additional Menu 3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <router-link to="" class="accordian-hover">content here X</router-link>
                                        <router-link to="" class="accordian-hover">content here Y</router-link>
                                        <router-link to="" class="accordian-hover">content here Z</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/reports.svg" alt="icon" title="Reporting">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Reporting</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/ads-accounts.svg" alt="icon" title="Ad Accounts">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Ad Accounts</span>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/laptop.svg" alt="icon" title="Campaigns">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Campaigns</span>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/networks.svg" alt="icon" title="Networks">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Networks</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/web-domain.svg" alt="icon" title="Domains">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Domains</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/monitoring.svg" alt="icon" title="Monitoring">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Monitoring</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/servers.svg" alt="icon" title="Servers">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Servers</span>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/payment-method.svg" alt="icon" title="Payment Methods">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Payment Methods</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/bank-account.svg" alt="icon" title="Bank Accounts">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Bank Accounts</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/management-system.svg" alt="icon" title="Management System">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Management System</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a>
                <router-link to="/settings/user_management/users" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/settings.svg" alt="icon" title="Settings">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Settings</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </router-link>
                <a href="javascript:void(0)" class="side-menu text-decoration-none">
                    <img src="../../assets/img/icons/support.svg" alt="icon" title="Help">
                    <span class="inner-text text-primary" :class="{'d-none': !hideShowSidebar}">Help</span>
                    <i class="fa-solid fa-angle-right ms-auto"></i>
                </a> -->
            </div>
        </div>
    </div>
    <!-- sidebar end here -->
    <loader-component v-if="hideShowLoader"></loader-component>
    <!-- navbar start here -->
    <nav class="navar-content bg-primary" :class="{toggleMargin: !hideShowSidebar}" v-if="toggleComponent">
        <div class="container-fluid px-4 pt-0 pb-4">
            <div class="row justify-content-center align-items-center">
                <div class="col-1">
                    <div class="sidenav-toggler" @click="toggleSidebar">
                        <div class="line line-one"></div>
                        <div class="line line-two"></div>
                        <div class="line line-three"></div>
                    </div>
                </div>
                <div class="col-11 ms-auto text-end">
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="d-flex align-items-start justify-content-center me-3">
                            <small class="swithch-lable text-white">Light</small>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                            </div>
                            <small class="swithch-lable text-light">Dark</small>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../assets/img/icons/bell.svg" alt="bell">
                                <span class="position-absolute translate-middle badge rounded-circle">5</span>
                            </button>
                            <ul class="dropdown-menu notification-dropdown">
                                <li class="notification-head"><small>You have <span class="text-primary">5</span> notification</small></li>
                                <li>
                                    <div class="dropdown-item">
                                        <p class="mb-0 text-black">5 months ago</p>
                                        <p class="mb-0">Microsoft Ads Account Web Redad Impression Equal To Zero</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item">
                                        <p class="mb-0 text-black">5 months ago</p>
                                        <p class="mb-0">Campaign Name RexMD ED Telemedicine (Display,Native) - US Only Network VERVE (Edwin) has conversion rate or EPC condition true</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item">
                                        <p class="mb-0 text-black">5 months ago</p>
                                        <p class="mb-0">Campaign Name (128585) [WEB+MOB] InstaHeat - CTC $59,95 /US (CPS) - CPA - $40.00 Network ClickDealer (Main) has conversion rate or EPC condition true</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item">
                                        <p class="mb-0 text-black">5 months ago</p>
                                        <p class="mb-0">Campaign Name [s] - EXCLUSIVE - Splash Wines - Christmas Holiday Special - 15 Bottles + A Chance to Win $100 Gift Card + Free Shipping - Sale Network W4 (Main) has conversion rate or EPC condition true</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown-item border-0">
                                        <p class="mb-0 text-black">5 months ago</p>
                                        <p class="mb-0">Campaign Name Beyond Body - eComm / Digital - SS - [All GEOs] Network GuruMedia has conversion rate or EPC condition true</p>
                                    </div>
                                </li>
                                <li class="text-center pt-2">
                                    <router-link to="" class="view-all-notification d-block text-primary">View All</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="profile-image me-2">
                                        <img src="" alt="">
                                    </div>
                                    <p class="mb-0 text-white">Maulik <i class="fa-solid fa-angle-down"></i></p>
                                </div>
                            </button>
                            <ul class="dropdown-menu profile-dropdown">
                                <li><small class="welcome">WELCOME!</small></li>
                                <li>
                                    <router-link to="" class="dropdown-item">
                                        <i class="fa-solid fa-user"></i>
                                        <span class="profile-name ms-4">My Profile</span>
                                    </router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="dropdown-item border-0" @click="logoutUser">
                                        <i class="fa-solid fa-person-running"></i>
                                        <span class="profile-name ms-4">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- navbar end here -->
</template>

<script>
    // import $ from 'jquery';
    export default {
        emits: ['move-containts'],
        data() {
            return {
                toggleComponent: true,
                hideShowSidebar: true,
                showDropdownOnClick: false,
                hideShowLoader: false,
                sideBarData: [],
                allMenues: [],
                subDropDownTabs: [],
            }
        },
        computed: {
            iconSource() {
                return 'http://127.0.0.1:8000/admin/img/icons/'
            }
        },  
        methods: {
            // sorting only that sidebar tab which have dropdown
            sortingDropdownSidebar(id) {
                const dropdowns = this.allMenues.filter((elem) => {
                    if(elem.parent_id === id) {
                        return id;
                    }
                })
                return dropdowns.length !== 0 ? true : false;
            },
            // sub dropdown
            subDropDown(id) {
                const dropdowns = this.allMenues.filter((elem) => {
                    if(elem.parent_id === id) {
                        return elem;
                    }
                })
                this.subDropDownTabs = dropdowns;
                this.showDropdownOnClick = !this.showDropdownOnClick;
                this.toggleSidebar();
                console.log(this.subDropDownTabs,'this.subDropDownTabs')
            },
            // get sidebar menu datas
            getSidebarMenues() { 
                this.hideShowLoader = true;
                this.axios.get(this.$api + '/settings/user/role/create', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                    }
                })
                .then(response => {
                    if(response.data.success) {
                        this.allMenues = response.data.data;
                        console.log(this.allMenues, 'sidebardata')
                        this.sideBarData = this.allMenues.filter((val) => {
                            return val.parent_id === null
                        })
                        // const dropdownIcon = this.sideBarData.map((val) => {
                        //     this.allMenues.filter((elem) => {
                        //         if(elem.parent_id === val.id) {
                        //             console.log(elem)
                        //         }
                        //     })
                        //     // return val.parent_id == val.id
                        // })
                        // console.log(dropdownIcon)
                        this.sideBarData.sort((a, b) => a.position - b.position);
                        this.hideShowLoader = false;
                    }
                })
                .catch(error => {
                    this.hideShowLoader = false;
                    console.log(error)
                });
            },
            // hide/show components
            toggleComponents() {
                this.toggleComponent = true;
                if(window.location.pathname === '/login' || window.location.pathname === '/password/reset' || window.location.pathname === '/authenticator/validate' || window.location.pathname === '/authenticator/validate/email') {  
                    this.toggleComponent = false;
                }else {
                    this.toggleComponent = true;
                }
            },
            // toggle sidebar
            toggleSidebar() {
                if(this.hideShowSidebar) {
                    this.hideShowSidebar = false;
                }
                else {
                    this.hideShowSidebar = true;
                }
                this.$emit('move-contents', this.hideShowSidebar);
            },
            openOnClick() {
                this.showDropdownOnClick = !this.showDropdownOnClick;
                this.toggleSidebar();
            },
            // hoverMenuEffect() {
            //     if(this.hideShowSidebar) {
            //         $('.sidebar-dropdown').mouseenter(() => {
            //             $('.sidebar-dropdown-menu').css({'display': 'block'});
            //         })
            //         $('.sidebar-dropdown').mouseleave(() => {
            //             $('.sidebar-dropdown-menu').css({'display': 'none'});
            //         })
            //     }
            // },
            // logout user
            logoutUser() {
                this.hideShowLoader = true;
                const bodyParameters = {
                    key: "value"
                };
                this.axios.post(this.$api + '/logout', bodyParameters, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem('Token')}`
                    }
                })
                .then(response => {
                    if(response.data.success) {
                        setTimeout(() => {
                            location.reload();
                        }, 500)
                        this.$router.push('/login');
                        sessionStorage.clear();
                        this.hideShowLoader = false;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.hideShowLoader = false;
                }); 
            }
        },
        mounted() {
            this.toggleComponents();
            this.getSidebarMenues();
            // this.hoverMenuEffect();
        },
        updated() {
            this.toggleComponents();
        },
        unmounted() {
            this.toggleComponents();
        },
    } 
</script>

<style scoped>
    .navar-content {
        margin-left: 300px;
    }
    .bg-primary {
        background-color: #005eb3 !important;
    }
    .text-primary {
        color: #005eb3 !important;
    }
    .text-light {
        color: rgba(255, 255, 255, 0.5) !important;
    }
    .form-switch .form-check-input {
        height: 1.5rem;
        width: 3.1rem;
    }
    .form-switch {
        margin: 0 15px 0 30px;
    }
    .swithch-lable {
        margin-top: 5px
    }

    .btn:hover {
        box-shadow: none;
    }
    .form-check-input:checked {
        background-color: #293357;
        border-color: #293357;
        outline: none;
    }
    .form-check-input:focus {
        border-color: transparent !important;
        box-shadow: none;
    }
    .sidenav-toggler {
        width: 18px;
        cursor: pointer;
    }
    .sidenav-toggler .line {
        margin-top: 3px;
        width: 100%;
        height: 2px;
        background-color: white;
    }
    .dropdown-toggle:focus, .btn.show {
        outline: none;
        border-color: transparent !important;
    }
    .dropdown-toggle img {
        width: 30px;
    }
    .dropdown-toggle::after {
        display: none;
    }
    .badge {
        font-size: 10px !important;
        color: black;
        background-color: #00cd00;
        top: 10px !important;
        left: 45px;
    }
    .sidebar {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0px;
        width: 300px;
        height: 100%;
        background-color: white;
        border-right: 1px solid #005eb3;
    }
    .sidebar-inner {
        position: relative;
        z-index: 100;
    }
    .sidebar-dropdown-menu{
        position: absolute;
        display: none;
        z-index: 50;
        top: 0;
        left: 100%;
        box-shadow: 0px 0px 5px rgb(0 0 0 / 20%) inset;
        background-color: #e3ecf9;
        border-right: 1px solid #005eb3;
        width: 250px;
        height: 100vh;
    }
    /* .sidebar-dropdown:hover .sidebar-dropdown-menu{
        display: block;
    } */
    .dropdown-item {
        padding: 14px 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .dropdown-item:hover {
        background-color: #f6f9fc;
    }
    .dropdown-item p {
        font-size: 14px;
        color: #525f7f;
        white-space: pre-wrap;
        line-clamp: 3 !important;
    }
    .notification-dropdown {
        min-width: 420px;
        max-height: 500px;
        overflow: scroll !important;
        box-shadow: 0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1);
    }
    .notification-dropdown::-webkit-scrollbar {
        width: 6px;
        background-color: white;
    }
    .notification-dropdown::-webkit-scrollbar-thumb {
        background-color: rgb(209, 209, 209);
    }
    .notification-head {
        color: #525f7f;
        padding: 10px 0 20px 15px;
    }
    .view-all-notification {
        text-decoration: none;
        font-weight: 600;
        font-size: .875rem;
        padding: 0.9rem 1rem;
    }
    .view-all-notification:hover {
        color: #233dd2 !important;
        background-color: #e8f0fe;
    }
    .welcome {
        padding: 5px 10px;
       font-size: .625rem;
    }
    .profile-name {
        font-size: .875rem;
    }
    .profile-dropdown {
        min-width: 12rem;
        box-shadow: 0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1);
        border: none;
        border-radius: 8px 0 0 0 !important;
    }
    .profile-dropdown .dropdown-item:hover {
        background-color: #e3ecf9;
    }
    .profile-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: gray;
        overflow: hidden;
    }
    .profile-image img{
        width: 100%;
    }
    .sidebar-logo img{
        max-height: 2rem;
    }
    .profile-image + p {
        font-size: 14px;
    }
    .profile-image + p i {
        font-size: 12px;
    }
    .side-menu {
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 8px;
        padding: 7px 12px;
    }
    .side-menu:hover, .active {
        background-color: #e8f0fe;
    }
    .btn {
        padding: 5px 0 5px 20px;
    }
    .btn:not(:last-child) {
        margin-right: unset !important;
    }
    .side-menu i {
        font-size: 12px;
        font-weight: 900 !important;
    }
    .side-menu img {
        width: 30px;
        margin-right: 8px;
    }
    .side-menu span {
        font-size: .875rem;
    }
    .sidebar-dropdown-head {
        background-color: #084c89;
    }
    .sidebar-dropdown-menubars{
        cursor: pointer;
        font-size: .875rem;
        padding: 10px 0px 10px 20px;
    }
    /* .active-menu,  */
    .sidebar-dropdown-menubars:hover {
        background-color: #81df8d;
    }
    .sidebar-dropdown-menubars a{
        text-decoration: none;
        color: black;
    }
    .accordion-button {
        font-size: .875rem;
        padding: 10px 0px 10px 18px !important;
        border-left: 3px solid rgba(128, 128, 128, 0.1);
        background-color: #e3ecf9;
    }
    .accordion-item {
        border: none;
    }
    .accordion-button:hover {
        background-color: #81df8d;
    }
    .accordion-button:focus {
        box-shadow: none;
    }
    .accordion-button:not(.collapsed) {
        background-color: white;
        border-bottom: 1px solid rgba(0, 94, 179, 0.2);
        color: black !important;
    }
    @font-face {
        font-family: fontAwesomeFont;
        src: url(../../assets/fonts/font_awesome/fa-solid-900.ttf);
    }
    .accordion-button::after {
        content: '\f105';
        display: flex;
        justify-content: center;
        align-items: center;
        color: #00cd00;
        font-family: fontAwesomeFont;
        background-image: none;
    }
    .accordion-button:not(.collapsed)::after {
        transform: rotate(90deg) !important;
    }
    .accordion-body {
        padding: 7px 18px;
        border-left: 3px solid rgba(128, 128, 128, 0.1);
    }
    .accordian-hover {
        display: block;
        border-radius: 5px;
        padding: 10px 10px;
    }
    .accordian-hover:hover {
        color: white;
        background-color: #005eb3;
    }
    .hide-show-sidebar {
        width: 60px;
        transition: all 0.2s ease;
    }
    .toggleMargin {
        margin-left: 60px;
        transition: all 0.2s ease;
    }
</style>