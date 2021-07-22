<template>
    <div>
        <b-navbar class="mb-6">
            <template #start>
                <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                    Home
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/list-of-leads' }">
                    Leads
                </b-navbar-item>

                <b-navbar-item tag="router-link" :to="{ path: '/list-of-domains' }">
                    Domains
                </b-navbar-item>

                <b-navbar-item tag="router-link" :to="{ path: '/chat' }">
                    Messages
                </b-navbar-item>
                
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
                                Logged in as <b>user 1</b>
                            </b-dropdown-item>
                            <hr class="dropdown-divider">
                            
                            <b-dropdown-item has-link aria-role="menuitem">
                                <router-link :to="{ path: '/profile-update'}">
                                    <b-icon icon="user-edit"></b-icon>
                                    Profile
                                </router-link>
                            </b-dropdown-item>

                            <b-dropdown-item aria-role="menuitem" @click="isPasswordChangeModalActive = true">
                                <b-icon icon="lock"></b-icon>
                                Change Password
                            </b-dropdown-item>

                            <b-dropdown-item value="logout" aria-role="menuitem" v-on:click="logout">
                                <b-icon icon="sign-out-alt"></b-icon>
                                Logout
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>

                <b-modal v-model="isPasswordChangeModalActive" :width="400" >
                    <div class="card">          
                        <div class="card-content">
                            <div class="content">
                                <header class="modal-card-head">
                                    <p class="modal-card-title">Change Password</p>                   
                                </header>

                                <section class="modal-card-body">
                                    <b-field class="has-text-left" label="Old Password" >
                                        <b-input type="password" placeholder="Old Password"  password-reveal>
                                        </b-input>
                                    </b-field>

                                    <b-field class="has-text-left" label="New Password" >
                                        <b-input type="password" placeholder="New Password"  password-reveal>
                                        </b-input>
                                    </b-field>

                                    <b-field class="has-text-left" label="Confiem Password" >
                                        <b-input type="password" placeholder="Confiem Password"  password-reveal>
                                        </b-input>
                                    </b-field>

                                </section>

                                <footer class="modal-card-foot">
                                <b-button
                                    label="Close"
                                    @click="isPasswordChangeModalActive=false" />
                                <b-button
                                    label="Save"
                                    type="is-primary" />
                            </footer>

                            </div>
                        </div>
                    </div>
                </b-modal>
            </template>

        </b-navbar>
  </div>
</template>


<script>
export default {
  name: 'NavbarComponent',
  data(){
    return{
      isPasswordChangeModalActive: false,
    }
  },
  
  methods:{
      logout: function(event){
          this.$store.commit('isAuthenticated', false)
           sessionStorage.clear();
          this.$router.push("/")
         
      }
  }
}

</script>



