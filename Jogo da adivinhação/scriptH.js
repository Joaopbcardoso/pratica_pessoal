var numberToFind = 0;
var attempts = 0;

function refresh() {
    var element = document.getElementById('bet');
    element.value = '';

    numberToFind = parseInt(Math.random() * 100);
    attempts = 0;

    console.log('The number to find: ' + numberToFind);
}

refresh();

function hardLevel() {
    var element = document.getElementById('bet');
    var bet = element.value;

    if (bet > 100 || bet < 0) {
        document.getElementById("feedback").innerHTML = "Aposta inválida";
        return;
    }

    if (bet > numberToFind) {
        attempts++;
        document.getElementById("feedback").innerHTML = "🚨O número para ser encontrado é MENOR"
    }
    else if (bet < numberToFind) {
        attempts++;
        document.getElementById("feedback").innerHTML = "🚨 O número para ser encontrado é MAIOR"
    }
    else {
        attempts++
        document.getElementById("feedback").innerHTML = "✅ Parabéns você acertou!! depois de " + attempts + " tentativa(s)!"
        refresh();
    }
    if (attempts == 5) {

        document.getElementById("feedback").innerHTML = "🚨 Todas as tentativas foram usadas, tente novamente 🚨"
        refresh();
    }
}