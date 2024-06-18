function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "detalhes.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}

function voltarParaPaginaPrincipal() {
    if (window.confirm("Deseja realmente sair?")) {
      location.href = "index.html"
    }
  }


const filtroElenco = document.getElementById('filtroElenco');
const listaAtletas = document.getElementById('listaAtletas');


async function buscarAtletas(genero) {
    const url = genero === 'all'
        ? 'https://botafogo-atletas.mange.li/2024-1/all'
        : `https://botafogo-atletas.mange.li/2024-1/${genero}`;
       

    const response = await fetch(url);
    const data = await response.json();
    return data;
}


async function exibirListaAtletas() {
    const genero = filtroElenco.value;
    const atletas = await buscarAtletas(genero);

    listaAtletas.innerHTML = ''; 

    atletas.forEach(atleta => {
        const atletaElement = document.createElement('div'); 
        atletaElement.classList.add('atleta'); 

        
        atletaElement.innerHTML = `
            <h2>${atleta.nome}</h2>
            <img src="${atleta.imagem}" alt="${atleta.nome}">
            <p>Saiba mais </p>
        `;

        
        atletaElement.addEventListener('click', () => {
            window.location.href = `descricao-jogadores.html?id=${atleta.id}`;
             
        });

        listaAtletas.appendChild(atletaElement); 
    });
}


exibirListaAtletas();


filtroElenco.addEventListener('change', exibirListaAtletas);






async function buscarDetalhesAtleta(atletaId) {
    const url = `https://botafogo-atletas.mange.li/2024-1/${atletaId}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.status === 200) {
      return data;
    } else {
      throw new Error(`Falha ao buscar detalhes do atleta: ${response.status}`);
    }
  }



  
  
















