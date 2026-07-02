var themeBtn = document.getElementById('themeBtn');
var body = document.body;

function atualizarBotao(tema) {
    if (tema === 'dark') {
        themeBtn.innerText = '🌙';
    } else {
        themeBtn.innerText = '☀️';
    }
}

var temaSalvo = localStorage.getItem('tema');

if (temaSalvo !== null) {
    body.className = temaSalvo;
    atualizarBotao(temaSalvo);
} else {
    body.className = 'dark';
    atualizarBotao('dark');
}

themeBtn.addEventListener('click', function() {
    if (body.classList.contains('dark') == true) {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('tema', 'light');
        atualizarBotao('light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('tema', 'dark');
        atualizarBotao('dark');
    }
});

var btnAbrirForm = document.getElementById('btnAbrirForm');
var formContato = document.getElementById('formContato');

if (btnAbrirForm != null && formContato != null) {
    
    btnAbrirForm.addEventListener('click', function() {
        formContato.style.display = 'block';
        btnAbrirForm.style.display = 'none';
    });

    formContato.addEventListener('submit', function(evento) {
        evento.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var mensagem = document.getElementById('mensagem').value;

        if (nome == "" || email == "" || telefone == "" || mensagem == "") {
            alert('Por favor, preencha todos os campos do formulário.');
            return false;
        }

        if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        alert('Muito obrigado, ' + nome + '! Sua solicitação foi enviada com sucesso.');
        formContato.reset();
    });
}