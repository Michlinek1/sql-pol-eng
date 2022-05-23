
var zmienne = ["VARCHAR", "INT", "BOOL", "DATE"]
function zapisz_tabele(){
    var textarea = document.getElementById("textarea").value;
    var linijki = textarea.split(/\r\n|\r|\n/);
    var trzecie_slowo = linijki[0].split(" ");
    var nazwa_tabeli = trzecie_slowo[2];
    var pierwszy_record =  linijki[1].split(" ");
    var pierwszy_record_nazwa = pierwszy_record[0];
    if(!linijki[0].includes("STWÓRZ TABELĘ "+nazwa_tabeli ) || nazwa_tabeli == ""){
        alert("Linijka 1 ma błąd");
    } 
    if(!linijki[1].includes(pierwszy_record_nazwa) || !linijki[1].includes("rozmiar")){
        alert("Linijka 2 ma błąd1");
        alert(pierwszy_record[1]);
    }else if (zmienne.includes(pierwszy_record[1]) == false){
        alert("Linijka 2 ma błąd2");

    }else if (pierwszy_record[1] == "" || pierwszy_record[1] == null){
        alert("Nie podano nazwy dla pierwszego rekordu");
    }else if (pierwszy_record[3] == ' ' || pierwszy_record[3] <= '0'){
        alert("rozmiar nie może się równać 0 ");
    }else{
        if(linijki[0] == "STWÓRZ BAZĘ DANYCH " + nazwa_tabeli){
            var translacja_baza_danych = "CREATE DATABASE " + nazwa_tabeli;
            var blob = new Blob([translacja_baza_danych], {type: "text/plain;charset=utf-8"});
        }else{
            var translacja_table = "CREATE TABLE " + nazwa_tabeli + "(" + "\n" + pierwszy_record_nazwa + " " + pierwszy_record[1] +'(' +pierwszy_record[3] + ')' + "\n" + ")";
            var blob = new Blob([translacja_table], {type: "text/plain;charset=utf-8"});
        }
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = nazwa_tabeli+".sql";
        document.body.appendChild(link);
        link.click();


    }
    
    
}
