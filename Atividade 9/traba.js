let contatos = [];
let indiceAtual = -1;
let editando = false;

function login() {
  const user = document.getElementById('usuario').value;
  const pass = document.getElementById('senha').value;

  if (user === 'admin' && pass === 'admin') {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('cadastro-container').style.display = 'block';
  } else {
    alert('Usuário ou senha inválidos');
  }
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('sobrenome').value = '';
  document.getElementById('endereco').value = '';
  document.getElementById('telefone').value = '';
}

function incluir() {
  limparCampos();
  editando = false;
}

function editar() {
  editando = true;
}

function salvar() {
  const contato = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    endereco: document.getElementById('endereco').value,
    telefone: document.getElementById('telefone').value,
  };

  if (editando && indiceAtual >= 0) {
    contatos[indiceAtual] = contato;
  } else {
    contatos.push(contato);
    indiceAtual = contatos.length - 1;
  }

  alert('Contato salvo com sucesso!');
  exibirContato();
}

function cancelar() {
  if (contatos[indiceAtual]) {
    exibirContato();
  } else {
    limparCampos();
  }
}

function excluir() {
  if (indiceAtual >= 0) {
    contatos.splice(indiceAtual, 1);
    if (indiceAtual >= contatos.length) {
      indiceAtual = contatos.length - 1;
    }
    exibirContato();
  }
}

function exibirContato() {
  if (indiceAtual >= 0 && contatos[indiceAtual]) {
    const c = contatos[indiceAtual];
    document.getElementById('nome').value = c.nome;
    document.getElementById('sobrenome').value = c.sobrenome;
    document.getElementById('endereco').value = c.endereco;
    document.getElementById('telefone').value = c.telefone;
  } else {
    limparCampos();
  }
}

function primeiro() {
  if (contatos.length > 0) {
    indiceAtual = 0;
    exibirContato();
  }
}

function anterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    exibirContato();
  }
}

function proximo() {
  if (indiceAtual < contatos.length - 1) {
    indiceAtual++;
    exibirContato();
  }
}

function ultimo() {
  if (contatos.length > 0) {
    indiceAtual = contatos.length - 1;
    exibirContato();
  }
}