const string = '10'
const number = 10
const array = {
    typ: 'Podengo',
    stav: 'Fúzatý',
    vek: 7,
    hmotnost: 'Priveľa',
    nalada: 'Švihnutý'
}
console.log(array)
console.log('moj pes je: ' + array.nalada + ' rokov: ' + array.vek + ' stav: ' + array.stav)

const arrayWithFunction = {
    vratVek: function () {
        return 'Mam ' + array.vek + ' rokov. Haf!'
    },
    zostarni: function () {
        array.vek++
            return 'Hotovo'
    },
    podSem: function () {
        return array
    }
}

console.log(arrayWithFunction.vratVek())
console.log(arrayWithFunction.zostarni())
console.log(arrayWithFunction.vratVek())
