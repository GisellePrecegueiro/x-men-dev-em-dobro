//1-Cursor passar em cima do personage, ma lista, deve selecionar.
//-pegar o personagem no JS para poder verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll ('.personagem');

//-Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener ('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        

        //-Verificar se o pesonagem esta selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add ('selecionado');

        //2-quando passar o mouse em coma o personagem na lista, trocar a imagem, o nome e a descrição
        //-pegar o elemento do personagem grande para adicionar as informações
        alterarImagemPersonagemSelecionado(personagem);

        //3-alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);
        
        //4-alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //-alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

