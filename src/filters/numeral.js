import numeral from 'numeral'

// funcion que recibe un argumento ( numero o string numerico)
// y lo devuelve formateado
// si no hay numero devolvemos 0

const formatNumber = (num) => {
    if (!num) {
        return 0
    }
    return numeral(Number(num)).format()
}
// finalmente exportamos
export {
    formatNumber
}