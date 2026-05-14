// 1. BANCO DE DADOS DOS LIVROS (Lista Completa)
// O campo "imagem" indica o nome exato que o arquivo deve ter dentro da pasta "img"
const livrosCatalogados = [
    { titulo: 'A Candeia Debaixo do Alqueire', autor: 'Pe. Álvaro Calderón', preco: 60.00, imagem: 'img/a-candeia-debaixo-do-alqueire.jpg' },
    { titulo: 'A Igreja, a Reforma e a Civilização', autor: 'Padre Leonel Franca', preco: 50.00, imagem: 'img/a-igreja-a-reforma-e-a-civilizacao.jpg' },
    { titulo: 'A Missa de Sempre', autor: 'Dom Marcel Lefebvre', preco: 40.00, imagem: 'img/a-missa-de-sempre.jpg' },
    { titulo: 'A República Maçônica', autor: 'Editora Santa Cruz', preco: 30.00, imagem: 'img/a-republica-maconica.jpg' },
    { titulo: 'A Revolução Francesa', autor: 'Pierre Gaxotte', preco: 60.00, imagem: 'img/a-revolucao-francesa.jpg' },
    { titulo: 'Anchieta: O Santo do Brasil', autor: 'Charles Sainte-Foy', preco: 30.00, imagem: 'img/anchieta-o-santo-do-brasil.jpg' },
    { titulo: 'As Forças Secretas da Revolução', autor: 'Léon de Poncins', preco: 30.00, imagem: 'img/as-forcas-secretas-da-revolucao.jpg' },
    { titulo: 'As Mais Belas Orações de Santo Afonso', autor: 'Pe. Saint-Omer', preco: 30.00, imagem: 'img/as-mais-belas-oracoes-de-santo-afonso.jpg' },
    { titulo: 'As Sete Palavras de Nosso Senhor na Cruz', autor: 'São Roberto Belarmino', preco: 30.00, imagem: 'img/as-sete-palavras.jpg' },
    { titulo: 'As Três Vias e as Três Conversões', autor: 'Garrigou-Lagrange', preco: 30.00, imagem: 'img/as-tres-vias.jpg' },
    { titulo: 'As Verdades Básicas do Catolicismo', autor: 'Mons. Francisco Olgiati', preco: 30.00, imagem: 'img/as-verdades-basicas-do-catolicismo.jpg' },
    { titulo: 'Box História dos Papas', autor: '3 Volumes - Dom Agostino Saba', preco: 300.00, imagem: 'img/box-historia-dos-papas.jpg' },
    { titulo: 'Brasileiros Heróis da Fé', autor: 'Volumes I e II', preco: 70.00, imagem: 'img/brasileiros-herois-da-fe.jpg' },
    { titulo: 'Catena Aurea', autor: 'Box 4 Vol. - Santo Tomás de Aquino', preco: 350.00, imagem: 'img/catena-aurea.jpg' },
    { titulo: 'Catecismo sobre Nossa Senhora', autor: 'Conjunto 3 volumes', preco: 100.00, imagem: 'img/catecismo-sobre-nossa-senhora.jpg' },
    { titulo: 'Confessai-vos Bem', autor: 'Padre Luigi Chiavarino', preco: 25.00, imagem: 'img/confessai-vos-bem.jpg' },
    { titulo: 'Dicionário Bíblico + Introdução Geral ao A. e Novo Testamento', autor: 'F. Francisco de Jesus M. Sarmento', preco: 135.00, imagem: 'img/dicionario-biblico.jpg' },
    { titulo: 'Discurso sobre a História Universal', autor: 'Jacques Bossuet', preco: 50.00, imagem: 'img/discurso-sobre-a-historia.jpg' },
    { titulo: 'Do Liberalismo à Apostasia', autor: 'Dom Marcel Lefebvre', preco: 40.00, imagem: 'img/do-liberalismo-a-apostasia.jpg' },
    { titulo: 'Dom Vital: O Atanásio Brasileiro', autor: 'Fr. Félix de Olívola', preco: 40.00, imagem: 'img/dom-vital.jpg' },
    { titulo: 'Doutrina Católica', autor: 'Tomos I, II e III - Cônego Boulenger', preco: 150.00, imagem: 'img/doutrina-catolica.jpg' },
    { titulo: 'Fátima e a Conversão da Rússia', autor: 'Pe. José Pedro da Silva', preco: 30.00, imagem: 'img/fatima-e-a-conversao.jpg' },
    { titulo: 'Garcia Moreno: Presidente do Equador', autor: 'Diversos', preco: 35.00, imagem: 'img/garcia-moreno.jpg' },
    { titulo: 'Glórias de Maria', autor: 'Santo Afonso de Ligório', preco: 40.00, imagem: 'img/glorias-de-maria.jpg' },
    { titulo: 'História de Portugal', autor: 'João Ameal', preco: 90.00, imagem: 'img/historia-de-portugal.jpg' },
    { titulo: 'História e Milagres de N. Sra. de Fátima', autor: 'William Walsh', preco: 30.00, imagem: 'img/historia-e-milagres-fatima.jpg' },
    { titulo: 'Imitação de Maria', autor: 'Tomás de Kempis', preco: 30.00, imagem: 'img/imitacao-de-maria.jpg' },
    { titulo: 'Iota Unum', autor: 'Romano Amerio', preco: 70.00, imagem: 'img/iota-unum.jpg' },
    { titulo: 'Liberalismo é Pecado', autor: 'Padre Félix Sardá y Salvany', preco: 30.00, imagem: 'img/liberalismo-e-pecado.jpg' },
    { titulo: 'Livro dos Salmos', autor: 'Editora Santa Cruz', preco: 35.00, imagem: 'img/livro-dos-salmos.jpg' },
    { titulo: 'O Catolicismo no Brasil', autor: 'Padre Júlio Maria', preco: 40.00, imagem: 'img/o-catolicismo-no-brasil.jpg' },
    { titulo: 'O Combate da Pureza', autor: 'Padre Georges Hoornaert', preco: 30.00, imagem: 'img/o-combate-da-pureza.jpg' },
    { titulo: 'O Mês do Rosário', autor: 'Monsenhor Ascânio Brandão', preco: 30.00, imagem: 'img/o-mes-do-rosario.jpg' },
    { titulo: 'O Protestantismo Comparado', autor: 'Jaime Balmes', preco: 50.00, imagem: 'img/o-protestantismo-comparado.jpg' },
    { titulo: 'O que falta para a Conversão da Rússia', autor: 'M. Dias Coelho', preco: 30.00, imagem: 'img/o-que-falta-para-conversao.jpg' },
    { titulo: 'O Reno se lança no Tibre', autor: 'Ralph Wiltgen', preco: 40.00, imagem: 'img/o-reno-se-lanca-no-tibre.jpg' },
    { titulo: 'Os Moços e a Pureza', autor: 'Monsenhor Olgiati', preco: 30.00, imagem: 'img/os-mocos-e-a-pureza.jpg' },
    { titulo: 'Pascendi Dominici Gregis', autor: 'Papa São Pio X', preco: 30.00, imagem: 'img/pascendi.jpg' },
    { titulo: 'Política Cristã', autor: 'Padre Guilherme Devillers', preco: 35.00, imagem: 'img/politica-crista.jpg' },
    { titulo: 'A Presença Real', autor: 'São Pedro Julião Eymard', preco: 35.00, imagem: 'img/a-presenca-real.jpg' },
    { titulo: 'Prometeu: A Religião do Homem', autor: 'Pe. Álvaro Calderón', preco: 45.00, imagem: 'img/prometeu.jpg' },
    { titulo: 'Pureza e Formosura', autor: 'Mons. Tihamér Tóth', preco: 25.00, imagem: 'img/pureza-e-formosura.jpg' },
    { titulo: 'Sou Eu, o Acusado, Quem Vos Devia Julgar', autor: 'Dom Marcel Lefebvre', preco: 40.00, imagem: 'img/sou-eu-o-acusado.jpg' },
    { titulo: 'Tratado da Verdadeira Devoção', autor: 'São Luís Maria Grignion', preco: 30.00, imagem: 'img/tratado-da-verdadeira-devocao.jpg' },
    { titulo: 'Vendeia 1793: Uma Família de "Bandidos"', autor: 'Diversos', preco: 40.00, imagem: 'img/vendeia-1793.jpg' },
    { titulo: 'Virtudes Fundamentais', autor: 'Josef Pieper', preco: 65.00, imagem: 'img/virtudes-fundamentais.jpg' },
    { titulo: 'Dez datas que todo católico deveria conhecer', autor: 'Diane Moczar', preco: 25.00, imagem: 'img/dez-datas.jpg' },
    { titulo: 'Sete Mentiras sobre a Igreja Católica', autor: 'Diane Moczar', preco: 40.00, imagem: 'img/sete-mentiras.jpg' },
    { titulo: 'As Grandes Heresias', autor: 'Hilaire Belloc', preco: 25.00, imagem: 'img/as-grandes-heresias.jpg' },
    { titulo: 'A Prática do Amor a Jesus Cristo', autor: 'Santo Afonso Maria de Ligório', preco: 25.00, imagem: 'img/a-pratica-do-amor.jpg' },
    { titulo: 'Legítima Interpretação da Bíblia', autor: 'Lúcio Navarro', preco: 40.00, imagem: 'img/legitima-interpretacao.jpg' }
];

// Paleta de cores pasteis para o fundo das imagens
const coresFundo = ['#FCE9D8', '#E0EEFF', '#F2F2F2', '#FFF8C6', '#E6FAF1', '#FFF1F5'];

// 2. VARIÁVEIS DO ESTADO
let carrinho = [];

// 3. RENDERIZAÇÃO DOS LIVROS
function renderizarCatalogo(listaDeLivros) {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ''; 

    if (listaDeLivros.length === 0) {
        catalogo.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #888;">Nenhum livro encontrado com esse nome.</p>';
        return;
    }

    listaDeLivros.forEach((livro) => {
        // Encontra o ID real do livro no array principal (para o botão adicionar funcionar mesmo filtrado)
        const indexReal = livrosCatalogados.indexOf(livro);
        const cor = coresFundo[indexReal % coresFundo.length];

        const card = `
            <article class="book-card ${livro.vendido ? 'sold' : ''}">
                <div class="book-cover-wrapper" style="background-color: ${cor};">
                    <img src="${livro.imagem}" alt="Capa: ${livro.titulo}" class="book-cover-img" onerror="this.onerror=null; this.src='https://via.placeholder.com/150x220?text=Sem+Capa';">
                </div>
                <div class="book-info">
                    <h3>${livro.titulo}</h3>
                    <p class="author">${livro.autor}</p>
                    <div class="book-footer">
                        <p class="price">R$ ${livro.preco.toFixed(2).replace('.', ',')}</p>
                        ${
    livro.vendido
    ? `<button class="add-btn">X</button>`
    : `
    <button class="add-btn" onclick="adicionarAoCarrinho(${indexReal})">
        <i class="fas fa-plus"></i>
    </button>
    `
}
                    </div>
                </div>
            </article>
        `;
        catalogo.innerHTML += card;
    });
}

// 4. LÓGICA DE BUSCA
document.getElementById('input-busca').addEventListener('input', (evento) => {
    const termoBusca = evento.target.value.toLowerCase();
    const livrosFiltrados = livrosCatalogados.filter(livro => 
        livro.titulo.toLowerCase().includes(termoBusca) || 
        livro.autor.toLowerCase().includes(termoBusca)
    );
    renderizarCatalogo(livrosFiltrados);
});

// 5. LÓGICA DO CARRINHO
function adicionarAoCarrinho(indexLivro) {
    const livro = livrosCatalogados[indexLivro];
    const itemExistente = carrinho.find(item => item.titulo === livro.titulo);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ 
            titulo: livro.titulo, 
            preco: livro.preco, 
            quantidade: 1 
        });
    }
    
    atualizarCarrinho();
    document.getElementById('menu-carrinho').classList.add('aberto');
}

function removerDoCarrinho(indexCarrinho) {
    carrinho.splice(indexCarrinho, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const contador = document.getElementById('contador-carrinho');
    const spanTotal = document.getElementById('total-carrinho');
    
    lista.innerHTML = '';
    let total = 0;
    let quantidadeTotal = 0;

    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;
        quantidadeTotal += item.quantidade;

        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="item-info">
                <h4>${item.titulo}</h4>
                <p>${item.quantidade}x R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <button class="btn-remover" onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        lista.appendChild(li);
    });

    contador.innerText = quantidadeTotal;
    spanTotal.innerText = total.toFixed(2).replace('.', ',');
}

// 6. CONTROLES DA BARRA LATERAL
document.getElementById('btn-carrinho').addEventListener('click', () => {
    document.getElementById('menu-carrinho').classList.add('aberto');
});

document.getElementById('btn-fechar-carrinho').addEventListener('click', () => {
    document.getElementById('menu-carrinho').classList.remove('aberto');
});

// 7. ENVIAR PARA O WHATSAPP
document.getElementById('btn-finalizar-whatsapp').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Adicione alguns livros primeiro.");
        return;
    }

    let textoMensagem = "Olá! Tenho interesse em adquirir os seguintes livros no seu catálogo:\n\n";
    let valorTotal = 0;

    carrinho.forEach(item => {
        valorTotal += item.preco * item.quantidade;
        textoMensagem += `• ${item.quantidade}x ${item.titulo} (R$ ${item.preco.toFixed(2).replace('.', ',')})\n`;
    });

    textoMensagem += `\n*Total do Pedido: R$ ${valorTotal.toFixed(2).replace('.', ',')}*`;

    // ==========================================
    // SEU NÚMERO AQUI (DDI + DDD + NÚMERO)
    // ==========================================
    const seuNumero = "5515981262487"; 
    
    const url = `https://wa.me/${seuNumero}?text=${encodeURIComponent(textoMensagem)}`;
    window.open(url, '_blank');
});

// 8. INICIA A APLICAÇÃO
renderizarCatalogo(livrosCatalogados);
