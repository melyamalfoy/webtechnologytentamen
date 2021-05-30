function info() {
    let x = document.getElementById("hiddenInfo");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcounttvs) {
            localStorage.clickcounttvs = Number(localStorage.clickcounttvs) + 1;
            enableResteButton()
        } else {
            localStorage.clickcounttvs = 0;
        }
        document.getElementById("result").innerHTML = localStorage.clickcounttvs;
    } else {
        document.getElementById("result").innerHTML = "Sorry, dit kan niet met jouw browser";
    }
}

function clickCounter2() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            enableResteButton()

        } else {
            localStorage.clickcount = 0;
        }
        document.getElementById("result2").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("result2").innerHTML = "Sorry, dit kan niet met jouw browser";
    }
}

function resetCounter() {
    var txt;
    if (confirm("Alle punten verwijderen?")) {
        txt = "Alle punten verwijderd!";
        localStorage.clear()
        clickCounter2()
        clickCounter()
        document.getElementById("resetCounterButton").disabled = true;


    } else {
        return
    }
    document.getElementById("demo").innerHTML = txt;
}

function enableResteButton() {
    if (localStorage.clickcount || localStorage.clickcounttvs > 0) {
        document.getElementById("resetCounterButton").disabled = false;


    }


}

function validateForm() {
    let approved = (document.querySelector('#voorwaarden:checked') !== null);
    if (!approved) {
        alert('Accepteer onze privacyvoorwaarden');
    }
    return approved;
}


function action() {
    alert('Welkom! \nEr is een bevestigingsmail gestuurd');
}


function filterRole() {
    var hero = $("#hero").find('option:selected').text(); // slat h
    $("#option-container").children().appendTo("#role"); // moves <option> contained in #option-container back to their <select>
    var toMove = $("#role").children("[data-hero!='" + hero + "']"); // selects role elements to move out
    toMove.appendTo("#option-container"); // moves role elements in #option-container
    $("#role").removeAttr("disabled"); // enables select
};


function play(s, c) {
    let newSource = "";
    if (s != "") {
        newSource = s + "?autoplay=1&controls=" + (c ? 1 : 0);
    }
    document.getElementById("player").src = newSource;
}
