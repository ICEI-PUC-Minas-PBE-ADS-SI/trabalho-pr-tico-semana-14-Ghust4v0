function enviar() {

    const imagens = {
        1: "/assets/Imagens/aindaesotuaqui.jpg",
        2: "assets/Imagens/conclave.png",
        3: "assets/Imagens/centraldobrasil.jpg",
        4: "assets/Imagens/ultimato.jpg",
        5: "assets/Imagens/nós.png",
        6: "assets/Imagens/culpadasestrelas.jpg",
        7: "assets/Imagens/homemaranha.jpg",
        8: "assets/Imagens/O_auto_da_compadecida.jpg"
    };

    // Pega o select do nome do filme
    const nomeSelect = document.getElementById('nome');
    const filmeId = nomeSelect.value;
    const filmeTitulo = nomeSelect.options[nomeSelect.selectedIndex].text;

    // Pega o select da classificação (adicione um id ao select, por ex: id="classe")
    const classeSelect = document.getElementById('classe');
    const classificacao = classeSelect.options[classeSelect.selectedIndex].text;

    // Define a imagem correspondente
    const imagem = imagens[filmeId];

    // Objeto para enviar
    const dados = {
        titulo: filmeTitulo,
        clasificação: classificacao,
        foto: imagem
    };

    // Envia para o backend
    fetch("http://localhost:3000/favoritos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar dados.");
            }
            return response.json();
        })
        .then(data => {
            console.log("Enviado com sucesso:", data);
            // opcional: atualizar a tabela ou dar feedback ao usuário
        })
        .catch(error => {
            console.error("Erro ao enviar:", error);
        });
}

function deleta(id) {
    fetch(`http://localhost:3000/favoritos/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao deletar o filme.");
        }
        console.log("Filme deletado com sucesso.");
        // recarrega a página ou atualiza a tabela
        location.reload();
    })
    .catch(error => {
        console.error("Erro ao deletar:", error);
    });
}

function put(id){
    const imagens = {
        1: "/assets/Imagens/aindaesotuaqui.jpg",
        2: "assets/Imagens/conclave.png",
        3: "assets/Imagens/centraldobrasil.jpg",
        4: "assets/Imagens/ultimato.jpg",
        5: "assets/Imagens/nós.png",
        6: "assets/Imagens/culpadasestrelas.jpg",
        7: "assets/Imagens/homemaranha.jpg",
        8: "assets/Imagens/O_auto_da_compadecida.jpg"
    };

    // Coleta os novos dados do formulário
    const nomeSelect = document.getElementById('nome');
    const filmeId = nomeSelect.value;
    const filmeTitulo = nomeSelect.options[nomeSelect.selectedIndex].text;

    const classeSelect = document.getElementById('classe');
    const classificacao = classeSelect.options[classeSelect.selectedIndex].text;

    const imagem = imagens[filmeId];

    const dadosAtualizados = {
        titulo: filmeTitulo,
        clasificação: classificacao,
        foto: imagem
    };

    fetch(`http://localhost:3000/favoritos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar o filme.");
        }
        return response.json();
    })
    .then(data => {
        console.log("Filme atualizado com sucesso:", data);
        location.reload(); // ou atualizar a tabela manualmente
    })
    .catch(error => {
        console.error("Erro ao atualizar:", error);
    });
}