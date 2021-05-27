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


    } else {
        return
    }
    document.getElementById("demo").innerHTML = txt;
}

