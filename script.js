// ==========================================================
// 1. CONTEÚDO HTML DE CADA PÁGINA (STRING TEMPLATE)
// ==========================================================

const pageContent = {
  // HOME PAGE
  home: `
        <section class="hero-section">
            <div class="hero-content">
                <h1>Seus Servidores FiveM Nunca Mais Serão Os Mesmos.</h1>
                <p>Scripts Exclusivos, Mods Inovadores e Suporte Premium para o seu GTA Roleplay.</p>
                <a href="#shop" class="cta-button" data-page="shop">EXPLORAR LOJA AGORA</a>
            </div>
        </section>

        <section class="featured-products-section">
            <h2>🔥 Mais Vendidos da Semana</h2>
            <div class="products-grid">
                <a href="#detail-1" class="product-card" data-page="detail" data-product-id="1">
                    <div class="product-image">[Economia V3]</div>
                    <h3>Advanced Economy System V3</h3>
                    <p class="product-price">R$ 159,90</p>
                    <button class="buy-button" data-action="addToCart" data-product-id="1" data-product-name="Advanced Economy System V3" data-product-price="159.90">ADICIONAR AO CARRINHO</button>
                </a>
                <a href="#detail-2" class="product-card" data-page="detail" data-product-id="2">
                    <div class="product-image">[Carro Exclusivo]</div>
                    <h3>Mod Pack: Super Sportives</h3>
                    <p class="product-price">R$ 99,90</p>
                    <button class="buy-button" data-action="addToCart" data-product-id="2" data-product-name="Mod Pack: Super Sportives" data-product-price="99.90">ADICIONAR AO CARRINHO</button>
                </a>
                <a href="#detail-3" class="product-card" data-page="detail" data-product-id="3">
                    <div class="product-image">[Job Mecânico]</div>
                    <h3>Job: Mecânico Interativo</h3>
                    <p class="product-price">R$ 120,00</p>
                    <button class="buy-button" data-action="addToCart" data-product-id="3" data-product-name="Job: Mecânico Interativo" data-product-price="120.00">ADICIONAR AO CARRINHO</button>
                </a>
            </div>
            <a href="#shop" class="view-all-button" data-page="shop">VER TODO O CATÁLOGO</a>
        </section>

        <section class="advantages-section">
            <h2>🛠️ Por Que Escolher a Zito Store?</h2>
            <div class="advantages-grid">
                <div class="advantage-item">
                    <span class="icon">✅</span>
                    <h3>Código Otimizado</h3>
                    <p>Performance máxima para o seu servidor, sem quedas de FPS.</p>
                </div>
                <div class="advantage-item">
                    <span class="icon">🔒</span>
                    <h3>Licenciamento Seguro</h3>
                    <p>Sistema de licenças exclusivo para proteger seu investimento.</p>
                </div>
                <div class="advantage-item">
                    <span class="icon">💬</span>
                    <h3>Suporte Dedicado</h3>
                    <p>Ajuda rápida e eficiente via Discord para qualquer problema.</p>
                </div>
            </div>
        </section>
    `,

  // SHOP PAGE (CATÁLOGO)
  shop: `
        <div class="shop-container">
            <aside class="sidebar">
                <h3>🔍 Filtros</h3>
                <div class="filter-group">
                    <h4>Categoria</h4>
                    <label><input type="checkbox"> Scripts de Emprego</label>
                    <label><input type="checkbox"> Economia & HUD</label>
                    <label><input type="checkbox"> MLOs & Mapas</label>
                    <label><input type="checkbox"> Carros & Mods</label>
                </div>
                <button class="apply-filters cta-button">Aplicar Filtros</button>
            </aside>

            <section class="catalog">
                <h1>Todos os Scripts e Mods</h1>
                <p class="results-count">Mostrando 12 de 45 resultados.</p>
                
                <div class="product-list-grid">
                    <a href="#detail-1" class="product-card product-list-item" data-page="detail" data-product-id="1">
                        <div class="product-image">[Police V2]</div>
                        <h3>Advanced Police Job V2</h3>
                        <p class="product-price">R$ 180,00</p>
                        <button class="buy-button" data-action="addToCart" data-product-id="1" data-product-name="Advanced Police Job V2" data-product-price="180.00">ADICIONAR AO CARRINHO</button>
                    </a>
                    <a href="#detail-4" class="product-card product-list-item" data-page="detail" data-product-id="4">
                        <div class="product-image">[HUD Neon]</div>
                        <h3>HUD Neon Custom</h3>
                        <p class="product-price">R$ 55,00</p>
                        <button class="buy-button" data-action="addToCart" data-product-id="4" data-product-name="HUD Neon Custom" data-product-price="55.00">ADICIONAR AO CARRINHO</button>
                    </a>
                    <a href="#detail-5" class="product-card product-list-item" data-page="detail" data-product-id="5">
                        <div class="product-image">[MLO Favela]</div>
                        <h3>MLO Complexo da Favela</h3>
                        <p class="product-price">R$ 320,00</p>
                        <button class="buy-button" data-action="addToCart" data-product-id="5" data-product-name="MLO Complexo da Favela" data-product-price="320.00">ADICIONAR AO CARRINHO</button>
                    </a>
                    <a href="#detail-6" class="product-card product-list-item" data-page="detail" data-product-id="6">
                        <div class="product-image">[Script Banco]</div>
                        <h3>Sistema de Banco Avançado</h3>
                        <p class="product-price">R$ 210,00</p>
                        <button class="buy-button" data-action="addToCart" data-product-id="6" data-product-name="Sistema de Banco Avançado" data-product-price="210.00">ADICIONAR AO CARRINHO</button>
                    </a>
                </div>
                
                <div class="pagination">
                    <a href="#">&laquo; Anterior</a>
                    <a href="#" class="active-page">1</a>
                    <a href="#">2</a>
                    <a href="#">Próximo &raquo;</a>
                </div>
            </section>
        </div>
    `,

  // PRODUCT DETAIL PAGE (RECEBE O ID PARA SIMULAR DIFERENTES PRODUTOS)
  detail: (productId) => `
        <div class="product-detail-container">
            <div class="product-media">
                <img src="placeholder-police-job.jpg" alt="Demonstração do Produto ${productId}" class="main-image">
                <div class="gallery-thumbs">
                    <div class="thumb active">Screen 1</div>
                    <div class="thumb">Screen 2</div>
                </div>
            </div>

            <div class="product-info">
                <p class="breadcrumb"><a href="#shop" data-page="shop">Loja</a> > Scripts de Emprego</p>
                <h1>${
                  productId === "1"
                    ? "Advanced Police Job V2"
                    : "Produto de Exemplo ID: " + productId
                }</h1>
                <p class="product-short-description">O script de polícia mais completo e otimizado do mercado. Inclui sistema de algemas avançado, radar e integração total com esx/qbcore.</p>

                <div class="price-block">
                    <span class="price-label">Preço:</span>
                    <span class="detail-price">R$ 180,00</span>
                </div>

                <div class="purchase-options">
                    <button class="cta-button big-cta" data-action="addToCart" data-product-id="${productId}" data-product-name="${
    productId === "1"
      ? "Advanced Police Job V2"
      : "Produto de Exemplo ID: " + productId
  }" data-product-price="180.00">ADICIONAR AO CARRINHO</button>
                    <div class="guarantee">✅ Otimização garantida. Suporte 24h.</div>
                </div>
                
                <div class="tabs">
                    <button class="tab-button active">Descrição Detalhada</button>
                    <button class="tab-button">Requisitos Técnicos</button>
                </div>

                <div class="tab-content active-content">
                    <h3>Recursos Incluídos</h3>
                    <ul>
                        <li>Sistema de Multas e Batalhões personalizáveis.</li>
                        <li>Menus de interação (Policial-Cidadão).</li>
                        <li>Baixo consumo de recursos (0.01ms).</li>
                    </ul>
                </div>
            </div>
        </div>

        <section class="related-products-section">
            <h2>Scripts Relacionados</h2>
            <div class="products-grid">
                <a href="#detail-6" class="product-card" data-page="detail" data-product-id="6">Job de Médico</a>
                <a href="#detail-7" class="product-card" data-page="detail" data-product-id="7">Central de Motos</a>
                <a href="#detail-8" class="product-card" data-page="detail" data-product-id="8">MLO Garage Premium</a>
            </div>
        </section>
    `,

  // SUPPORT PAGE (ATUALIZADA COM O LINK DO DISCORD E SEU ID)
  support: `
        <section class="support-section" style="padding: 4rem 5%; text-align: center;">
            <h1 style="color: var(--color-primary);">Central de Suporte</h1>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Encontre respostas ou abra um ticket de suporte.</p>
            <div style="background-color: var(--color-header-bg); padding: 2rem; border-radius: 8px;">
                <h3 style="margin-bottom: 0.5rem;">Precisa de Ajuda Imediata?</h3>
                <p style="margin-bottom: 1.5rem; color: var(--color-text-medium);">Nosso suporte é feito exclusivamente pelo Discord para garantir agilidade.</p>
                
                <a href="https://discord.gg/aE4hgbh9BW" target="_blank" class="cta-button">ENTRAR NO DISCORD</a>

                <p style="margin-top: 1.5rem; color: var(--color-text-medium); font-size: 0.9rem;">
                    Seu ID de Usuário (para contato): 433652802921955340
                </p>
            </div>
        </section>
    `
};

// ==========================================================
// 2. VARIÁVEIS DO DOM E CARRINHO
// ==========================================================

const appContent = document.getElementById("app-content");
const navLinks = document.querySelectorAll(".nav-link");
const cartCountElement = document.querySelector(".cart-btn"); // Elemento para exibir a contagem do carrinho

// Variável para armazenar os itens do carrinho (usa localStorage para persistência)
let cartItems = JSON.parse(localStorage.getItem("zitoStoreCart")) || [];

// Variáveis e Event Listeners para o Modal de Login
const loginModal = document.getElementById("loginModal");
const userIconButton = document.querySelector(".header #userIcon"); // O ícone de usuário
const closeButton = loginModal
  ? loginModal.querySelector(".close-button")
  : null; // Verifica se o modal existe

if (userIconButton) {
  userIconButton.addEventListener("click", () => {
    if (loginModal) {
      loginModal.style.display = "flex"; // Exibe o modal
    }
  });
}

if (closeButton) {
  closeButton.addEventListener("click", () => {
    loginModal.style.display = "none"; // Esconde o modal
  });

  // Fechar o modal se clicar fora dele
  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
}

// ==========================================================
// 3. FUNÇÕES DE CARRINHO
// ==========================================================

/**
 * Atualiza a contagem de itens no ícone do carrinho.
 */
function updateCartCount() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountElement) {
    cartCountElement.innerHTML = `🛒 (${totalItems})`;
  }
}

/**
 * Adiciona um produto ao carrinho.
 * @param {object} product - Objeto com id, name e price do produto.
 */
function addToCart(product) {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("zitoStoreCart", JSON.stringify(cartItems)); // Salva no localStorage
  updateCartCount();
  // Exibe notificação (pode ser substituída por um Toast/Pop-up mais bonito)
  alert(`"${product.name}" adicionado ao carrinho!`);
}

// ==========================================================
// 4. FUNÇÕES DE NAVEGAÇÃO SPA
// ==========================================================

/**
 * Renderiza o conteúdo da página principal.
 * @param {string} page - O identificador da página ('home', 'shop', 'detail', etc.).
 * @param {string | null} productId - O ID do produto, se for uma página de detalhes.
 */
function renderContent(page, productId = null) {
  let content;

  // 1. Determina o conteúdo a ser renderizado
  if (page === "detail" && productId) {
    content = pageContent.detail(productId);
  } else {
    content = pageContent[page] || pageContent.home;
  }

  // 2. Injeta o conteúdo no MAIN
  appContent.innerHTML = content;

  // 3. Atualiza o estado da navegação (link ativo)
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      link.dataset.page === page ||
      (page === "detail" && link.dataset.page === "shop")
    ) {
      link.classList.add("active");
    }
  });

  // 4. Atualiza a URL (SPA)
  history.pushState(null, "", `#${page}${productId ? "-" + productId : ""}`);
}

// ==========================================================
// 5. EVENT HANDLERS GLOBAIS
// ==========================================================

document.addEventListener("click", (event) => {
  const target = event.target;

  // Handler para links de navegação (SPA)
  const navTarget = target.closest("[data-page]");
  if (navTarget) {
    event.preventDefault();

    const page = navTarget.dataset.page;
    const productId = navTarget.dataset.productId;

    if (page === "detail" && productId) {
      renderContent("detail", productId);
    } else {
      renderContent(page);
    }
    window.scrollTo(0, 0);
    return;
  }

  // Handler para botões de adicionar ao carrinho
  if (
    target.dataset.action === "addToCart" ||
    target.closest('[data-action="addToCart"]')
  ) {
    event.preventDefault();

    // Pega os dados do botão mais próximo com data-action="addToCart"
    const button = target.closest('[data-action="addToCart"]');
    if (button) {
      const product = {
        id: button.dataset.productId,
        name: button.dataset.productName,
        price: parseFloat(button.dataset.productPrice)
      };
      addToCart(product);
    }
    return;
  }

  // Handler para o botão de login com Discord (Simulação de OAuth)
  if (
    target.classList.contains("discord-btn") ||
    target.closest(".discord-btn")
  ) {
    alert(
      "Simulando o redirecionamento para o Discord! O Backend iniciaria o fluxo OAuth usando o CLIENT_ID: 1131428330646798408"
    );
    // Em um sistema real, o código redirecionaria:
    // window.location.href = '/api/auth/discord/login';
  }
});

// ==========================================================
// 6. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================================

function initializePage() {
  // Carrega a página correta baseada no hash da URL
  const hash = window.location.hash.substring(1);
  let pageToLoad = "home";
  let productId = null;

  if (hash) {
    const parts = hash.split("-");
    pageToLoad = parts[0];
    productId = parts[1];
  }

  renderContent(pageToLoad, productId);
  updateCartCount(); // Carrega a contagem inicial do carrinho
}

// Inicia a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initializePage);