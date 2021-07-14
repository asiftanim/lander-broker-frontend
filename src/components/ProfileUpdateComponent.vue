<template>
    <div class="card">
    <div class="card-content">
        <div class="content">
            <h3 class="title has-text-centered has-text-dark">Update Profile</h3>
            <div class="columns">
                <div class="coulmn is-4 is-offset-4"></div>

                 <div class="column is-4 is-offset-4 ">
                    <figure class="image is-128x128" style="margin: auto;">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                </div>
                
                <div class="coulmn is-4 is-offset-4"></div>
            </div>

            <div class="columns">
                <div class="coulmn is-4 is-offset-4"></div>

                <div class="column is-4 is-offset-4 ">
                    <b-field class="file is-primary " :class="{'has-name': !!file}">
                        <b-upload v-model="file" class="file-label" expanded>
                           <a class="button is-primary is-fullwidth">
                                <b-icon icon="upload"></b-icon>
                                <span>Upload Image</span>
                            </a>
                        </b-upload>
                    </b-field>
                </div>

                <div class="coulmn is-4 is-offset-4"></div>
            </div>
           
            <b-field class="has-text-left" label="Full Name">
                <b-input type="text" placeholder="Full Name">
                </b-input>
            </b-field>

            <!-- <b-field class="has-text-left" label="Old Password" >
                <b-input type="password" placeholder="Old Password"  password-reveal>
                </b-input>
            </b-field>
            <b-field class="has-text-left" label="New Password" >
                <b-input type="password" placeholder="New Password"  password-reveal>
                </b-input>
            </b-field> -->
            <b-button type="is-success" outlined>Update</b-button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileUpdateComponent',
  data() {
            return {
                file: null
            }
        }
}
</script>

