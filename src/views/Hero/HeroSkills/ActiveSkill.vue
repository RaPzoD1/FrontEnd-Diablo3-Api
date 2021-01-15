<template>
    <div class="d-flex align-items-center mb-3">
        <div class="mr-2">
            <!-- Slot (identificador de skill) -->
            <span class="slot" :class="slotClass"/>
            <img :src="skillUrl" :alt="skill.name">
        </div>
        <div>
            <!-- Nombre de la habilidad -->
            <p class="skill-name m-0" :title="skill.description">
                {{skill.name}}
            </p>
            <!-- Runa si es que la tiene -->
            <small v-if="rune" class="rune-name text-muted" :title="rune.description">
                {{ rune.name}}
            </small>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ActiveSkill',
    props: {
        skill: {
            required: true,
            type: Object
        },
        rune: {
            required: false,
            type: Object
        },
        slotNum: {
            required: true,
            type: Number || String
        }
    },
    computed: {
        skillUrl () {
            // Posibles tamanios (px)
            const sizes = [21, 42, 64]
            // Api URL para las imagenes
            const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`
            // Ex.
            // http://media.blizzard.com/d3/icons/skills/42/p6_necro_bonespikes.png
            return `${host}${this.skill.icon}.png`
        },
        // Clases CSS para los slots
        slotClass () {
            return `slot-${this.slotNum}`
        }
    }
}
</script>