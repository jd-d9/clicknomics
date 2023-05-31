<template>
    <div>
        <nav-and-side-bar @move-contents="moveRouteContents" v-if="toggleClass"></nav-and-side-bar>
        <router-view :class="{'toggle-margin': !toggleContents, 'all-contents': toggleClass}"></router-view>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggleContents: true,
                toggleClass: false,
            }
        },
        methods: {
            moveRouteContents(data) {
                this.toggleContents = data;
            },
            addDynamicClass() {
                console.log(window.location.pathname)
                if(window.location.pathname === '/login' || window.location.pathname === '/password/reset' || window.location.pathname === '/authenticator/validate' || window.location.pathname === '/authenticator/validate/email') {  
                    this.toggleClass = false;
                }else {
                    this.toggleClass = true;
                }
            }
        },
        mounted() {
            this.addDynamicClass();
        },
        unmounted() {
            this.addDynamicClass();
        }
    }
</script>

<style>
    @import url(assets/css/argon.css);
    @import url(assets/css/dark-argon.css);
    @import url(assets/css/responsive.css);
    .all-contents {
        padding-left: 300px;
        transition: all 0.2s ease;
    }
    .toggle-margin {
        padding-left: 60px;
        transition: all 0.2s ease;
    }
</style>