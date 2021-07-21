var imagenes = [];
imagenes[100] = "cien.png";
imagenes[50] = "cincuenta.png";
imagenes[20] = "veinte.png";
imagenes[10] = "diez.png";

class Billete {
    constructor(v, c) {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor];
    }
    mostrar() {
        resultado.appendChild(this.imagen);
    }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var b of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / b.valor);
            if (div > b.cantidad) {
                papeles = b.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(b.valor, papeles));
            b.cantidad = b.cantidad - papeles;
            dinero = dinero - (b.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "I'm a bad ATM and I can't give you money <br />";
    } else {
        for(var e of entregado) {
            if(e.cantidad > 0){
                for(i = 0; i < e.cantidad; i++) {
                    e.mostrar();
                }
            }
        }
    }
}

var caja = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 20) );
var entregado = [];
var dinero;
var div = 0;
var papeles;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);