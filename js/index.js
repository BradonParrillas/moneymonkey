const tablaCuentas = document.getElementById('tablaCuentas')
const btnAgregarCuenta = document.getElementById('btnAgregarCuenta')
const inputCodigoCuenta = document.getElementById('inputCodigoCuenta')
const inputNombreCuenta = document.getElementById('inputNombreCuenta')
const filasCuentas = document.getElementsByClassName('fila-cuenta')

const tablaMovimientos = document.getElementById('tablaMovimientos')
const selectCuenta = document.getElementById('selectCuenta')
const inputMontoMov = document.getElementById('inputMontoMov')
const inputConceptoMov = document.getElementById('conteptoMovimiento')
const inputDateMov = document.getElementById('dateMovimiento')
const btnRegistrarMov = document.getElementById('btnRegistrarMov')
const checkAbonar = document.getElementById('checkAbonarMov')
const checkCargar = document.getElementById('checkCargarMov')
const inputNumMov = document.getElementById('inputNumMov')

const tableBalance = document.getElementById('balanceDeComprobacion')

btnAgregarCuenta.addEventListener('click', agregarCuenta)
btnRegistrarMov.addEventListener('click', registrarMovimiento)


class Cuenta {
    constructor(codigo, nombre) {
        this.codigo = codigo
        this.nombre = nombre
        this.monto = null
    }
}

class Movimiento {
    constructor(fecha, cuenta, monto, tipo, numero) {
        this.fecha = fecha
        this.cuenta = cuenta
        this.monto = monto
        this.tipo = tipo
        this.numero = numero
    }
}

let cuentas = []
let movimientos = []
let totalDebe = 0
let totalHaber = 0

cuentas.push(
    new Cuenta("1","Activo"),
    new Cuenta("11","Activo corriente"),
    new Cuenta("111","Caja"),
    new Cuenta("112","Bancos"),
    new Cuenta("113","Disponible restringidos"),
    new Cuenta("114","Iva crédito fiscal"),
    new Cuenta("115","Renta"),
    new Cuenta("116","Gastos pagados por anticipado"),
    new Cuenta("117","Almacen"),
    new Cuenta("12","Activo no corrientes"),
    new Cuenta("121","Equipo de oficina"),
    new Cuenta("122","Equipo de computación"),
    new Cuenta("123","Inmuebles"),
    new Cuenta("124","Cuentas por cobras"),
    new Cuenta("125","Insumos"),
    new Cuenta("126","Insumos intangibles"),
    new Cuenta("2","Pasivo"),
    new Cuenta("21","Pasivo corrientes"),
    new Cuenta("211","Cuentas por pagar"),
    new Cuenta("212","Iva débito fiscal"),
    new Cuenta("22","Pasivo no corrientes"),
    new Cuenta("221","Préstamos bancarios"),
    new Cuenta("222","Ingresos diferidos"),
    new Cuenta("3","Patrimonio neto"),
    new Cuenta("31","Capital"),
    new Cuenta("311","Capital social"),
    new Cuenta("32","Reservas de capital"),
    new Cuenta("321","Reservas de capital"),
    new Cuenta("33","Resultados"),
    new Cuenta("331","Utilidad neta"),
    new Cuenta("332","Utilidad del ejercicio"),
    new Cuenta("333","Pérdidas"),
    new Cuenta("34","Patrimonio restringido"),
    new Cuenta("341","Patrimonio restringido"),
    new Cuenta("4","Ingresos diferidos"),
    new Cuenta("41","Ingresos de operación"),
    new Cuenta("411","Ingresos por servicios"),
    new Cuenta("412","Ingresos de otras actividades"),
    new Cuenta("413","Ventas"),
    new Cuenta("5","Costos"),
    new Cuenta("51","Costos de ventas"),
    new Cuenta("511","Costos de ventas"),
    new Cuenta("512","Compras de mercancías"),
    new Cuenta("513","Iva pagado por anticipado"),
    new Cuenta("52","Costos de operación"),
    new Cuenta("521","Inventario"),
    new Cuenta("522","Mano de obra directa"),
    new Cuenta("53","Costos indirectos"),
    new Cuenta("531","Salarios supervisión"),
    new Cuenta("532","Salarios oficina"),
    new Cuenta("533","Mano de obra indirecta"),
    new Cuenta("534","Materiales indirectos"),
    new Cuenta("535","Suministros"),
    new Cuenta("536","Herramientas"),
    new Cuenta("537","Otros materiales"),
    new Cuenta("538","Depreciación"),
    new Cuenta("539","Impuestos"),
    new Cuenta("6","Gastos"),
    new Cuenta("61","Gastos de funcionamiento"),
    new Cuenta("611","Gastos en personal"),
    new Cuenta("612","Servicios públicos"),
    new Cuenta("613","Servicios privados"),
    new Cuenta("614","Servicios publicidad"),
    new Cuenta("615","Gastos de viaje y transporte"),
    new Cuenta("616","Seguros"),
    new Cuenta("617","Mantenimiento y reparaciones")
)
cuentas[2].monto = -1000
movimientos.push(
    new Movimiento(new Date("2022-03-25"),2, 2000, "Abonar", 1),
    new Movimiento(new Date("2022-03-30"),8, 5600, "Abonar", 2),
    new Movimiento(new Date("2022-04-01"),18, 520, "Abonar", 3)
)

function iniciarSistema() {
    cargarCuentas()
    cargarMovimientos()
    realizarBalanceDeComprobacion()
}

function cargarCuentas() {
    tablaCuentas.innerHTML = ""
    selectCuenta.innerHTML = ""
    cuentas.sort(function (a, b){
        if(a.codigo > b.codigo) {
            return 1;
        }
        if(a.codigo < b.codigo) {
            return -1;
        }
        return 0;
    })
    cuentas.forEach((cuenta, index) => {
        cuentasHTML = `
        <tr class="fila-cuenta" id="filaCuenta${cuenta.codigo}">
            <td>${cuenta.codigo}</td>
            <td>${cuenta.nombre}</td>
        </tr>
        `
        
        if(cuenta.codigo.length == 3){
            optionCuentaHTML = `
            <option value="${index}">${cuenta.codigo} ${cuenta.nombre}</option>
            `
            selectCuenta.innerHTML += optionCuentaHTML
        }

        tablaCuentas.innerHTML += cuentasHTML
    })
}

function cargarMovimientos() {
    tablaMovimientos.innerHTML = ""
    totalDebe = 0
    totalHaber = 0
    movimientos.sort(function (a, b){
        if(a.numero > b.numero) {
            return 1;
        }
        if(a.numero < b.numero) {
            return -1;
        }
        return 0;
    })
    movimientos.forEach((movimiento, index) => {
        if(
            (movimiento.tipo == "Abonar" && cuentas[movimiento.cuenta].codigo[0] == 1) ||
            (movimiento.tipo == "Cargar" && cuentas[movimiento.cuenta].codigo[0] != 1)
        ) {
            tablaMovimientos.innerHTML +=`
            <tr class="fila-movimiento" id="filaMovimiento${index}">
                <td>${movimiento.numero}</td>
                <td>${cuentas[movimiento.cuenta].codigo} ${cuentas[movimiento.cuenta].nombre}</td>
                <td>${movimiento.monto}</td>
                <td></td>
                <td>${movimiento.tipo}</td>
            </tr>
            `
            totalDebe += movimiento.monto
        } else {
            tablaMovimientos.innerHTML +=`
            <tr class="fila-movimiento" id="filaMovimiento${index}">
                <td>${movimiento.numero}</td>
                <td>${cuentas[movimiento.cuenta].codigo} ${cuentas[movimiento.cuenta].nombre}</td>
                <td></td>
                <td>${movimiento.monto}</td>
                <td>${movimiento.tipo}</td>
            </tr>
            `
            totalHaber += movimiento.monto
        }        
    })
    tablaMovimientos.innerHTML +=`
            <tr class="fila-movimiento table-dark" id="filaMovimientoTotal">
                <td></td>
                <td><p><strong>Total</strong></p></td>
                <td><p><strong>${totalDebe}</strong></p></td>
                <td><p><strong>${totalHaber}</strong></p></td>
                <td></td>
            </tr>
            `
}

function agregarCuenta() {
    let codigoCuenta = parseInt(inputCodigoCuenta.value)
    let nombreCuenta = inputNombreCuenta.value
    let estaEnCuentas

    cuentas.forEach(cuenta => {
        if(cuenta.codigo == codigoCuenta || (codigoCuenta % 10) == 0)
            estaEnCuentas = true
    })

    if(codigoCuenta > 0 && codigoCuenta < 1000 && !(estaEnCuentas)) {
        if (nombreCuenta != "") {
            cuentas.push(new Cuenta(String(codigoCuenta), nombreCuenta))
            console.log(codigoCuenta)
            cargarCuentas()
        } else {
            alert("Ingrese un nombre a la cuenta")
        }
    }
    else {
        alert("El numero no es valido❗")
    }
}

function seleccionarCuenta() {
    console("Se selecciono")
}

function registrarMovimiento() {
    let movimientoValido
    dateMov = inputDateMov.value
    cuenta = parseInt(selectCuenta.value)
    monto = parseInt(inputMontoMov.value)
    concepto = inputConceptoMov.value
    tipo = checkAbonar.checked ? "Abonar" : (checkCargar.checked ? "Cargar" : "")
    numero = parseInt(inputNumMov.value)

    movimientoValido = dateMov != "" ? true : false
    movimientoValido = cuenta != "" ? true : false
    movimientoValido = monto != "" ? (monto > 0 ? true : false) : false
    movimientoValido = numero != "" ? (monto > 0 ? true : false) : false
    movimientoValido = tipo != "" ? true : false

    if(movimientoValido) {
        console.log("Movimiento valido")
        console.log(dateMov, cuenta, monto, concepto, tipo)
        nuevoMovimiento = new Movimiento(dateMov,cuenta,monto,tipo, numero)
        movimientos.push(nuevoMovimiento)
        //!Se agrega el monto en la cuenta
        if(nuevoMovimiento.tipo == "Abonar") {
            cuentas[nuevoMovimiento.cuenta].monto += nuevoMovimiento.monto
        } else {
            cuentas[nuevoMovimiento.cuenta].monto -= nuevoMovimiento.monto
        }
        cargarMovimientos()
    } else {
        console.log("Movimiento invalido")
        console.log(dateMov, cuenta, monto, concepto, tipo)
        // alert("Ingrese todos los datos")
    }
}

function realizarBalanceDeComprobacion() {
    tableBalance.innerHTML = ""
    cuentas.forEach((cuenta) => {
        if(cuenta.codigo.length == 3 && cuenta.monto != null) {
            if(cuenta.codigo[0] == "1" && cuenta.monto >= 0) {
                tableBalance.innerHTML += `
                <tr>
                    <td scope="col">${cuenta.codigo} ${cuenta.nombre}</td>
                    <td scope="col">${cuenta.monto}</td>
                    <td scope="col"></td>
                </tr>
                `
            } else {
                tableBalance.innerHTML += `
                <tr>
                    <td scope="col">${cuenta.codigo} ${cuenta.nombre}</td>
                    <td scope="col"></td>
                    <td scope="col">${Math.abs(cuenta.monto)}</td>
                </tr>
                `
            }
        }
    })
}

window.addEventListener('load', iniciarSistema)