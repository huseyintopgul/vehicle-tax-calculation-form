function yillar(){

    let tarih = new Date();
    let yil = tarih.getFullYear();

    for(let i=yil; i>=1950; i--){
        let modelYili = document.createElement("option");
        document.getElementById("aracYili").options.add(modelYili);
        modelYili.value=i;
        modelYili.text=i;
    }
}

function hesapla() {
    let aracTipi;
    let motorGucu;
    let aracYili;
    let odenecekVergi;
    let i;


    //Birinci Döngü Bloğu Araç Tipi Seçimi
    for (i = 0; i < document.getElementById("aracTipi").length; i++) {
        if (document.getElementById("aracTipi").options[i].selected) {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        }
        console.log(aracTipi);
    }

     //İkinci Döngü Bloğu Motor Hacmi Seçimi

     for (i=0; i<document.getElementsByName("motorGucu").length; i++) {
        if (document.getElementsByName("motorGucu")[i].checked) {
            motorGucu = document.getElementsByName("motorGucu")[i].value;
        } 
        console.log(motorGucu);
    }


    //Üçüncü Döngü Bloğu Model Yılı Seçimi

    for(i=0; i<document.getElementById("aracYili").length; i++){
        if(document.getElementById("aracYili").options[i].selected){
            aracYili = document.getElementById("aracYili").options[i].value;
        }
        console.log(aracYili);
    }

//Birinci Kontrol Bloğu
    if (aracTipi == "motorsiklet") {
        odenecekVergi = 100;
    } else if (aracTipi == "otomobil") {
        odenecekVergi = 200;
    } else if (aracTipi == "kamyonet") {
        odenecekVergi = 300;
    } else if (aracTipi == "kamyon") {
        odenecekVergi = 500;
    } else {
        alert("Lütfen Araç Tipi Seçiniz!");
    }
   

    //İkinci Kontrol Bloğu
    
    if(motorGucu == "999cc"){
        odenecekVergi = odenecekVergi;
    }else if(motorGucu == "1000cc-1600cc"){
        odenecekVergi = odenecekVergi+50;
    }else if(motorGucu == "1601cc-2000cc"){
        odenecekVergi = odenecekVergi+150;
    }else if( motorGucu == "2001cc"){
        odenecekVergi = odenecekVergi+250;
    }else {
        alert("Lütfen Motor Hacmi Seçiniz!");
    }

        //Üçüncü Kontrol Bloğu Yıla Göre İndirim

if(aracYili <= "2010", aracYili>="2000"){
    odenecekVergi = odenecekVergi - odenecekVergi/10;
}

    document.getElementById("sonuc").innerHTML = "Ödemeniz Gereken Vergi Tutarı: " + odenecekVergi;
}



