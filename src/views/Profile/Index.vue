<template>
  <div>
    <base-loading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData"/>
      <artisans-block :artisans-data="artisansData"/>
    </template>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import MainBlock from './MainBlock/Index.vue'
import ArtisansBlock from './ArtisansBlock/Index.vue'
export default {
  name: 'ProfileView',
  // damos de alta el mixin setError
  mixins: [
    setError
  ],
  components: {
    BaseLoading,
    MainBlock,
    ArtisansBlock
    },
  data () {
      return {
          isLoading: false,
          profileData: null
      }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },
  created () {
    this.isLoading = true
    // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
    // Desestructuración
	const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    /**
    * Obtener los datos de la API
    * Guardarlos en 'profileData'
    */
    fetchData (region, account) {
      // Llamada a la API con los datos necesarios
      getApiAccount({ region, account })
        .then(({ data }) => {
            // guardamos los datos en la variable local
            this.profileData = data
        })
        .catch((err) => {
            this.profileData = null
            // creamos el objeto error errObj
            const errObj = {
                routeParams: this.$route.params,
                message: err.message
            }
            if (err.response) {
                errObj.data = err.response.data
                errObj.status = err.response.status
            }
            // Hacemos uso del mixin
            // guardamos el objeto con el error en el modulo errorjs del state
            this.setApiErr(errObj)
            this.$route.push({ name: 'Error' })
        })
        .finally(() => {
            this.isLoading = false
        })
    }
  }
}
</script>
