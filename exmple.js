


const $formTackTime = document.getElementById("formTackTime");
const totalTurno = 8;
const minuto = 60;
const segundo = 60;

$formTackTime.addEventListener("submit", function tackTimeFunction(event) {
    event.preventDefault();
     
    let infoForm = new FormData($formTackTime);
    let $tackTimeTable = document.getElementById("tackTimeTable");
    let newRowinTable = $tackTimeTable.insertRow(-1);

    const objetoProductos = {
        totalJornada: 0,
        totalHoras: 0,
        totalMinutos: 0,
        totalSegundos: 0,
        tackTime: 0,
        newCalidad: 0,
        newEficiencia: 0,
        newDemandaCalidad: 0,
        newDemandaEficiencia: 0
    };

    objetoProductos.totalJornada = totalTurno * turno;
    objetoProductos.totalHoras = objetoProductos.totalJornada * days;
    objetoProductos.totalMinutos = objetoProductos.totalHoras * minuto;
    objetoProductos.totalSegundos = objetoProductos.totalMinutos * segundo;
    objetoProductos.tackTime = ((objetoProductos.totalSegundos) / demanda);
    objetoProductos.newCalidad = objetoProductos.tackTime * calidad;
    objetoProductos.newEficiencia = objetoProductos.newCalidad * eficiencia;
    objetoProductos.newDemandaCalidad = objetoProductos.totalSegundos / objetoProductos.newCalidad;
    objetoProductos.newDemandaEficiencia = objetoProductos.totalSegundos / objetoProductos.newEficiencia;

    let newCellinTable = newRowinTable.insertCell(0);
    newCellinTable.textContent = infoForm.get("datee");

    newCellinTable = newRowinTable.insertCell(1);
    newCellinTable.textContent = infoForm.post(objetoProductos.totalHoras);

    newCellinTable = newRowinTable.insertCell(2);
    newCellinTable.textContent = infoForm.post(objetoProductos.totalMinutos);

    newCellinTable = newRowinTable.insertCell(3);
    newCellinTable.textContent = infoForm.post(objetoProductos.totalSegundos);

    newCellinTable = newRowinTable.insertCell(4);
    newCellinTable.textContent = infoForm.post(objetoProductos.tackTime);

    newCellinTable = newRowinTable.insertCell(5);
    newCellinTable.textContent = infoForm.post(objetoProductos.newDemandaCalidad);
    
    newCellinTable = newRowinTable.insertCell(6);
    newCellinTable.textContent = infoForm.post(objetoProductos.newDemandaEficiencia);

})

function insertRowinTable ()