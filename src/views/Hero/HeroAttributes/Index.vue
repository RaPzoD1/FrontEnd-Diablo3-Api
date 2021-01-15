<template>
    <div class="h-attributes">
        <!-- Titulo -->
        <h2 class="font-diablo">Attributes</h2>
        <hr class="bg-white">
        <div class="attributes">
            <!-- Atributos principales -->
            <div class="core">
                <hero-attribute-list :attributes="coreAttributes"/>
            </div>
            <hr>
            <!-- Atributos Secundarios -->
            <div class="secondary">
                <hero-attribute-list :attributes="secondaryAttributes"/>
            </div>
            <hr>
            <!-- Recursos -->
            <div class="resources">
                <hero-resources :resources="resources"/>
            </div>
        </div>
    </div>
</template>
<script>
import HeroAttributeList from './HeroAttributeList.vue'
import HeroResources from './HeroResources.vue'
// Definimos:
// Los atributos principales
const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
// Atributos secundarios
const secondaryAttributes = ['damage', 'toughness', 'healing']
// Los recursos
const resources = ['life', 'primaryResource', 'secondaryResource']

export default {
    name: 'HeroAttributes',
    components: {
        HeroAttributeList,
        HeroResources
    },
    props: {
        attributes: {
            required: true,
            type: Object
        }
    },
    computed: {
        // Creamos el objeto de atributos principales
        coreAttributes () {
            return coreAttributes.map(item => ({ name: item, val: this.attributes[item] }))
        },
        // creamos el objeto de atributos secundarios
        secondaryAttributes () {
            return secondaryAttributes.map(item => ({ name: item, val: this.attributes[item] }))
        },
        // Creamos el objeto de recursos
        resources () {
            // Agregamos el tipo de personaje `classSlug` (necesario para los Sprites CSS)
            const data = {
                classSlug: this.attributes.classSlug,
                resources: {}
            }
            resources.forEach(item => {
                data.resources[item] = { name: item, val: this.attributes[item] }
            })
            return data
        }
    }
}
</script>