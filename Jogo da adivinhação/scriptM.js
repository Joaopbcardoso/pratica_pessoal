var numberToFind = 0;
var attempts = 0;

function refresh(){
    var element = document.getElementById('bet');
    element.value = '';
    
    numberToFind = parseInt(Math.random() * 100);
    attempts = 0;

    console.log('The number to find: '+numberToFind);
}

refresh();

function mediumLevel(){
    var element = document.getElementById('bet');
    var bet = element.value;

    if(bet > 100 || bet < 0)
    {
        alert('Aposta é inválida');
        return;
    }

    if(bet > numberToFind)
    {
        attempts++;
        alert(' 🚨O número para ser encontrado é MENOR');
    }
    else if(bet < numberToFind)
    {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR')
    }
    else
    {
        attempts++
        alert('✅ Parabéns você acertou!! depois de '+attempts+' tentativa(s)!');
        refresh();
    }
    if(attempts == 12){

        alert("🚨 Todas as tentativas foram usadas, tente novamente 🚨")
        refresh();
    }
}