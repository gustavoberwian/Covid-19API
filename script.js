const url = "https://rapidapi.p.rapidapi.com/totals";
const body = {
    method:"GET",
    headers:{
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "ebe0ac6a6dmsh5cd1c36deff7359p1128e6jsna14c4d021dee",
        "useQueryString": true
    }
};

let tbody=document.querySelector("tbody");

function getData(){
    tbody.innerHTML='';

    fetch(url, body).then(function (response){
        return response.json();
    }).then(function (response){
        response.forEach(element=>{
            let confirmados = element.confirmed;
            let criticos = element.critical;
            let mortes = element.deaths;
            let curados = element.recovered;

            let tr = document.createElement("tr");

            let confirmed = document.createElement("td");
            confirmed.appendChild(document.createTextNode(confirmados));
            tr.appendChild(confirmed);

            let critical = document.createElement("td");
            critical.appendChild(document.createTextNode(criticos));
            tr.appendChild(critical);

            let deaths = document.createElement("td");
            deaths.appendChild(document.createTextNode(mortes));
            tr.appendChild(deaths);

            let recovered = document.createElement("td");
            recovered.appendChild(document.createTextNode(curados));
            tr.appendChild(recovered);

            tbody.appendChild(tr);
        })
    })
}

getData();
