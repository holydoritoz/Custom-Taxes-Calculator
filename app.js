
function cif(valor) {
    let fob = document.getElementById ('montoFob');
    let seguro = document.getElementById ('montoSeguro');
    let flete = document.getElementById ('montoFlete');
    let cif = document.getElementById('totalCif');
    let valorem = document.getElementById('adValorem');
    let iva = document.getElementById('ivaAduanero');
    let tgr = document.getElementById('totalTGR');
    let TotalSuma = 0;
    valor = parseFloat(valor); // Convertir a numero entero (número).
    TotalSuma = document.getElementById('totalCif').innerHTML;
    // Valida y pone en cero "0".
    TotalSuma = (TotalSuma == null || TotalSuma == undefined || TotalSuma == "") ? 0 : TotalSuma;
    /* Variable genrando la suma. */
    TotalSuma = (parseFloat(TotalSuma) + parseFloat(valor));
    // Escribir el resultado en una etiqueta "span".
    document.getElementById('totalCif').innerHTML = TotalSuma;

    TotalAdValorem = (parseFloat(TotalSuma)) * 0.06;
    document.getElementById('adValorem').innerHTML = TotalAdValorem 

    TotalIvaAduanero = (parseFloat(TotalSuma)) * 0.19;
    document.getElementById('ivaAduanero').innerHTML = TotalIvaAduanero

    totalTgr = TotalAdValorem + TotalIvaAduanero;
    document.getElementById('totalTGR').innerHTML = totalTgr;


    // Boton de borrar
    document.getElementById('btn-limpiar').addEventListener('click', function(){
        fob.value = '';
        seguro.value = '';
        flete.value = '';
        cif.value = '';
        valorem.value ='';
        iva.value =''
        tgr.value =''
    })
};












