class Cuenta {
    constructor(codigo, nombre) {
        this.codigo = codigo
        this.nombre = nombre
        this.subcuentas = []
    }
}

let activos = new Cuenta('1', 'Activos')
activos.subcuentas.push(
    new Cuenta()
)
let pasivos = new Cuenta('2', 'Pasivos')
let patrimonioNeto = new Cuenta('3', 'Patrimonio Neto')
let ingresosDiferidos = new Cuenta('4', 'Ingresos diferidos')
let costos = new Cuenta('5', 'Costos')
let gastos = new Cuenta('6', 'Gastos')

let cuentas = [
    {
        nombre:'Activo',
        subcuentas:[
            {
                nombre:'',
                subcuentas:[
                    {nombre:'Caja',cantidad:0},
                    {nombre:'Bancos',cantidad:0},
                    {nombre:'Disponible restringidos',cantidad:0},
                    {nombre:'Iva crédito fiscal',cantidad:0},
                    {nombre:'Renta',cantidad:0},
                    {nombre:'Gastos pagados por anticipado',cantidad:0},
                    {nombre:'Almacen',cantidad:0}
                ]
            },
        ]
    },
    {
        nombre:'Pasivo',
        subcuentas:[
            {
                nombre:'Pasivo corrientes',
                subcuentas:[
                    {nombre:'Equipo de oficina',cantidad:0},
                    {nombre:'Equipo de computación',cantidad:0},
                    {nombre:'Inmuebles',cantidad:0},
                    {nombre:'Cuentas por cobras',cantidad:0},
                    {nombre:'Insumos',cantidad:0},
                    {nombre:'Insumos intangibles',cantidad:0},
                ]
            },
        ]
    },
    {
        nombre:'Patrimonio neto',
        subcuentas:[
            {
                nombre:'Capital',
                subcuentas:[
                    {nombre:'',cantidad:0}
                ]
            },
            {
                nombre:'Reservas de capital',
                subcuentas:[]
            },
            {
                nombre:'Resultados',
                subcuentas:[]
            },
            {
                nombre:'Patrimonio restringido',
                subcuentas:[]
            }
        ]
    },
    {
        nombre:'Ingresos diferidos',
        subcuentas:[
            {
                nombre:'Ingresos de operación',
                subcuentas:[]
            }
        ]
    },
    {
        nombre:'Costos',
        subcuentas:[
            {
                nombre:'Costos de ventas',
                subcuentas:[]
            },
            {
                nombre:'Costos de operación',
                subcuentas:[]
            },
            {
                nombre:'Costos indirectos',
                subcuentas:[]
            }
        ]
    },
    {
        nombre:'Gastos',
        subcuentas:[
            {
                nombre:'Gastos de funcionamiento',
                subcuentas:[]
            }
        ]
    }
]