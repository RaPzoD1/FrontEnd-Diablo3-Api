<template>
    <div class="heroes-list border-top border-secondary mt-5 pt-5">
        <h1>Heroes List</h1>
        <b-table :items="heroes" :fields="fields" dark hover small striped stacked="sm">
            <!-- contenido -->
            <template v-slot:cell(name)="data">
                <hero-ico :hero="data.item"/>
            </template>
            <template v-slot:cell(class)="data">
                <hero-class-level :hero="{classSlug: data.item.classSlug, level: data.item.level}"/>
            </template>
            <template v-slot:cell(kills)="data">
                <span>{{data.item.kills.elites | formatNumber}}</span>
            </template>
        </b-table>
    </div>
</template>
<script>
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
import { formatNumber } from '@/filters/numeral.js'
export default {
    name: 'HeroesList',
    filters: {
        formatNumber
    },
    props: {
        heroes: {
            type: Array,
            required: true
        }
    },
    components: {
        HeroIco,
        HeroClassLevel
    },
    data () {
        return {
            fields: [
                {
                    key: 'name',
                    label: 'Name'
                },
                {
                    key: 'class',
                    label: 'Class',
                    sortable: true
                },
                {
                    key: 'kills',
                    label: 'Elite Kills',
                    sortable: true
                }
            ]
        }
    }
}
</script>