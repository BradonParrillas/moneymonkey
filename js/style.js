const sectionCuentas = document.getElementById("section-cuentas")
const sectionDiario = document.getElementById("section-diario")
const sectionBalance = document.getElementById("section-balance")
const btnCuentas = document.getElementById("btn-cuentas")
const btnDiario = document.getElementById("btn-diario")
const btnBalance = document.getElementById("btn-balance")

btnCuentas.addEventListener('click', function() {
    cambiarSection(btnCuentas, sectionCuentas)
})
btnDiario.addEventListener('click', function() {
    cambiarSection(btnDiario, sectionDiario)
})
btnBalance.addEventListener('click', function() {
    cambiarSection(btnBalance, sectionBalance)
})

btnActivo = btnCuentas
sectionVisible = sectionCuentas

function cargarEstilos() {
    mostrarSection()
}

function cambiarSection(button, section) {
    ocultarSection()
    btnActivo = button
    sectionVisible = section
    mostrarSection()
}

function mostrarSection() {
    sectionVisible.style.display = 'block'
    btnActivo.classList.toggle('disabled')
    btnActivo.parentNode.classList.toggle('active')
}

function ocultarSection() {
    sectionVisible.style.display = 'none'
    btnActivo.classList.toggle('disabled')
    btnActivo.parentNode.classList.toggle('active')
}

window.addEventListener('load', cargarEstilos)