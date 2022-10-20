const tablaCuentas = document.getElementById('tablaCuentas')
const btnAgregarCuenta = document.getElementById('btnAgregarCuenta')
const inputCodigoCuenta = document.getElementById('inputCodigoCuenta')
const inputNombreCuenta = document.getElementById('inputNombreCuenta')

btnAgregarCuenta.addEventListener('click', agregarCuenta)

class Cuenta {
    constructor(codigo, nombre) {
        this.codigo = codigo
        this.nombre = nombre
    }
}

cuentas = []

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

function iniciarSistema() {
    cargarCuentas()
}

function cargarCuentas(){
    cuentas.forEach((cuenta, index) => {
        cuentasHTML = `
        <tr>
            <td>${cuenta.codigo}</td>
            <td>${cuenta.nombre}</td>
        </tr>
        `

        tablaCuentas.innerHTML += cuentasHTML
    })
}

function agregarCuenta() {
    codigoCuenta = inputCodigoCuenta.value
    nombreCuenta = inputNombreCuenta.value
    if(codigoCuenta)
        cuentas.push(new Cuenta(codigoCuenta, nombreCuenta))
}

window.addEventListener('load', iniciarSistema)