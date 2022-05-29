

function zapisz(){
    var textarea = document.getElementById("textarea").value;
    var zapiszbaza = document.getElementById("checkbox1");
    if(zapiszbaza.checked && (textarea.length > 18)){
    if(przyciskbaza.checked){
    var translacjawiadomosc = "CREATE DATABASE" + " " + textarea.split(" ")[3];
        var blob = new Blob([translacjawiadomosc], {type: "text/plain;charset=utf-8"});
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = "SQL"+".sql";
        document.body.appendChild(link);
        link.click();
    }if(przycisktabela.checked){
        var translacjawiadomosc = "CREATE TABLE" + " " + textarea.split(" ")[2]  + "\n";
        for(var i = 3; i < textarea.split(" ").length; i++){
            translacjawiadomosc += textarea.split(" ")[i] + " ";

        }
        translacjawiadomosc += "("
        var blob = new Blob([translacjawiadomosc], {type: "text/plain;charset=utf-8"});
        const href = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = "SQL"+".sql";
        document.body.appendChild(link);
        link.click();   
    }
}else{
    if(ReferenceError){
        alert("Wybierz opcje!")
    }else if(textarea.length < 16){
        alert("Wpisz więcej słów!")
    }
    
}
}







function generuj(){
     globalThis.przyciskbaza = document.getElementById("checkbox3");
     globalThis. przycisktabela = document.getElementById("checkbox4");
    globalThis.wiadomoscbaza = "STWÓRZ BAZĘ DANYCH podaj_nazwę_bazy";
    if(przyciskbaza.checked){
        textarea.value = wiadomoscbaza;
    }if(przycisktabela.checked){
        globalThis.numberinput = document.getElementById("number").value;
        globalThis.wiadomosctabela = "STWÓRZ TABELĘ podaj_nazwę_tabeli" + "\n";
        for(var i = 0; i < numberinput; i++){
            wiadomosctabela += "nazwa_kolumny" + " " + "typ_zmiennej"+"(1)" + " "+ "dodatkowe informacje" +  "," + "\n";
        }
        textarea.value = wiadomosctabela;
    }
    
}

