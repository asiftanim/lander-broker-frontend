<template>
    <section class="mt-5 ml-5">
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

            <b-table-column field="email" label="Domain" sortable v-slot="props">
                {{props.row.name }}
            </b-table-column>

            <b-table-column field="name" label="Price in Euro €" sortable v-slot="props">
                {{ props.row.priceEUR }}
            </b-table-column>

            <b-table-column field="company" label="Price in USD $" sortable v-slot="props">
                {{ props.row.priceUSD }}
            </b-table-column>

            <b-table-column field="offer_type" label="Purchasble"  v-slot="props">
               <b-field>
                    <b-checkbox disabled v-model="props.row.isPurchasable">
                        {{ props.row.isPurchasable }}
                    </b-checkbox>
                </b-field>
            </b-table-column>
        </b-table>

    </section>
</template>

<script>
    export default {
        name: 'DomainListComponent',
        runtimeCompiler: true,
        data() {
            return {
                isDomainUpdateModalActive: false,
                isPurchasable: false,
                data: [
                        {'id':1,'name':'test-1.de','priceEUR':'149','priceUSD':'149','isPurchasable':true},
                        {'id':2,'name':'test-2.com','priceEUR':'799','priceUSD':'949','isPurchasable':true},
                        {'id':3,'name':'german-umalaute-öäü.com','priceEUR':'99','priceUSD':'99','isPurchasable':true},
                        {'id':4,'name':'test-3.co.uk','priceEUR':'99','priceUSD':'99','isPurchasable':false},
                        {'id':5,'name':'test-4.online','priceEUR':'4099','priceUSD':'4999','isPurchasable':true},
                        {'id':6,'name':'test-5.top','priceEUR':'8999','priceUSD':'10499','isPurchasable':true},
                        {'id':7,'name':'test-6.de','priceEUR':'40099','priceUSD':'47999','isPurchasable':false}
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
        }
        
    }

   
</script>