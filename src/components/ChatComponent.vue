<template>
    <div class="columns" >

        <div class="column  is-3 p-0" style="border:1px solid rgb(128, 128, 128, 0.5);">
            <div class="card" style="height:100%;overflow:auto">
                <div class="card-content" >
                    
                    <div class="content">
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
                        
                    </div>           
                </div>
            </div>
        </div>

        <div class="column  is-6 p-0" style="border:1px solid rgb(128, 128, 128, 0.5)">
            <div class="card" style="height:100%">
                <div class="card-content">
                    <div class="content">
                        <h3 class="has-text-centered has-text-dark">Conversation</h3>
                        <hr/>
                        <div style="position:absolute;bottom:0;width:95%">
                            <div class="field has-addons mb-5">
                                <input type="text" class="input is-info is-medium" placeholder="Enter your text...">
                                <div class="control">
                                    <a class="button is-info is-medium">Sent</a>
                                </div>
                            </div>                            
                        </div>

                    </div>           
                </div>
            </div>
        </div>

        <div class="column  is-3 p-0" style="border: 1px solid rgb(128, 128, 128, 0.5)">
            <div class="card" style="height:100%">
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
                        </section>
                    </div>           
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'ChatComponent'
}
</script>

