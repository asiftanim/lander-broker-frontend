<template>
    <div class="columns" >

        <div class="column  is-3 p-0 chat-components">
            <div class="crad ">
                <div class="card-content">
                    
                    <div class="content chat-prospect-list">
                        <h6 class="has-text-centered">prospect1@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect2@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect3@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect4@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect5@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect6@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect7@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect8@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect9@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect9@gmail.com</h6>
                        <hr/>
                        <h6 class="has-text-centered">prospect9@gmail.com</h6>
                        
                    </div>           
                </div>
            </div>
        </div>

        <div class="column  is-6 p-0 chat-components">
            <div class="card height-100">
                <div class="card-content">
                    <div class="content">
                        <h3 class="has-text-centered has-text-dark">Conversation</h3>
                        <hr/>
                        <div class="chat-input">
                            <div class="field has-addons mb-5">
                                <b-input type="text" class="input is-info" placeholder="Enter your text..."/>
                                <b-button class="button is-info">Sent</b-button>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        </div>

        <div class="column  is-3 p-0 chat-components">
            <div class="card height-100">
                <div class="card-content">
                    <div class="content is-3">
                        <h3 class="has-text-centered has-text-dark">Other Info</h3>
                
                        <section class="modal-card-body">
                            <div class="columns">
                                <div class="has-text-weight-bold column">Domain Name:</div>
                                <div class="column">Domain.com</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Offered Price:</div>
                                <div class="column">$1000</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Asking Price:</div>
                                <div class="column">$1500</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Company:</div>
                                <div class="column">Alpha Company 1</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Offer Type:</div>
                                <div class="column">Purchase</div>
                            </div>

                            <div class="columns">
                                <div class="column">
                                    <b-button  size="is-small" type="is-success" outlined @click="isPriceSetModalActive = true"> 
                                        <b-icon
                                        pack="fas"
                                        icon="dollar-sign"
                                        size="is-small">
                                        </b-icon>  
                                        <span>Set price</span>
                                    </b-button>
                                </div>
                            </div>

                            
                        </section>
                    </div>           
                </div>
            </div>

            
        </div>
        <b-modal v-model="isPriceSetModalActive" :width="400" >
                <div class="card">          
                    <div class="card-content">
                        <div class="content">
                            <header class="modal-card-head">
                                <p class="modal-card-title">Set Price ($)</p>                   
                            </header>

                            <section class="modal-card-body">
                                <b-field label="Amount">
                                    <b-numberinput min="0">
                                    </b-numberinput>
                                </b-field>
                            </section>

                            <footer class="modal-card-foot">
                            <b-button
                                label="Close"
                                @click="isPriceSetModalActive=false" />
                            <b-button
                                label="Save"
                                type="is-primary" />
                        </footer>

                        </div>
                    </div>
                </div>
            </b-modal>
        
    </div>
</template>

<style >
 .chat-components{
     border:1px solid rgb(128, 128, 128, 0.5);
 }

 .chat-prospect-list{
    height: 600px;
    overflow: auto;
 }
 .height-100{
      height:100%;
 }

 .chat-input{
     position:absolute;
     bottom:0;
     width:95%
 }
</style>

<script>
export default {
  name: 'ChatComponent',
  data() {
       return {
            isPriceSetModalActive:false
       }

  }
  
}
</script>


