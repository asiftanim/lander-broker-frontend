<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css" integrity="sha512-OdEXQYCOldjqUEsuMKsZRj93Ht23QRlhIb8E/X0sbwZhme8eUw6g8q7AdxGJKakcBbv7+/PX0Gc2btf7Ru8cZA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <b-navbar class="mb-6">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/list-of-leads' }">
                Leads
            </b-navbar-item>

            <b-navbar-item tag="router-link" :to="{ path: '/list-of-domains' }">
                Domains
            </b-navbar-item>

            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
           <div class="navbar-menu">
            <div class="navbar-end">
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu">
                    <template #trigger>
                        <a
                            class="navbar-item"
                            role="button">
                            <span>User 1</span>
                            <b-icon icon="angle-down"></b-icon>
                        </a>
                    </template>


                    <b-dropdown-item custom aria-role="menuitem">
                        Logged as <b>user 1</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
                    
                    <b-dropdown-item has-link aria-role="menuitem">
                        <router-link :to="{ path: '/profile-update'}">
                            <b-icon icon="user-edit"></b-icon>
                            Profile
                        </router-link>
                    </b-dropdown-item>

                    <b-dropdown-item value="settings" aria-role="menuitem">
                        <b-icon icon="cog"></b-icon>
                         Settings
                    </b-dropdown-item>

                    <b-dropdown-item value="logout" aria-role="menuitem">
                        <router-link :to="{ path: '/'}">
                            <b-icon icon="sign-out-alt"></b-icon>
                            Logout
                        </router-link>
                        
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
