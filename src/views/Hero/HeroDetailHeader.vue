<template>
    <b-row class="hero-detail-header my-5">
        <b-col cols="12">
            <!-- avatar  -->
            <div class="d-flex justify-content-center mb-3">
                <div class="hero-detail-avatar" :class="heroClass"></div>
            </div>
            <div class="text-center">
                <!-- nombre -->
                <h1 v-diablo:bone class="text-truncate">{{detail.name}}</h1>
                <div class="text-monospace">
                    <small>
                        <!-- Nivel -->
                        <span>{{detail.level}}</span>
                        <!-- Nivel de leyenda  -->
                        <span class="text-info" v-if="detail.paragonLevel">
                            <span class="text-white"> . </span>
                            ({{detail.paragonLevel}})
                        </span>
                        <!-- Clase (A traves del mixin)-->
                        <span> . {{classToName(detail.classSlug)}}</span>
                        <!-- es de temporada? -->
                        <span v-if="detail.seasonal" class="text-success"> . Seasonal</span>
                        <!-- Es hardcore?  -->
                        <span v-if="detail.harcore" class="text-danger"> . Harcore </span>
                    </small>
                    <div>
                        <!-- En que temporada ha sido creado el Heroe -->
                        <small class="text-muted">
                            Season created:
                        </small>
                        <b-badge>{{detail.seasonCreated}}</b-badge>
                    </div>
                </div>
                <hr>
            </div>
        </b-col>
    </b-row>
</template>
<script>
import heroName from '@/mixins/heroName.js'
export default {
    name: 'HeroDetailHeader',
    mixins: [heroName],
    props: {
        detail: {
            type: Object,
            required: true
        }
    },
    computed: {
        heroClass () {
            const gender = this.detail.gender === 0 ? 'male' : 'female'
            return `hero-${this.detail.classSlug} ${gender}`
        }
    }
}
</script>
<style lang="stylus" scoped>
.hero-detail-avatar
    width 138px
    height 105px
    background-size 280px

    .text-bone
        color #e8dcc2
</style>