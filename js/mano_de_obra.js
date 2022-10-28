const inputs = document.querySelectorAll('.input')
const inputSalario = document.querySelector('#salario-nominal')
const inputEficiencia = document.querySelector('#eficiencia')
const inputDias = document.querySelector('#dias-trabajados')
const inputAños = document.querySelector('#años-trabajados')
const inputEmpleados = document.querySelector('#empleados')

const ouputs = document.querySelectorAll('.ouput')
const outputSetimo = document.querySelector('#septimo')
const outputAguinaldo = document.querySelector('#aguinaldo')
const outputVacaciones = document.querySelector('#vacaciones')
const outputISSS = document.querySelector('#isss')
const outputAFP = document.querySelector('#afp')
const outputINSAFORP = document.querySelector('#insaforp')
const outputTotal = document.querySelector('#salario-total')
const outputFactorDeRecargo = document.querySelector('#factor-recargo')
const outputFactorEficiencia = document.querySelector('#factor-recargo-eficiencia')

const btnLimpiar = document.querySelector('#btn-limpiar')

btnLimpiar.addEventListener('click', limpiarCampos)

let salario = 10
let dias = 5.5
let eficiencia = 85
let años = 5
let empleados = 20

let vacaciones
let aguinaldo
let septimo
let isss
let afp
let insaforp
let salarioTotal

function iniciarManoDeObra() {
    addEventsInputs()
    calcularManoDeObra()
    limpiarCampos()
}

function addEventsInputs() {
    inputs.forEach(input => {
        input.addEventListener('input', calcularManoDeObra)
    })
}

function limpiarCampos() {
    inputs.forEach(input => {
        input.value = ""
    })
    ouputs.forEach(ouput => {
        ouput.value = ""
    })
}

function calcularManoDeObra() {
    salario = inputSalario.value
    dias = inputDias.value
    eficiencia = inputEficiencia.value
    años = inputAños.value
    empleados = inputEmpleados.value
    calcularSeptimo()
    calcularAguinaldo()
    calcularVacaciones()
    calculoSIVM()
    salarioTotal = septimo + aguinaldo + vacaciones + isss + afp + insaforp
    outputTotal.value = salarioTotal.toFixed(2)
    factorDeReCargo()
}

function calcularSeptimo() {
    septimo = 7*salario
    outputSetimo.value = septimo
}

function calcularAguinaldo() {
    if(años < 3)
        aguinaldo = 10 * salario / 52
    else if(años < 10)
        aguinaldo = 15 * salario / 52
    else
        aguinaldo = 18 * salario / 52
    
    outputAguinaldo.value = aguinaldo.toFixed(2)
}

function calcularVacaciones() {
    vacaciones = ((15 * salario) + 0.3*(15 * salario))/52
    outputVacaciones.value = vacaciones.toFixed(2)
}

//Calculo de Salud, Invalides, Vejez y Muerte
function calculoSIVM() {
    let salarioMasVacaciones = septimo + vacaciones
    isss = salarioMasVacaciones * 0.075
    afp = salarioMasVacaciones * 0.065
    insaforp = empleados > 10 ? salarioMasVacaciones * 0.01 : 0

    outputISSS.value = isss.toFixed(2)
    outputAFP.value = afp.toFixed(2)
    outputINSAFORP.value = insaforp.toFixed(2)
}

function factorDeReCargo() {
    let factor = salarioTotal / ( dias * salario)
    let factorEficiencia = factor / (eficiencia/100)

    outputFactorDeRecargo.value = factor.toFixed(2)
    outputFactorEficiencia.value = factorEficiencia.toFixed(2)
}

window.addEventListener('load', iniciarManoDeObra)