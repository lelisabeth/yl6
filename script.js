(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            let kell= h >= 12 ? 'pm' : 'am';
            h = h % 12;
            h = h ? h : 12;

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s + kell;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let v1 = document.getElementById("v1");
        let v2 = document.getElementById("v2");
        let tln = 0;
        let trt = 2.5;
        let nrv = 2.5;
        let prn = 3;
        let price = 0;
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
        }
        else if (linn.value === "tln") {
            price = tln;
            e.innerHTML = price + "€";
        }
        else if (linn.value === "trt") {
            price = trt;
            e.innerHTML = price + "€";
        }
        else if (linn.value === "nrv") {
            price = nrv;
            e.innerHTML = price + "€";
        }
        else if (linn.value === "prn") {
            price = prn;
            e.innerHTML = price + "€";
        }
        else {
            e.innerHTML = "x,xx &euro;";
        }
        if (v1.checked === true) {
            price = price + 5;
            e.innerHTML = price + "€";
        }
        if (v2.checked === true) {
            price = price + 1;
            e.innerHTML = price + "€";
        }
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

document.getElementById("form").addEventListener("submit", estimateDelivery);
    
let e = document.getElementById("delivery");
e.innerHTML = "0,00 &euro;";

function estimateDelivery(event) {
    event.preventDefault();

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let letters = /^[A-Za-z]+$/; 

    if (fname.value === "") {
        alert("Palun kirjutage oma eesnimi");
        
        fname.focus();
        
        return;
    }
    else if (lname.value === "") {
        alert("Palun kirjutage oma perekonnanimi");
        
        lname.focus();
        
        return;
    }
    else if (fname.value.match(letters) && lname.value.match(letters)) {
        return true;
    }
    else {
        alert("Palun kirjutage oma nimi õigesti");
        
        fname.focus();
        lname.focus();
        
        return;
    }
    }

function estimateDelivery(event) {
    event.preventDefault();

    let makseviis1 = document.getElementById("seb");
    let makseviis2 = document.getElementById("lhv");
    let makseviis3 = document.getElementById("swed");
    if (makseviis1.checked === true || makseviis2.checked === true || makseviis3.checked === true) {
        
        return true;
    }
    else {
        alert("Palun valige makseviis");
        
        maskeviis1.focus();
        makseviis2.focus();
        makseviis3.focus();
        
        return;
    }
}

// map

let mapAPIKey = "AomMoJyt63-pHBPmM-XvUmMMKrPqhjlsnGv97CurI2AEWSTQQpUJLVOTVzpgE7Qi";

let map, infobox;

function GetMap() {
    
    "use strict";

    let tartu = new Microsoft.Maps.Location(
        58.38104, 
            26.71992
        );
    let tallinn = new Microsoft.Maps.Location(
        59.442688, 
        24.7531967
    );
    let paide = new Microsoft.Maps.Location(
        58.8814812, 
        25.5490265
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: paide,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });
    infobox.setMap(map);
    
    let pushpin = new Microsoft.Maps.Pushpin(tartu, {
            title: 'Tartu Ülikool',
            description: 'Tartu',
            text: 'UT'
        });

    pushpin.metadata = {
        title: 'Tartu Ülikool',
        description: 'Tartu on hea koht'
    };
    let pushpin2 = new Microsoft.Maps.Pushpin(tallinn, {
            title: 'Tallinn',
            description: 'Hea koht',
            text: 'Tallinn'
        });
    pushpin2.metadata = {
            title: 'Tallinn',
            description: 'Tallinn on Eesti pealinn'
        };
    Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(pushpin2, 'click', pushpinClicked);
    map.entities.push(pushpin);
    map.entities.push(pushpin2);

}
function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}
function pushpin2Clicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

