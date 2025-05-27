
document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const pessoas = document.getElementById('pessoas').value;
    const area = document.getElementById('area').value;

    const li = document.createElement('li');
    li.textContent = `${nome.toUpperCase()} (${pessoas} pessoas - ${cidade.toUpperCase()})`;

    const lista = document.getElementById('listaEspera');
    const titulo = document.createElement('strong');
    titulo.textContent = area === 'interna' ? 'Área Interna' : 'Área Externa';

    if (![...lista.children].some(el => el.textContent.includes(titulo.textContent))) {
        const areaTitulo = document.createElement('li');
        areaTitulo.textContent = titulo.textContent;
        lista.appendChild(areaTitulo);
    }

    lista.appendChild(li);
    document.getElementById('reservaForm').reset();
});
