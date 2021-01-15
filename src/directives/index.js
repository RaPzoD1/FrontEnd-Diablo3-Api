import Vue from 'vue'
// Registra una directiva global llamada `v-focus`
Vue.directive('focus', {
    /**
     * Inserted hook: Cuando el elemento es insertado en el DOM
     * @param el {HTMLElement} El elemento al que esta dirigida la directiva
     */
    inserted: function (el) {
        // Enfoca el elemento
        el.focus()
    }
})
Vue.directive('diablo', {
    /**
     * @param el {HTMLElement} Elemento al que aplica la directiva
     * @param binding {DirectiveBinding} Datos que recibe la directiva a traves de argumentos, modificadores, etc
     */
    bind (el, binding) {
        // Definimos los colores
        const color = {
            bone: '#e8dcc2',
            white: '#ffffff'
        }

        // Tipografia Diablo
        el.style.fontFamily = 'DiabloHeavy, sans-serif'

        console.log('binding')
        console.log(binding)

        // Argumento (`:`)
        const arg = binding.arg === 'bone' ? 'bone' : 'white'

        // si el argumento es 'bone'
        if (arg === 'bone') {
            // Le damos el color blanco hueso
            el.style.color = color.bone
        } else {
            // Si no, el color por defecto es el blanco
            el.style.color = color.white
        }

        // Modificadores (`.`)
        // Si hay moificadores
        if (Object.keys(binding.modifiers).length > 0) {
            // Value: (`=`)
            // Valor por defecto de value es 1 (Corresponde al ancho del borde en 'px')
            const value = binding.value || 1
            // Expresion con el borde, Ejemplo: '1px solid white'
            const borderExp = `${value}px solid ${color[arg]}`

            // Si el modificador es 'botton'
            if (binding.modifiers.bottom) {
                // Ponemos una linea debajo del elemento
                el.style.borderBottom = borderExp
                // Separar 10px
                el.style.paddingBottom = '10px'
            }
            // si el modificador es 'top'
            if (binding.modifiers.top) {
                // Ponemos una linea encima del elemento
                el.style.borderTop = borderExp
                // Separada 10px
                el.style.paddingTop = '10px'
            }
        }
    }
})