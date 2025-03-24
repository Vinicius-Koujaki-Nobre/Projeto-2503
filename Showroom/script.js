document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".iframe-container").style.display = "none"; // Esconde o iframe ao carregar

    fetch("../Produtos/produto.json")
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById("s2");

            produtos.forEach(produto => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <div class="wrap-img-card">
                        <img src="${produto.imagem}" alt="${produto.descricao}" width="200px" height="200px">
                    </div>
                    <div class="wrap-info-card">
                        <h3>${produto.descricao}</h3>
                        <button class="cardButton" onclick='abrirIframe(${JSON.stringify(produto)})'>
                            <span>Adquirir</span><span>&nbsp;R$${produto.preco.toFixed(2)}</span>
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar os produtos:", error));
});

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

