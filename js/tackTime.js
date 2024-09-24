let infoForm = [];


function tackTimeFunction(event) {
    event.preventDefault();

    let date =  document.forms["formTackTime"]["date"].value;
    let days = document.forms["formTackTime"]["days"].value;
    let turno = document.forms["formTackTime"]["turno"].value;
    let demanda = document.forms["formTackTime"]["demanda"].value;
    let calidad = (document.forms["formTackTime"]["calidad"].value) / 100;
    let eficiencia = (document.forms["formTackTime"]["eficiencia"].value) / 100;

    const totalTurno = 8;
    const minuto = 60;
    const segundo = 60;

    if (turno > 3){
        alert("El número de turnos supera las horas en el día")
    }else{  

    let totalJornada = totalTurno * turno;
    let totalHoras = totalJornada * days;
    let totalMinutos = totalHoras * minuto;
    let totalSegundos = totalMinutos * segundo;
    let tackTime = ((totalSegundos) / demanda);
    let newCalidad = tackTime * calidad;
    let newEficiencia = newCalidad * eficiencia;
    let newDemandaCalidad = totalSegundos / newCalidad;
    let newDemandaEficiencia = totalSegundos / newEficiencia;


    infoForm.push([date, totalHoras, totalMinutos, totalSegundos, tackTime, newDemandaCalidad, newDemandaEficiencia]);

    createTabla();
}
}

function createTabla() {
    /*let tabla = document.createElement("div");*/
   let tabla = "<thead><tr><th>Fecha</th><th>Horas</th><th>Minutos</th><th>Segundos</th><th>Nuevo Tack Time</th><th>Nueva cantidad requerida</th><th>Tack Time final</th><th><button>Eliminar</button></th></tr></thead><tbody>"

    for (let i = 0; i < infoForm.length; i++) {
        tabla += `<td>${infoForm[i][0]}</td><td>${infoForm[i][1]}</td><td>${infoForm[i][2]}</td><td>${infoForm[i][3]}</td><td>${infoForm[i][4]}</td><td>${infoForm[i][5]}</td><td>${infoForm[i][6]}</td></tr></tbody>`

    }
    
    document.getElementById("tackTimeTable").innerHTML=tabla;
    tabla.onclick=eliminar;
}




