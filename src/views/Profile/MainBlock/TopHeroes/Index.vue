<template>
    <div class="top-heroes">
        <!-- Titulo con nuestra fuente de diablo -->
        <h2 class="my-4 font-diablo">Top Heroes</h2>
        <!-- 3 columnas, una para cada heroe -->
        <b-row>
            <!-- agregar la key siempre que uses v-for -->
            <b-col sm="4" v-for="hero in heroes" :key="hero.id">
                <!-- Top hero con datos como prop  -->
                <top-hero :hero="hero"/>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import TopHero from './TopHero.vue'
export default {
  components: { TopHero },
    name: 'TopHerores',
    props: {
        heroes: {
            type: Array,
            required: true
        }
    }
}
</script>