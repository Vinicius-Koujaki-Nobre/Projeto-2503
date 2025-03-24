let produtos = [];

document.addEventListener("DOMContentLoaded", () => {
    fetch("../Produtos/produto.json")
        .then(response => response.json())
        .then(data => {
            produtos = data;

            const container = document.getElementById("s2");
            container.innerHTML = ""; // Limpa o container antes de adicionar os produtos

            produtos.forEach((produto, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <div class="wrap-img-card">
                        <img src="${produto.imagem}" alt="${produto.descricao}" width="200px" height="200px">
                    </div>
                    <div class="wrap-info-card">
                        <h3>${produto.descricao}</h3>
                        <button class="cardButton" data-indice="${index}">
                            <span>Adquirir</span><span>&nbsp;R$${produto.preco.toFixed(2)}</span>
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar os produtos:", error));

    // Corrigindo a captura do índice do produto ao clicar no botão
    $("#s2").on("click", ".cardButton", function () {
        const indexDoProduto = $(this).attr("data-indice"); // Alternativa para garantir a captura correta
        if (indexDoProduto !== undefined) {
            const produtoSelecionado = produtos[parseInt(indexDoProduto)];
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(produtoSelecionado);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert("Produto adicionado ao carrinho");
        }
    });
});
<<<<<<< HEAD

function abrirIframe(produto) {
    const iframe = document.getElementById("produtoInfo");

    // Passando os dados para o iframe usando LocalStorage
    localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
    iframe.src = "./iframes/iframe.html";

    document.body.classList.add("blurred");
    document.querySelector(".iframe-container").style.display = "flex"; // Exibe o iframe
}

function fecharIframe() {
    document.body.classList.remove("blurred");
    document.querySelector(".iframe-container").style.display = "none"; // Oculta o iframe

}

=======
>>>>>>> origin/dev
