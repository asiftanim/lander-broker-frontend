<template>
    <div class="columns">
        <div class="column is-4"></div>
       
        <div class="column is-4 mt-5">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <h3 class="title has-text-centered has-text-dark">Login</h3>
                        <b-field class="has-text-left" label="E-Mail">
                            <b-input type="email" placeholder="example@email.com">
                            </b-input>
                        </b-field>

                        <b-field class="has-text-left" label="Password" >
                            <b-input type="password" placeholder="Password"  password-reveal>
                            </b-input>
                        </b-field>
                        <b-button type="is-success" outlined v-on:click="isAuthenticated">Sign In</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="column is-4"></div>
    </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  methods:{
      isAuthenticated: function(event){
          this.$store.commit('isAuthenticated', true)
          this.$router.push("Home")
      }
  }
}
</script>

