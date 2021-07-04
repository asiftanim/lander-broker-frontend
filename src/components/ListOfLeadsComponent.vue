<template>
    <section class="mt-5 ml-5">

        <b-field >
            <b-switch
                size="is-small"
                v-model="isUsd"
                passive-type='is-dark'
                type='is-warning'>
                {{ isUsd ? "$ Dollar" : "€ Euro" }}
            </b-switch>
        </b-field>

        <b-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="date"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <b-table-column field="id" label="ID" width="40" sortable numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="email" label="Email" sortable v-slot="props">
                <a v-bind:href="'mailto:' + props.row.email"> {{props.row.email }}</a>
            </b-table-column>

            <b-table-column field="name" label="Full Name" sortable v-slot="props">
                {{ props.row.name }}
            </b-table-column>

            <b-table-column field="company" label="Company" sortable v-slot="props">
                {{ props.row.company }}
            </b-table-column>

            <b-table-column field="offer_type" label="Offer Type" sortable v-slot="props">
                {{ props.row.offer_type }}
            </b-table-column>

            <b-table-column field="offered_price" label="Offered Price($)" sortable v-slot="props">
                {{ props.row.offered_price }}
            </b-table-column>

            <b-table-column field="asking_price" label="Asking Price($)" sortable v-slot="props">
               <p class="is-center"> {{ props.row.asking_price }}</p>
            </b-table-column>

            <b-table-column  field="domain_name" label="Domain" v-slot="props">
                <a href="#" @click="isDomainInfoModalActive = true">{{props.row.domain_name}}</a>
            </b-table-column>

            <b-table-column field="status" label="Status" sortable v-slot="props">
               <span class="tag is-success">
                    {{props.row.status}}
                </span>
            </b-table-column>

            <b-table-column field="date" label="Date" sortable v-slot="props">
                {{ props.row.date }}
            </b-table-column>

            <b-table-column >
                <b-button  size="is-small" type="is-success" outlined @click="isPriceSetModalActive = true"> 
                    <b-icon
                    pack="fas"
                    icon="dollar-sign"
                    size="is-small">
                    </b-icon>  
                    <span>Set price</span>
                </b-button>
            </b-table-column>

            <b-table-column >
                <b-button size="is-small" type="is-primary" outlined> 
                    <b-icon
                    type="is-primary"
                    pack="fas"
                    icon="comment"
                    size="is-small">
                    </b-icon>  
                    <span>Chat</span>
                </b-button>
            </b-table-column>
        </b-table>

        <b-modal v-model="isDomainInfoModalActive" :width="400" scroll="keep">
            <div class="card">          
                <div class="card-content">
                    <div class="content">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Domain Info</p>                   
                        </header>

                        <section class="modal-card-body">
                            <div class="columns">
                                <div class="has-text-weight-bold column">Domain Name:</div>
                                <div class="column">Domain.com</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Asking Price($):</div>
                                <div class="column">1500</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Language:</div>
                                <div class="column">English</div>
                            </div>

                            <div class="columns">
                                <div class="has-text-weight-bold column">Visitors Stats:</div>
                                <div class="column">8.0</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal v-model="isDomainInfoModalActive" :width="400" scroll="keep">
            <div class="card">          
                <div class="card-content">
                    <div class="content">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Domain Info</p>                   
                    </header>
                    <section class="modal-card-body">
                        <div class="columns">
                            <div class="has-text-weight-bold column">Domain Name:</div>
                            <div class="column">Domain.com</div>
                        </div>
                        <div class="columns">
                            <div class="has-text-weight-bold column">Asking Price($):</div>
                            <div class="column">1500</div>
                        </div>
                        <div class="columns">
                            <div class="has-text-weight-bold column">Language:</div>
                            <div class="column">English</div>
                        </div>
                        <div class="columns">
                            <div class="has-text-weight-bold column">Visitors Stats:</div>
                            <div class="column">8.0</div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </b-modal>

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
    </section>
</template>

<script>
    export default {
        name: 'ListOfLeadsComponent',
        runtimeCompiler: true,
       
        data() {
            return {
                 isDomainInfoModalActive: false,
                 isPriceSetModalActive:false,
                 isUsd: false,
                data: [
                    { 'id': 1, 'email': 'test1@gmail.com', 'name': 'User 1', 'date': '2016-10-15 13:43:27', 'company': 'Alpha1 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain1','status':'active'},
                    { 'id': 2, 'email': 'test2@gmail.com', 'name': 'User 2', 'date': '2016-10-16 13:43:27', 'company': 'Alpha2 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain2','status':'active'},
                    { 'id': 3, 'email': 'test3@gmail.com', 'name': 'User 3', 'date': '2016-10-17 13:43:27', 'company': 'Alpha3 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain3','status':'active'},
                    { 'id': 4, 'email': 'test4@gmail.com', 'name': 'User 4', 'date': '2016-10-18 13:43:27', 'company': 'Alpha4 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain4','status':'active'},
                    { 'id': 5, 'email': 'test5@gmail.com', 'name': 'User 5', 'date': '2016-10-19 13:43:27', 'company': 'Alpha5 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain5','status':'active'},
                    { 'id': 6, 'email': 'test6@gmail.com', 'name': 'User 6', 'date': '2016-10-20 13:43:27', 'company': 'Alpha6 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain6','status':'active'},
                    { 'id': 7, 'email': 'test7@gmail.com', 'name': 'User 7', 'date': '2016-10-21 13:43:27', 'company': 'Alpha7 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain7','status':'active'},
                    { 'id': 8, 'email': 'test8@gmail.com', 'name': 'User 8', 'date': '2016-10-22 13:43:27', 'company': 'Alpha8 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain8','status':'active'},
                    { 'id': 9, 'email': 'test9@gmail.com', 'name': 'User 9', 'date': '2016-10-23 13:43:27', 'company': 'Alpha9 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain9','status':'active'},
                    { 'id': 10, 'email': 'test10@gmail.com', 'name': 'User 10', 'date': '2016-10-24 13:43:27', 'company': 'Alpha10 Inc','offer_type':'purchase', 'offered_price':'1000','asking_price':'1500','domain_name':'domain10','status':'active'}
                    
                ],
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: true,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5
            }
        },

        methods:{
            ShowDomainDetails (domain_name) {                
                this.domain_name2 = domain_name
            }
        }
        
    }

   
</script>