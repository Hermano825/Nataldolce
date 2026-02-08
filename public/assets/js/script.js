/* ========================================
   NATAL NA DOLCE DIVINO
   Script Principal
======================================== */

// --- 1. CONFIGURAÇÃO DOS PRODUTOS ---
const products = [
    {
        id: 5,
        name: "Bolo Merengue de Natal",
        description: "Três camadas de massa amanteigada, uma camada de doce de leite crocante e uma camada de chocolate.",
        price: 169.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/bolo-merengue-1.png",
        images: [
            "./assets/images/produtos/bolos/bolo-merengue-1.png",
            "./assets/images/produtos/bolos/bolo-merengue-2.png",
            "./assets/images/produtos/bolos/bolo-merengue-3.png",
            "./assets/images/produtos/bolos/bolo-merengue-4.png"
        ],
        variants: [
            { size: "10 fatias", price: 169.00 },
            { size: "15 fatias", price: 249.00 },
            { size: "30 fatias", price: 349.00 }
        ],
        checkoutId: "ID_DA_YAMPI_05"
    },
    {
        id: 7,
        name: "Bolo Red Natal",
        description: "Três camadas de massa amanteigada e duas camadas de recheio de ninho com morango.",
        price: 189.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/bolo-to-go-morango-1.png",
        images: [
            "./assets/images/produtos/bolos/bolo-to-go-morango-1.png",
            "./assets/images/produtos/bolos/bolo-to-go-morango-2.png",
            "./assets/images/produtos/bolos/bolo-to-go-morango-3.png"
        ],
        variants: [
            { size: "8 fatias", price: 189.00 },
            { size: "15 fatias", price: 299.00 },
            { size: "30 fatias", price: 399.00 }
        ],
        checkoutId: "ID_DA_YAMPI_07"
    },
    {
        id: 8,
        name: "Uvas Divinas",
        description: "Uvas selecionadas com cobertura especial natalina, frescor e elegância.",
        price: 49.90,
        category: "Divinos Congelados",
        image: "./assets/images/produtos/divinos/uvas divinas1.png",
        images: [
            "./assets/images/produtos/divinos/uvas divinas1.png",
            "./assets/images/produtos/divinos/uvas divinas2.png"
        ],
        checkoutId: "ID_DA_YAMPI_08"
    },
    {
        id: 9,
        name: "Panetone Presépio",
        description: "Chocotone artesanal, produzido com chocolate belga, Callebaut. 1.900kg",
        price: 459.90,
        category: "Panetones",
        image: "./assets/images/produtos/panetone/panetone presépio1.png",
        images: [
            "./assets/images/produtos/panetone/panetone presépio1.png",
            "./assets/images/produtos/panetone/panetone presépio2.png",
            "./assets/images/produtos/panetone/panetone presépio3.png",
            "./assets/images/produtos/panetone/panetone presépio4.png"
        ],
        checkoutId: "ID_DA_YAMPI_09"
    },
    {
        id: 10,
        name: "Bolo Sagrada Família",
        description: "Duas camadas de massa amanteigada e uma camada de recheio. Opções disponíveis: Doce de leite crocante, chocolate, doce de leite ou ninho. Finalizado com marshmallow.",
        price: 169.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/Bolo sagrada família1.png",
        images: [
            "./assets/images/produtos/bolos/Bolo sagrada família1.png",
            "./assets/images/produtos/bolos/Bolo sagrada família2.png",
            "./assets/images/produtos/bolos/Bolo sagrada família3.png"
        ],
        variants: [
            { size: "8 fatias", price: 169.00 },
            { size: "15 fatias", price: 229.00 },
            { size: "30 fatias", price: 339.00 }
        ],
        checkoutId: "ID_DA_YAMPI_10"
    },
    {
        id: 11,
        name: "Bolo Boneco de Neve",
        description: "Duas camadas de massa amanteigada e uma camada de recheio. Opções disponíveis: Doce de leite crocante, chocolate, doce de leite ou ninho.",
        price: 169.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/bolo to go natal1.png",
        images: [
            "./assets/images/produtos/bolos/bolo to go natal1.png",
            "./assets/images/produtos/bolos/bolo to go natal2.png",
            "./assets/images/produtos/bolos/bolo to go natal3.png"
        ],
        variants: [
            { size: "8 fatias", price: 169.00 },
            { size: "15 fatias", price: 229.00 },
            { size: "30 fatias", price: 339.00 }
        ],
        checkoutId: "ID_DA_YAMPI_11"
    },
    {
        id: 12,
        name: "Box de Natal",
        description: "Sobremesa com camadas de creme de ninho, brownie, geleia de morango e chocolate. 1.400kg",
        price: 277.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/Sobremesa dolce 1.png",
        images: [
            "./assets/images/produtos/bolos/Sobremesa dolce 1.png",
            "./assets/images/produtos/bolos/Sobremesa dolce 2.png",
            "./assets/images/produtos/bolos/Sobremesa dolce 3.png",
            "./assets/images/produtos/bolos/Sobremesa dolce 4.png",
            "./assets/images/produtos/bolos/Sobremesa dolce 5.png"
        ],
        checkoutId: "ID_DA_YAMPI_12"
    },
    {
        id: 13,
        name: "Cesta Natalina",
        description: "Acompanha — espumante Salton, suspiro, biscoito holandês, creme de pistache, marshmallow de Nutella, petit four, alfajor.",
        price: 299.90,
        category: "Cestas",
        image: "./assets/images/produtos/Cesta natalina/Cesta natalina1.png",
        images: [
            "./assets/images/produtos/Cesta natalina/Cesta natalina1.png",
            "./assets/images/produtos/Cesta natalina/Cesta natalina2.png",
            "./assets/images/produtos/Cesta natalina/Cesta natalina3.png"
        ],
        checkoutId: "ID_DA_YAMPI_13"
    },
    {
        id: 14,
        name: "Caixa de Chocolates Natalinos",
        description: "Acompanha 16 unidades de chocolate belga.",
        price: 115.00,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/Lembracinhas/Caixinha 16 chocolates sortidos1.png",
        images: [
            "./assets/images/produtos/Lembracinhas/Caixinha 16 chocolates sortidos1.png",
            "./assets/images/produtos/Lembracinhas/Caixinha 16 chocolates sortidos2.png"
        ],
        checkoutId: "ID_DA_YAMPI_14"
    },
    {
        id: 15,
        name: "Panetone Pistache",
        description: "Panetone recheado de pistache e coberto com creme de pistache. 1.300kg",
        price: 299.00,
        category: "Panetones",
        image: "./assets/images/produtos/panetone/Panetone pistache1.png",
        images: [
            "./assets/images/produtos/panetone/Panetone pistache1.png",
            "./assets/images/produtos/panetone/Panetone pistache2.png",
            "./assets/images/produtos/panetone/Panetone pistache3.png"
        ],
        checkoutId: "ID_DA_YAMPI_15"
    },
    {
        id: 16,
        name: "Box Morangos Natalinos",
        description: "Acompanha 6 morangos natalinos e caixinha de acrílico.",
        price: 139.90,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/Lembracinhas/Box morangos natalinos1.png",
        images: [
            "./assets/images/produtos/Lembracinhas/Box morangos natalinos1.png",
            "./assets/images/produtos/Lembracinhas/Box morangos natalinos2.png",
            "./assets/images/produtos/Lembracinhas/Box morangos natalinos3.png",
            "./assets/images/produtos/Lembracinhas/Box morangos natalinos4.png"
        ],
        checkoutId: "ID_DA_YAMPI_16"
    },
    {
        id: 17,
        name: "Bem Casado na Bola de Acrílico",
        description: "Bem casado com decoração de natal e embalado na bola de acrílico natalina.",
        price: 14.90,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/bolos/Bem casado na bola de acrílico1.png",
        images: [
            "./assets/images/produtos/bolos/Bem casado na bola de acrílico1.png",
            "./assets/images/produtos/bolos/Bem casado na bola de acrílico2.png"
        ],
        checkoutId: "ID_DA_YAMPI_17"
    },
    {
        id: 18,
        name: "Monoporção Presentes de Natal",
        description: "Bolinho individual com decoração natalina. Cobertura de chocolate.",
        price: 39.00,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/Monoproção natal1.png",
        images: [
            "./assets/images/produtos/bolos/Monoproção natal1.png",
            "./assets/images/produtos/bolos/Monoproção natal2.png"
        ],
        checkoutId: "ID_DA_YAMPI_18"
    },
    {
        id: 19,
        name: "Bolo Divino de Natal",
        description: "Três camadas de massa de chocolate e duas camadas de recheio de chocolate. Decorado com seis unidades de Morangos Divinos.",
        price: 219.90,
        category: "Bolos",
        image: "./assets/images/produtos/bolos/CAD01573.jpg",
        images: [
            "./assets/images/produtos/bolos/CAD01573.jpg",
            "./assets/images/produtos/bolos/CAD01581.jpg"
        ],
        variants: [
            { size: "8 fatias", price: 219.90 },
            { size: "15 fatias", price: 369.90 },
            { size: "30 fatias", price: 469.90 }
        ],
        checkoutId: "ID_DA_YAMPI_19"
    },
    {
        id: 20,
        name: "Cupcake Natalino",
        description: "Escolha seu Cupcake favorito: Cupcake Presentinho ou Cupcake Feliz Natal.",
        price: 24.90,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/bolos/Cupcake Presentes1.png",
        images: [
            "./assets/images/produtos/bolos/Cupcake Presentes1.png",
            "./assets/images/produtos/bolos/Cupcake Presentes2.png",
            "./assets/images/produtos/bolos/Cupcake Feliz natal1.png",
            "./assets/images/produtos/bolos/Cupcake Feliz natal2.png"
        ],
        variants: [
            { size: "Cupcake Presentinho", price: 24.90 },
            { size: "Cupcake Feliz Natal", price: 24.90 }
        ],
        checkoutId: "ID_DA_YAMPI_20"
    },
    {
        id: 21,
        name: "Calendário Natalino",
        description: "Peça decorativa que contém 24 unidades de chocolate belga. Segundo a tradição, todos os dias do mês de Dezembro a família abre uma janela e degusta o chocolate.",
        price: 399.00,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/Lembracinhas/Calendário natalino1.png",
        images: [
            "./assets/images/produtos/Lembracinhas/Calendário natalino1.png",
            "./assets/images/produtos/Lembracinhas/Calendário natalino2.png",
            "./assets/images/produtos/Lembracinhas/Calendário natalino3.png"
        ],
        checkoutId: "ID_DA_YAMPI_21"
    },
    {
        id: 22,
        name: "Suspiro Natalino",
        description: "Suspiro natalino de 40g, leve e doce, pronto para presentear.",
        price: 15.90,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/lembracinhas/suspiro natalino1.png",
        images: [
            "./assets/images/produtos/lembracinhas/suspiro natalino1.png"
        ],
        checkoutId: "ID_DA_YAMPI_22"
    },
    {
        id: 23,
        name: "Cartão Natalino",
        description: "Cartão com biscoito holandês coberto de chocolate e espaço para escrever a mensagem.",
        price: 8.90,
        category: "Lembrancinhas",
        image: "./assets/images/produtos/lembracinhas/cartão natalino1.png",
        images: [
            "./assets/images/produtos/lembracinhas/cartão natalino1.png"
        ],
        checkoutId: "ID_DA_YAMPI_23"
    }
];

let cart = [];
let cartOrder = [];

function loadCart() {
    try {
        const saved = localStorage.getItem('dolce_cart');
        cart = saved ? JSON.parse(saved) : [];
    } catch (_) {
        cart = [];
    }
    try {
        const ord = localStorage.getItem('dolce_cart_order');
        cartOrder = ord ? JSON.parse(ord) : [];
    } catch (_) {
        cartOrder = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('dolce_cart', JSON.stringify(cart));
    } catch (_) {}
}

function saveCartOrder() {
    try {
        localStorage.setItem('dolce_cart_order', JSON.stringify(cartOrder));
    } catch (_) {}
}

// --- 2. INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    // Atualiza badges mesmo fora da home
    updateCartUI();
    startTimer();
    lucide.createIcons();
    initLazyImages();
    injectJsonLd();
    // Abas do carrinho
    window.switchCartTab = function(tab) {
        const secCart = document.getElementById('cart-section-carrinho');
        const secDados = document.getElementById('cart-section-dados');
        const tabCarrinho = document.getElementById('tab-carrinho');
        const tabDados = document.getElementById('tab-dados');
        if (!secCart || !secDados || !tabCarrinho || !tabDados) return;
        if (tab === 'dados') {
            secCart.classList.add('hidden');
            secDados.classList.remove('hidden');
            tabCarrinho.classList.remove('bg-white/15');
            tabCarrinho.classList.add('bg-white/5');
            tabDados.classList.add('bg-white/15');
        } else {
            secDados.classList.add('hidden');
            secCart.classList.remove('hidden');
            tabDados.classList.remove('bg-white/15');
            tabDados.classList.add('bg-white/5');
            tabCarrinho.classList.add('bg-white/15');
        }
        lucide.createIcons();
    };
    if (document.getElementById('tab-carrinho')) switchCartTab('carrinho');

    // Se entrou na home com hash #produtos, faz scroll suave após renderizar
    if (window.location.hash === '#produtos') {
        const produtosSection = document.getElementById('produtos');
        if (produtosSection) {
            setTimeout(() => produtosSection.scrollIntoView({ behavior: 'smooth' }), 50);
        }
    }

    // Prefill client info if stored
    try {
        const saved = localStorage.getItem('dolce_client_info');
        if (saved) {
            const data = JSON.parse(saved);
            const n = document.getElementById('client-name');
            const c = document.getElementById('client-cpf');
            const ph = document.getElementById('client-phone');
            const cep = document.getElementById('client-cep');
            const city = document.getElementById('client-city');
            const bairro = document.getElementById('client-bairro');
            const rua = document.getElementById('client-rua');
            const numero = document.getElementById('client-numero');
            const compl = document.getElementById('client-complemento');
            const notes = document.getElementById('client-notes');
            if (n && data.nome) n.value = data.nome;
            if (c && data.cpf) c.value = data.cpf;
            if (ph && data.telefone) ph.value = data.telefone;
            if (cep && data.cep) cep.value = data.cep;
            if (city && data.cidade) city.value = data.cidade;
            if (bairro && data.bairro) bairro.value = data.bairro;
            if (rua && data.rua) rua.value = data.rua;
            if (numero && data.numero) numero.value = data.numero;
            if (compl && data.complemento) compl.value = data.complemento;
            if (notes && data.observacoes) notes.value = data.observacoes;
        }
    } catch(_) {}

    // Masks: CPF and CEP
    const cpfInput = document.getElementById('client-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', () => {
            const v = cpfInput.value.replace(/\D/g,'').slice(0,11);
            let out = v;
            if (v.length > 9) out = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            else if (v.length > 6) out = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
            else if (v.length > 3) out = v.replace(/(\d{3})(\d{0,3})/, '$1.$2');
            cpfInput.value = out;
        });
    }
    const cepInput = document.getElementById('client-cep');
    const cityInput = document.getElementById('client-city');
    const phoneInput = document.getElementById('client-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const digits = phoneInput.value.replace(/\D/g,'').slice(0,11);
            let out = digits;
            if (digits.length >= 11) {
                out = digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (digits.length >= 10) {
                out = digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            } else if (digits.length >= 6) {
                out = digits.replace(/(\d{2})(\d{0,4})/, '($1) $2');
            } else if (digits.length >= 2) {
                out = digits.replace(/(\d{2})(\d{0,3})/, '($1) $2');
            }
            phoneInput.value = out;
        });
    }
    if (cepInput) {
        cepInput.addEventListener('input', () => {
            const v = cepInput.value.replace(/\D/g,'').slice(0,8);
            let out = v;
            if (v.length > 5) out = v.replace(/(\d{5})(\d{0,3})/, '$1-$2');
            else out = v;
            cepInput.value = out;
        });
        // Lookup ViaCEP on blur if length 8 digits
        cepInput.addEventListener('blur', async () => {
            const digits = cepInput.value.replace(/\D/g,'');
            if (digits.length !== 8) return;
            try {
                const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
                const data = await res.json();
                if (!data.erro) {
                    if (cityInput) cityInput.value = `${data.localidade}/${data.uf}`;
                    const bairroInput = document.getElementById('client-bairro');
                    if (bairroInput && data.bairro) bairroInput.value = data.bairro;
                    const ruaInputEl = document.getElementById('client-rua');
                    if (ruaInputEl && data.logradouro) {
                        const current = (ruaInputEl.value || '').trim();
                        // Se vazio, preenche apenas o logradouro
                        if (!current) {
                            ruaInputEl.value = data.logradouro;
                        } else if (!current.toLowerCase().includes(data.logradouro.toLowerCase())) {
                            // Se o usuário já digitou apenas número, mantém número após o nome da rua
                            if (/^\d+[a-zA-Z0-9\s\-\/]*$/.test(current)) {
                                ruaInputEl.value = `${data.logradouro} ${current}`.trim();
                            }
                            // Caso contrário, não sobrescreve para não causar confusão
                        }
                    }
                }
            } catch(_) {}
        });
    }
});

// --- 3. LÓGICA DE UI ---
let filteredProducts = [...products]; // Cópia para filtros
let activeCategory = 'all';

function renderProducts(productsToRender = filteredProducts) {
    const grid = document.getElementById('products-grid');
    if (!grid) {
        return; // Página sem grid de produtos (ex: produto.html)
    }
    
    if (productsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i data-lucide="search-x" class="mx-auto text-gray-400 mb-4" width="64" height="64"></i>
                <h3 class="text-2xl font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
                <p class="text-gray-500 mb-6">Tente buscar por outro termo</p>
                <button onclick="clearSearch()" class="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Ver Todos os Produtos
                </button>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Oculta produtos sem caminho de imagem definido previamente
    const visibleProducts = productsToRender.filter(p => !p.hidden && !!p.image && typeof p.image === 'string' && p.image.trim() !== '');

    grid.innerHTML = visibleProducts.map(product => `
        <div class="product-card bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-stone-100 hover:-translate-y-2 cursor-pointer group" onclick="viewProduct(${product.id})">
            <div class="relative h-64 overflow-hidden shrink-0">
                <div class="absolute inset-0 animate-pulse bg-stone-200" aria-hidden="true"></div>
                <img id="img-${product.id}" data-src="${product.image.replace(/ /g, '%20')}" alt="${product.name}" class="w-full h-full object-cover opacity-0 transition-opacity duration-500 lazy-img" loading="lazy" onerror="this.closest('.product-card')?.remove()">
                <span class="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900 rounded-full shadow-sm">
                    ${product.category}
                </span>
                ${product.images && product.images.length > 1 ? `
                    <div class="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i data-lucide="images" width="14"></i>
                        ${product.images.length}
                    </div>
                ` : ''}
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span class="text-white font-bold text-sm bg-amber-700 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                        Ver Detalhes
                    </span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-bold text-gray-800 leading-tight">${product.name}</h4>
                    <span class="text-amber-900 font-bold bg-amber-50 px-2 py-1 rounded" aria-label="Preço">R$ ${product.price.toFixed(2)}</span>
                </div>
                <p class="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">${product.description}</p>
                
                <button onclick="event.stopPropagation(); addToCart(${product.id})" class="add-to-cart-btn w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-medium py-3 min-h-[44px] rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer mt-auto active:scale-95 shadow-md hover:shadow-lg" aria-label="Adicionar ${product.name} ao carrinho">
                    <i data-lucide="plus" width="18" aria-hidden="true"></i>
                    Adicionar
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
    initLazyImages();
}

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function generateSlug(name) {
    return name
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Remove duplicate hyphens
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const slug = generateSlug(product.name);
        window.location.href = `produto.html?nome=${slug}&id=${productId}`;
    }
}

function executeSearch() {
    // Pega o valor do campo que estiver visível (desktop ou mobile)
    const desktopInput = document.getElementById('search-input-desktop');
    const mobileInput = document.getElementById('search-input-mobile');
    const desktopVisible = desktopInput && desktopInput.offsetParent !== null;
    const searchTerm = desktopVisible && desktopInput ? desktopInput.value : (mobileInput ? mobileInput.value : '');
    
    searchProducts(searchTerm);
    
    // Fecha menu mobile se estiver aberto
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
    }
}

function searchProducts(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const searchInfo = document.getElementById('search-info');
    const searchText = document.getElementById('search-text');
    
    if (term === '') {
        filteredProducts = applyCategoryFilter(products, activeCategory);
        if (searchInfo) searchInfo.classList.add('hidden');
    } else {
        const base = applyCategoryFilter(products, activeCategory);
        filteredProducts = base.filter(product => 
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );
        
        if (searchInfo) searchInfo.classList.remove('hidden');
        if (searchText) searchText.textContent = `${filteredProducts.length} resultado(s) para "${searchTerm}"`;
    }
    
    renderProducts(filteredProducts);
    lucide.createIcons();
    
    // Scroll suave para produtos
    if (term !== '') {
        const produtosSection = document.getElementById('produtos');
        if (produtosSection) produtosSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function clearSearch() {
    const desktopInput = document.getElementById('search-input-desktop');
    const mobileInput = document.getElementById('search-input-mobile');
    if (desktopInput) desktopInput.value = '';
    if (mobileInput) mobileInput.value = '';
    filteredProducts = applyCategoryFilter(products, activeCategory);
    const searchInfo = document.getElementById('search-info');
    if (searchInfo) searchInfo.classList.add('hidden');
    renderProducts(filteredProducts);
    lucide.createIcons();
}

// --- 4. LÓGICA DO CARRINHO ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    
    // Cria chave de grupo (sem variante para produtos da home)
    const groupKey = `${id}`;
    if (!cartOrder.includes(groupKey)) {
        cartOrder.push(groupKey);
        saveCartOrder();
    }
    
    // Meta Pixel: AddToCart
    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', {
            content_name: product.name,
            content_ids: [product.id],
            content_type: 'product',
            value: product.price,
            currency: 'BRL'
        });
    }
    
    // Feedback visual no botão clicado
    const button = event.target.closest('.add-to-cart-btn');
    if(button) {
        button.classList.add('btn-added');
        setTimeout(() => button.classList.remove('btn-added'), 600);
    }
    
    updateCartUI();
    
    // Abre o carrinho automaticamente ao adicionar (feedback visual)
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (modal && panel) {
        if(modal.classList.contains('hidden')) {
            toggleCartModal();
        }
    }
}

// Lazy-loading com IntersectionObserver
function initLazyImages() {
    const images = document.querySelectorAll('img.lazy-img[data-src]');
    if (!images.length) return;
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.addEventListener('load', () => {
                        img.style.opacity = '1';
                        const skeleton = img.parentElement?.querySelector('.animate-pulse.bg-stone-200');
                        if (skeleton) skeleton.remove();
                    }, { once: true });
                }
                obs.unobserve(img);
            }
        });
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    images.forEach(img => io.observe(img));
}

// SEO: injeta JSON-LD de Organização e Lista de Produtos
function injectJsonLd() {
    try {
        const org = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Dolce Divino',
            'url': window.location.origin + window.location.pathname,
            'logo': window.location.origin + '/assets/images/logo.png',
            'sameAs': [
                'https://instagram.com/dolce.divino',
                'https://wa.me/5585988884717'
            ]
        };
        const items = products.filter(p => !p.hidden).map(p => ({
            '@type': 'Product',
            'name': p.name,
            'description': p.description,
            'category': p.category,
            'image': Array.isArray(p.images) && p.images.length ? p.images.map(i => i.replace(/ /g, '%20')) : [ (p.image || '').replace(/ /g, '%20') ],
            'offers': {
                '@type': 'Offer',
                'priceCurrency': 'BRL',
                'price': p.price.toFixed(2),
                'availability': 'https://schema.org/InStock'
            }
        }));
        const itemList = {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': items.map((it, idx) => ({
                '@type': 'ListItem',
                'position': idx + 1,
                'item': it
            }))
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify([org, itemList]);
        document.head.appendChild(script);
    } catch(_) {}
}

function removeFromCartById(productId) {
    // remove uma única instância pelo id
    const idx = cart.findIndex(i => i.id === productId);
    if (idx === -1) return;
    const itemsContainer = document.getElementById('cart-items');
    if (itemsContainer && itemsContainer.children.length) {
        // tenta animar o primeiro card correspondente
        const el = [...itemsContainer.children].find(child => child.dataset.pid == String(productId));
        if (el) {
            el.classList.add('fade-out');
            setTimeout(() => {
                cart.splice(idx, 1);
                saveCart();
                updateCartUI();
            }, 280);
            return;
        }
    }
    cart.splice(idx, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    // Atualiza badges
    const count = cart.length;
    const badges = [document.getElementById('cart-badge'), document.getElementById('mobile-cart-badge')].filter(Boolean);
    const mobileFloat = document.getElementById('mobile-float-btn');

    badges.forEach(b => {
        b.innerText = count;
        b.style.opacity = count > 0 ? '1' : '0';
    });

    if (mobileFloat) {
        if (count > 0) mobileFloat.classList.remove('hidden');
        else mobileFloat.classList.add('hidden');
    }

    // Atualiza Lista no Modal (se existir na página)
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (itemsContainer && totalEl) {
        if (cart.length === 0) {
            itemsContainer.innerHTML = '<div class="text-center text-gray-500 mt-10 flex flex-col items-center"><i data-lucide="shopping-bag" size="48" class="text-gray-300 mb-4"></i>Seu carrinho está vazio 🎄</div>';
            totalEl.innerText = 'R$ 0,00';
        } else {
            // Agrupa por id + variante (se houver) para controle de quantidade
            const groups = new Map();
            cart.forEach(item => {
                // Cria chave única: id + variante (se existir)
                const groupKey = item.variantLabel ? `${item.id}-${item.variantLabel}` : `${item.id}`;
                const g = groups.get(groupKey);
                if (g) { g.qty += 1; }
                else { groups.set(groupKey, { item, qty: 1, groupKey }); }
            });

            // Ordem estável: segue cartOrder e inclui novos ids ao final
            const existingKeys = Array.from(groups.keys());
            const orderedKeys = [];
            cartOrder.forEach(key => { if (groups.has(key)) orderedKeys.push(key); });
            existingKeys.forEach(key => { if (!cartOrder.includes(key)) orderedKeys.push(key); });

            let total = 0;
            const rows = [];
            orderedKeys.forEach(groupKey => {
                const { item, qty } = groups.get(groupKey);
                const lineTotal = item.price * qty;
                total += lineTotal;
                
                // Mostra variante se houver
                const variantLabel = item.variantLabel ? `<span class="text-xs text-amber-700 font-semibold">(${item.variantLabel})</span>` : '';
                
                rows.push(`
                    <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100 animate-fade-in" data-group-key="${groupKey}">
                        <div class="flex items-center gap-3 flex-1">
                            <img src="${(item.image || '').replace(/ /g, '%20')}" class="w-12 h-12 rounded object-cover">
                            <div class="flex-1">
                                <h4 class="text-sm font-bold text-gray-800">${item.name} ${variantLabel}</h4>
                                <span class="text-xs text-gray-500">R$ ${item.price.toFixed(2)} cada</span>
                                <div class="text-xs font-semibold text-amber-800 mt-1">Subtotal: R$ ${lineTotal.toFixed(2)}</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="decreaseItemByKey('${groupKey}')" class="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                                <i data-lucide="minus" size="16"></i>
                            </button>
                            <span class="text-sm font-bold text-gray-700">${qty}</span>
                            <button onclick="increaseItemByKey('${groupKey}')" class="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                                <i data-lucide="plus" size="16"></i>
                            </button>
                            <button onclick="removeGroupByKey('${groupKey}')" class="text-red-500 hover:text-red-700 p-2" title="Remover todos">
                                <i data-lucide="trash-2" size="18"></i>
                            </button>
                        </div>
                    </div>
                `);
            });
            itemsContainer.innerHTML = rows.join('');
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
            totalEl.innerText = `R$ ${total.toFixed(2)}`;
            // Atualiza total na aba de dados também
            const totalDados = document.getElementById('cart-total-dados');
            if (totalDados) totalDados.innerText = `R$ ${total.toFixed(2)}`;
        }
    }
// Controles de quantidade por chave de grupo (id + variante)
function increaseItemByKey(groupKey) {
    // Encontra o primeiro item que corresponde à chave
    const item = cart.find(i => {
        const itemKey = i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`;
        return itemKey === groupKey;
    });
    if (!item) return;
    cart.push({ ...item });
    if (!cartOrder.includes(groupKey)) {
        cartOrder.push(groupKey);
        saveCartOrder();
    }
    saveCart();
    updateCartUI();
}

function decreaseItemByKey(groupKey) {
    // Remove apenas uma unidade do grupo
    const index = cart.findIndex(i => {
        const itemKey = i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`;
        return itemKey === groupKey;
    });
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }
}

function removeGroupByKey(groupKey) {
    // Remove todos os itens do grupo
    cart = cart.filter(i => {
        const itemKey = i.variantLabel ? `${i.id}-${i.variantLabel}` : `${i.id}`;
        return itemKey !== groupKey;
    });
    cartOrder = cartOrder.filter(key => key !== groupKey);
    saveCartOrder();
    saveCart();
    updateCartUI();
}

// Mantém funções antigas para compatibilidade (produtos sem variante)
function increaseItemById(productId) {
    increaseItemByKey(`${productId}`);
}

function decreaseItemById(productId) {
    decreaseItemByKey(`${productId}`);
}

function removeGroupById(productId) {
    removeGroupByKey(`${productId}`);
}

// Expõe funções para uso em atributos onclick
if (typeof window !== 'undefined') {
    window.increaseItemByKey = increaseItemByKey;
    window.decreaseItemByKey = decreaseItemByKey;
    window.removeGroupByKey = removeGroupByKey;
    window.increaseItemById = increaseItemById;
    window.decreaseItemById = decreaseItemById;
    window.removeGroupById = removeGroupById;
}

    saveCart();
    lucide.createIcons();
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (!modal || !panel) return; // Página sem modal
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        // Pequeno delay para animação CSS funcionar
        setTimeout(() => {
            panel.classList.remove('translate-x-full');
        }, 10);
    } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// --- 5. CHECKOUT / INTEGRAÇÃO ---
function finalizarCompra() {
    if (cart.length === 0) return alert("Adicione itens primeiro!");

    // Mini checkout validation
    const nameInput = document.getElementById('client-name');
    const cpfInput = document.getElementById('client-cpf');
    const phoneInput = document.getElementById('client-phone');
    const cepInput = document.getElementById('client-cep');
    const cityInput = document.getElementById('client-city');
    const bairroInput = document.getElementById('client-bairro');
    const ruaInput = document.getElementById('client-rua');
    const numeroInput = document.getElementById('client-numero');
    const complInput = document.getElementById('client-complemento');
    const notesInput = document.getElementById('client-notes');
    const errorEl = document.getElementById('checkout-error');

    const nome = nameInput ? nameInput.value.trim() : '';
    let cpfRaw = cpfInput ? cpfInput.value.trim() : '';
    const phoneRaw = phoneInput ? phoneInput.value.trim() : '';
    const cep = cepInput ? cepInput.value.replace(/\D/g,'') : '';
    const cidade = cityInput ? cityInput.value.trim() : '';
    const bairro = bairroInput ? bairroInput.value.trim() : '';
    const rua = ruaInput ? ruaInput.value.trim() : '';
    const numero = numeroInput ? numeroInput.value.trim() : '';
    const complemento = complInput ? complInput.value.trim() : '';
    const observacoes = notesInput ? notesInput.value.trim() : '';

    const cleanCPF = v => v.replace(/\D/g,'').slice(0,11);
    const formatCPF = v => {
        const c = cleanCPF(v);
        if (c.length !== 11) return v;
        return c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };
    const isValidCPF = v => {
        const c = cleanCPF(v);
        if (!c || c.length !== 11) return false;
        if (/^([0-9])\1{10}$/.test(c)) return false; // todos iguais
        let sum = 0;
        for (let i = 0; i < 9; i++) sum += parseInt(c[i]) * (10 - i);
        let d1 = (sum * 10) % 11; if (d1 === 10) d1 = 0;
        if (d1 !== parseInt(c[9])) return false;
        sum = 0;
        for (let i = 0; i < 10; i++) sum += parseInt(c[i]) * (11 - i);
        let d2 = (sum * 10) % 11; if (d2 === 10) d2 = 0;
        return d2 === parseInt(c[10]);
    };
    if (cpfInput) cpfInput.value = formatCPF(cpfRaw);
    const cpf = cleanCPF(cpfRaw);

    const cleanPhone = v => v.replace(/\D/g,'').slice(0,11);
    const formatPhone = v => {
        const d = cleanPhone(v);
        if (d.length === 11) return d.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        if (d.length === 10) return d.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        return v;
    };
    if (phoneInput) phoneInput.value = formatPhone(phoneRaw);
    const phoneDigits = cleanPhone(phoneRaw);

    // Reset previous error state
    [nameInput, cpfInput, phoneInput, cepInput, cityInput, bairroInput, ruaInput, numeroInput].forEach(el => el && el.classList.remove('border-red-500'));
    if (errorEl) { errorEl.classList.add('hidden'); errorEl.textContent=''; }

    const invalid = [];
    if (!nome) invalid.push(nameInput);
    if (!isValidCPF(cpf)) invalid.push(cpfInput);
    if (!(phoneDigits.length === 10 || phoneDigits.length === 11)) invalid.push(phoneInput);
    if (cep.length !== 8) invalid.push(cepInput);
    if (!cidade) invalid.push(cityInput);
    if (!bairro) invalid.push(bairroInput);
    if (!rua) invalid.push(ruaInput);
    if (!numero) invalid.push(numeroInput);
    if (invalid.length) {
        invalid.forEach(el => el && el.classList.add('border-red-500'));
        if (errorEl) { errorEl.textContent = 'Preencha Nome, CPF (11 dígitos), Telefone (10–11 dígitos) e Endereço completo.'; errorEl.classList.remove('hidden'); }
        return;
    }

    // Persist client info
    try { localStorage.setItem('dolce_client_info', JSON.stringify({ nome, cpf: formatCPF(cpf), telefone: formatPhone(phoneDigits), cep: cepInput ? cepInput.value : '', cidade, bairro, rua, numero, complemento, observacoes })); } catch(_) {}

    // Meta Pixel: InitiateCheckout
    const totalCart = cart.reduce((acc, item) => acc + item.price, 0);
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_ids: cart.map(item => item.id),
            contents: cart.map(item => ({ id: item.id, quantity: 1 })),
            value: totalCart,
            currency: 'BRL',
            num_items: cart.length
        });
    }

    // ============================================================
    // AQUI É ONDE VOCÊ (OU O COPILOT) CONFIGURA A INTEGRAÇÃO
    // ============================================================
    
    // OPÇÃO A: Enviar para um link de Checkout Único (Ex: Carrinho geral da Yampi)
    // Se seu provedor aceita URL com IDs, você pode montá-la aqui.
    // Exemplo fictício: meuhost.com/checkout?ids=1,2,3
    
    /* const ids = cart.map(item => item.checkoutId).join(',');
    const checkoutUrl = `https://seguro.meudominio.com.br/checkout?products=${ids}`;
    window.location.href = checkoutUrl;
    */

    // OPÇÃO B: Se não tiver integração pronta agora, use o WhatsApp como fallback
    // até configurar o Cartpanda/Yampi corretamente.
    
    let message = "Olá! Quero finalizar meu pedido de Natal:\n\n";
    message += `Nome: ${nome}\n`;
    message += `CPF: ${formatCPF(cpf)}\n`;
    message += `Telefone: ${formatPhone(phoneDigits)}\n`;
    message += `CEP: ${cepInput ? cepInput.value : ''}\n`;
    message += `Cidade: ${cidade}\n`;
    message += `Bairro: ${bairro}\n`;
    message += `Rua: ${rua}\n`;
    message += `Número: ${numero}\n`;
    if (complemento) message += `Complemento: ${complemento}\n`;
    if (observacoes) message += `Observações: ${observacoes}\n`;
    message += `\n`;
    cart.forEach(item => {
        const variantInfo = item.variantLabel ? ` (${item.variantLabel})` : '';
        message += `- ${item.name}${variantInfo}: R$ ${item.price.toFixed(2)}\n`;
    });
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    message += `\n*Total: R$ ${total.toFixed(2)}*`;

    // Envia lead para backend (CRM simples)
    const payload = {
        cliente: { nome, cpf: formatCPF(cpf), telefone: formatPhone(phoneDigits), cep: cepInput ? cepInput.value : '', cidade, bairro, rua, numero, complemento, observacoes },
        cart,
        total
    };
    fetch('/api/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(err => console.warn('Falha ao salvar lead no backend', err));
    
    // Meta Pixel: Purchase (conversão)
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', {
            content_ids: cart.map(item => item.id),
            contents: cart.map(item => ({ id: item.id, quantity: 1 })),
            value: total,
            currency: 'BRL',
            num_items: cart.length
        });
    }
    
    const phone = "5585988884717"; // SEU NÚMERO
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Comente a linha abaixo quando configurar a Yampi/Cartpanda
    window.open(url, '_blank'); 
    
    // Aviso para você no console
    console.log("Para integrar Yampi/Cartpanda, edite a função finalizarCompra() no código.");
}

// --- 6. TIMER ---
function startTimer() {
    const targetDate = new Date('2025-12-11T23:59:59');
    setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;
        if (diff > 0) {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const countdown = document.getElementById('countdown');
            if (!countdown) return; // Página sem contador
            countdown.innerHTML = `
                <div class="bg-amber-500 text-amber-950 px-2 py-1 rounded text-base font-bold">${d}d</div>
                <div class="bg-amber-500 text-amber-950 px-2 py-1 rounded text-base font-bold">${h}h</div>
                <div class="bg-amber-500 text-amber-950 px-2 py-1 rounded text-base font-bold">${m}m</div>
            `;
        } else {
            const countdown = document.getElementById('countdown');
            if (countdown) countdown.innerHTML = "Encerrado!";
        }
    }, 1000);
}

// --- Filtro por Categoria ---
function applyCategoryFilter(list, category) {
    if (!category || category === 'all') return [...list];
    return list.filter(p => p.category === category);
}

function filterByCategory(category) {
    activeCategory = category;
    // Respeita termo de busca atual, se houver
    const desktopInput = document.getElementById('search-input-desktop');
    const mobileInput = document.getElementById('search-input-mobile');
    const term = (desktopInput?.value || mobileInput?.value || '').trim();
    if (term) {
        searchProducts(term);
    } else {
        filteredProducts = applyCategoryFilter(products, activeCategory);
        renderProducts(filteredProducts);
        lucide.createIcons();
        const produtosSection = document.getElementById('produtos');
        if (produtosSection) produtosSection.scrollIntoView({ behavior: 'smooth' });
    }
}