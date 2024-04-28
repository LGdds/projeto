function verificacao() {
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    if (senha === '123' && nome == 'gustavo',"maju","gabriel","duda","edu") {
        window.history.back();
    }
    else {
        alert('Valores inválidos')
    }
}