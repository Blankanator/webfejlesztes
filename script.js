document.getElementById("melyiktyuk").addEventListener ("click", mehetgomb);

function mehetgomb() {

    let multiplier = 100;
    let question = 2;
    let points = 0;

    // Kérdések
    const a1 = document.getElementById("a1").checked;
    const a2 = document.getElementById("a2").checked;
    const a3 = document.getElementById("a3").checked;

    if (a1 == 1) {
        points = points + (question * multiplier);
    }
    if (a2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (a3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const b1 = document.getElementById("b1").checked;
    const b2 = document.getElementById("b2").checked;
    const b3 = document.getElementById("b3").checked;

    if (b1 == 1) {
        points = points + (question * multiplier);
    }
    if (b2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (b3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const c1 = document.getElementById("c1").checked;
    const c2 = document.getElementById("c2").checked;
    const c3 = document.getElementById("c3").checked;

    if (c1 == 1) {
        points = points + (question * multiplier);
    }
    if (c2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (c3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const d1 = document.getElementById("d1").checked;
    const d2 = document.getElementById("d2").checked;
    const d3 = document.getElementById("d3").checked;

    if (d1 == 1) {
        points = points + (question * multiplier);
    }
    if (d2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (d3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const e1 = document.getElementById("e1").checked;
    const e2 = document.getElementById("e2").checked;
    const e3 = document.getElementById("e3").checked;

    if (e1 == 1) {
        points = points + (question * multiplier);
    }
    if (e2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (e3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const f1 = document.getElementById("f1").checked;
    const f2 = document.getElementById("f2").checked;
    const f3 = document.getElementById("f3").checked;

    if (f1 == 1) {
        points = points + (question * multiplier);
    }
    if (f2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (f3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const g1 = document.getElementById("g1").checked;
    const g2 = document.getElementById("g2").checked;
    const g3 = document.getElementById("g3").checked;

    if (g1 == 1) {
        points = points + (question * multiplier);
    }
    if (g2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (g3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };
    question = question + 1;
    multiplier = question * 10;

    const h1 = document.getElementById("h1").checked;
    const h2 = document.getElementById("h2").checked;
    const h3 = document.getElementById("h3").checked;

    if (h1 == 1) {
        points = points + (question * multiplier);
    }
    if (h2 == 1) {
        multiplier = multiplier / 2;
        points = points + (question * multiplier);
    };
    if (h3 == 1) {
        multiplier = multiplier / 5;
        points = points + (question * multiplier);
    };

    

    // Eredmények
    if (points <= 800) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, MEZTELEN CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/naked.jpeg";
    }
    else if (points <= 900) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, ONAGADORI CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/onagadori.jpg";
    }
    else if (points <= 1000) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, AYAM CEMANI CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/ayam.jpg";
    }
    else if (points <= 1300) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, MEZTELEN NYAKÚ CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/nakedneck.jpeg";
    }
    else if (points <= 1600) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, RUMPLESS CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/rumpless.jpg";
    }
    else if (points <= 1900) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, DONG TAO CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/dongtao.png";
    }
    else if (points <= 2100) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, SILKIE CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/silkie.jpg";
    }
    else if (points <= 2500) {
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, TOP HAT lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/tophat.jpg";
    }
    else if (points <= 3000){
        document.getElementById("megoldas").innerHTML = `Ha csirke lennél, BANTAM CSIRKE lennél.`;
        document.getElementById("tyukkep").src = "kepek/quiz/bantam.png";
    }
    //document.getElementById("info").innerHTML = `points = ${points}; question = ${question}; multiplier = ${multiplier}`;
}

