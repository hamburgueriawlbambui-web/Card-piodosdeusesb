// ===== CONFIG =====
const WHATSAPP_NUMBER = "5537998655709"; // formato: 55 + DDD + número
const DELIVERY_FEE = 3.00; // taxa de entrega

// ===== MENU DATA =====
const MENU = {
  hamburgueres: [
    { id: "h-eros", name: "Eros", desc: "Hambúrguer artesanal suculento 140g, pão médio tradicional, bacon crocante, mussarela derretida, molho cheddar cremoso e molho secreto da casa.", price: 25.00, img: "img-eros.jpg" },
    { id: "h-hercules", name: "Hércules", desc: "Hambúrguer artesanal suculento 140g, pão médio tradicional (sem gergelim), bacon crocante, mussarela derretida, alface fresca, tomate fatiado, molho rosé cremoso, molho barbecue defumado e molho secreto da casa.", price: 30.00, img: "img-hercules.jpg" },
    { id: "h-atena", name: "Atena", desc: "Hambúrguer artesanal suculento 140g, pão de brioche macio, cebola na chapa caramelizada, mussarela derretida, cheddar em fatia, anel de cebola empanado crocante, molho barbecue defumado e molho especial da casa.", price: 37.00, img: "img-atena.jpg" },
    { id: "h-montado", name: "Montado", desc: "Crie seu próprio hambúrguer artesanal.", price: 3.00, img: "img-montado.svg" },
    { id: "h-apolo", name: "Apolo", desc: "Duplo Apolo (280g de carne artesanal): 2 hambúrgueres 140g suculentos, 2 fatias de mussarela derretida, bacon crocante, catupiry original cremoso, cream cheese, ovo frito, molho cheddar cremoso e molho secreto da casa.", price: 45.00, img: "img-apolo.jpg" },
    { id: "h-zeus", name: "Zeus", desc: "Hambúrguer artesanal suculento 140g, pão com gergelim tostado, bacon crocante, anéis de cebola empanados, tomate fresco, alface crocante, catupiry original cremoso, molho secreto da casa, molho cheddar derretido e molho barbecue. Acompanha batata frita.", price: 40.00, img: "img-zeus.jpg" },
    { id: "h-invictus", name: "Invictus", desc: "Hambúrguer artesanal suculento 140g, pão tradicional, ovo frito, bacon crocante, mussarela derretida, tomate fresco, alface crocante, catupiry original cremoso, molho secreto da casa e molho barbecue defumado.", price: 35.00, img: "img-invictus.jpg" },
  ],
  sobremesas: [
    { id: "s-afrodite", name: "Afrodite", desc: "A sobremesa do Olimpo: pão de brioche tostado, recheado com Nutella cremosa, morangos frescos selecionados, Oreo crocante e uma chuva de leite Ninho.", price: 25.00, img: "img-afrodite.jpg" },
  ],
  porcoes: [
    { id: "p-batata-cheddar-bacon", name: "Batata Cheddar e Bacon", desc: "Porção batata frita com cheddar e bacon.", price: 35.00, img: "img-batata-cheddar-bacon.jpg" },
    { id: "p-anel-cebola", name: "Porção Anel de Cebola", desc: "Porção anel de cebola.", price: 20.00 },
  ],
  bebidas: [
    { id: "b-h2oh", name: "H2oH Limoneto 500ml", desc: "H2OH Limoneto 500 ml.", price: 8.00 },
    { id: "b-coca-zero-lata", name: "Coca-Cola Zero Lata", desc: "Lata 350ml.", price: 7.00 },
    { id: "b-coca-2l-zero", name: "Coca-Cola 2L Zero", desc: "Garrafa 2L.", price: 15.00 },
    { id: "b-coca-2l", name: "Coca-Cola 2L", desc: "Garrafa 2L.", price: 15.00 },
    { id: "b-guarana-1l", name: "Guaraná Antártica 1L", desc: "Garrafa 1L.", price: 10.00 },
    { id: "b-coca-1l", name: "Coca-Cola 1L", desc: "Garrafa 1L.", price: 10.00 },
    { id: "b-coca-lata", name: "Coca-Cola Lata", desc: "Lata 350ml.", price: 7.00 },
    { id: "b-antartica-2l", name: "Antártica 2L", desc: "Garrafa 2L.", price: 13.00 },
    { id: "b-guarana-lata", name: "Guaraná Antártica Lata", desc: "Lata 350ml.", price: 7.00 },
  ],
  combos: [
    { id: "c-combo-atena-hercules", name: "Combo Atena & Hércules", desc: "1 Hambúrguer Atena, 1 Hambúrguer Hércules, 1 Porção batata com bacon e cheddar, 1 Porção de anel de cebola, 2 Fini.", price: 95.00, img: "img-combo95.jpg" },
    { id: "c-combo-eros", name: "Combo 3 Eros", desc: "3 Eros, porção de batata frita, porção de nuggets, porção de anel de cebola.", price: 115.00, img: "img-combo115.jpg" },
  ],
};

// ===== ADICIONAIS (apenas para hambúrgueres) =====
const ADDONS = [
  { id: "a-hamburguer-artesanal", name: "Hambúrguer Artesanal", price: 10.00 },
  { id: "a-bacon", name: "Bacon Crocante", price: 4.00 },
  { id: "a-cheddar-fatiado", name: "Cheddar Fatiado", price: 4.00 },
  { id: "a-cheddar-cremoso", name: "Cheddar Cremoso", price: 4.00 },
  { id: "a-mussarela", name: "Mussarela", price: 4.00 },
  { id: "a-cream-cheese", name: "Cream Cheese", price: 4.00 },
  { id: "a-molho-barbecue", name: "Molho Barbecue", price: 4.00 },
  { id: "a-anel-cebola", name: "Anel de Cebola", price: 4.00 },
  { id: "a-batata-frita", name: "Batata Frita", price: 4.00 },
  { id: "a-ovo", name: "Ovo", price: 3.00 },
  { id: "a-salada", name: "Salada (alface, tomate)", price: 2.50 },
  { id: "a-pao-tradicional", name: "Pão Tradicional", price: 2.00 },
  { id: "a-pao-gergelim", name: "Pão com Gergelim", price: 2.00 },
  { id: "a-pao-brioche", name: "Pão Brioche", price: 2.50 },
];

const money = (v) => "R$ " + v.toFixed(2).replace(".", ",");

// ===== CART STATE =====
// cart is an array of lines: { lineId, item, qty, addons: [{addon, qty}] }
let cart = [];
let addonSelection = {}; // addonId -> qty, used while the modal is open
let currentModalItem = null;

function loadCart(){
  try{
    const raw = localStorage.getItem("wl_cart_v2");
    if(raw) cart = JSON.parse(raw);
  }catch(e){ cart = []; }
}
function saveCart(){
  try{ localStorage.setItem("wl_cart_v2", JSON.stringify(cart)); }catch(e){}
}

function findItem(id){
  for(const cat of Object.values(MENU)){
    const found = cat.find(i => i.id === id);
    if(found) return found;
  }
  return null;
}
function findAddon(id){
  return ADDONS.find(a => a.id === id) || null;
}

function lineUnitPrice(line){
  const addonsTotal = (line.addons || []).reduce((s, a) => s + a.addon.price * a.qty, 0);
  return line.item.price + addonsTotal;
}
function lineTotalPrice(line){
  return lineUnitPrice(line) * line.qty;
}

// Simple items (no addons): grouped into one line by item id
function addSimpleToCart(id){
  const item = findItem(id);
  if(!item) return;
  const existing = cart.find(l => l.item.id === id && (!l.addons || l.addons.length === 0));
  if(existing){
    existing.qty += 1;
  }else{
    cart.push({ lineId: id, item, qty: 1, addons: [] });
  }
  saveCart();
  renderCart();
  renderGrids();
  showToast(`${item.name} adicionado`);
}

function changeQty(lineId, delta){
  const line = cart.find(l => l.lineId === lineId);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0){
    cart = cart.filter(l => l.lineId !== lineId);
  }
  saveCart();
  renderCart();
  renderGrids();
}

function removeFromCart(lineId){
  cart = cart.filter(l => l.lineId !== lineId);
  saveCart();
  renderCart();
}

function cartCount(){
  return cart.reduce((sum, l) => sum + l.qty, 0);
}
function cartSubtotal(){
  return cart.reduce((sum, l) => sum + lineTotalPrice(l), 0);
}
function cartTotal(){
  const items = cartSubtotal();
  return items > 0 ? items + DELIVERY_FEE : 0;
}

// ===== ADDON MODAL (para hambúrgueres) =====
function openAddonModal(itemId){
  const item = findItem(itemId);
  if(!item) return;
  currentModalItem = item;
  addonSelection = {};

  document.getElementById("addonModalPhoto").src = item.img || "";
  document.getElementById("addonModalPhoto").style.display = item.img ? "block" : "none";
  document.getElementById("addonModalName").textContent = item.name;
  document.getElementById("addonModalDesc").textContent = item.desc;

  renderAddonList();
  updateAddonModalTotal();

  document.getElementById("addonModal").classList.add("open");
  document.getElementById("addonOverlay").classList.add("open");
}

function closeAddonModal(){
  document.getElementById("addonModal").classList.remove("open");
  document.getElementById("addonOverlay").classList.remove("open");
  currentModalItem = null;
}

function renderAddonList(){
  const el = document.getElementById("addonList");
  el.innerHTML = ADDONS.map(a => {
    const qty = addonSelection[a.id] || 0;
    return `
      <div class="addon-row">
        <div class="addon-info">
          <span class="addon-name">${a.name}</span>
          <span class="addon-price">+ ${money(a.price)}</span>
        </div>
        <div class="qty-row">
          <button onclick="addonQtyChange('${a.id}', -1)" aria-label="Diminuir">−</button>
          <span>${qty}</span>
          <button onclick="addonQtyChange('${a.id}', 1)" aria-label="Aumentar">+</button>
        </div>
      </div>`;
  }).join("");
}

function addonQtyChange(addonId, delta){
  const current = addonSelection[addonId] || 0;
  const next = Math.max(0, current + delta);
  if(next === 0){
    delete addonSelection[addonId];
  }else{
    addonSelection[addonId] = next;
  }
  renderAddonList();
  updateAddonModalTotal();
}

function updateAddonModalTotal(){
  if(!currentModalItem) return;
  const addonsTotal = Object.entries(addonSelection).reduce((sum, [id, qty]) => {
    const a = findAddon(id);
    return sum + (a ? a.price * qty : 0);
  }, 0);
  document.getElementById("addonModalTotal").textContent = money(currentModalItem.price + addonsTotal);
}

function confirmAddCustomItem(){
  if(!currentModalItem) return;
  const addons = Object.entries(addonSelection).map(([id, qty]) => ({ addon: findAddon(id), qty }));
  const lineId = `${currentModalItem.id}-${Date.now()}`;
  cart.push({ lineId, item: currentModalItem, qty: 1, addons });
  saveCart();
  renderCart();
  showToast(`${currentModalItem.name} adicionado`);
  closeAddonModal();
}

// ===== RENDER MENU =====
function renderGrids(){
  renderGrid("grid-hamburgueres", MENU.hamburgueres, true);
  renderGrid("grid-porcoes", MENU.porcoes, false);
  renderGrid("grid-bebidas", MENU.bebidas, false);
  renderGrid("grid-combos", MENU.combos, false);
  renderGrid("grid-sobremesas", MENU.sobremesas, false);
}

function renderGrid(elId, items, withAddons){
  const el = document.getElementById(elId);
  el.innerHTML = items.map(item => {
    let footer;
    if(withAddons){
      footer = `<button class="add-btn" onclick="openAddonModal('${item.id}')" aria-label="Adicionar ${item.name}">+</button>`;
    }else{
      const line = cart.find(l => l.item.id === item.id && (!l.addons || l.addons.length === 0));
      footer = line
        ? `<div class="qty-row">
             <button onclick="changeQty('${line.lineId}', -1)" aria-label="Diminuir">−</button>
             <span>${line.qty}</span>
             <button onclick="changeQty('${line.lineId}', 1)" aria-label="Aumentar">+</button>
           </div>`
        : `<button class="add-btn" onclick="addSimpleToCart('${item.id}')" aria-label="Adicionar ${item.name}">+</button>`;
    }

    return `
      <div class="item-card">
        ${item.img ? `<img src="${item.img}" alt="${item.name}" class="item-photo" loading="lazy">` : ""}
        <p class="item-name">${item.name}</p>
        <p class="item-desc">${item.desc}</p>
        <div class="item-footer">
          <span class="item-price">${money(item.price)}</span>
          ${footer}
        </div>
      </div>`;
  }).join("");
}

// ===== RENDER CART DRAWER =====
function renderCart(){
  const count = cartCount();
  document.getElementById("cartCountTop").textContent = count;
  document.getElementById("cartCountFab").textContent = count;
  document.getElementById("cartSubtotal").textContent = money(cartSubtotal());
  document.getElementById("cartDelivery").textContent = money(count > 0 ? DELIVERY_FEE : 0);
  document.getElementById("cartTotal").textContent = money(cartTotal());

  const itemsEl = document.getElementById("cartItems");

  if(cart.length === 0){
    itemsEl.innerHTML = `<p class="cart-empty" id="cartEmptyMsg">Seu carrinho está vazio. O Olimpo espera sua fome.</p>`;
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }
  document.getElementById("checkoutBtn").disabled = false;

  itemsEl.innerHTML = cart.map(l => {
    const addonsText = (l.addons && l.addons.length)
      ? `<div class="cart-line-addons">${l.addons.map(a => `+ ${a.qty}x ${a.addon.name}`).join(", ")}</div>`
      : "";
    return `
      <div class="cart-line">
        <div>
          <div class="cart-line-name">${l.qty}x ${l.item.name}</div>
          ${addonsText}
          <div class="cart-line-price">${money(lineTotalPrice(l))}</div>
        </div>
        <button class="cart-line-remove" onclick="removeFromCart('${l.lineId}')">remover</button>
      </div>
    `;
  }).join("");
}

// ===== CART DRAWER OPEN/CLOSE =====
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closeCartFn(){
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// ===== TOAST =====
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

// ===== CHECKOUT (WhatsApp) =====
function checkout(){
  if(cart.length === 0) return;

  const name = document.getElementById("custName").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const reference = document.getElementById("custReference").value.trim();
  const payment = document.getElementById("custPayment").value;

  if(!name || !address || !payment){
    showToast("Preencha nome, endereço e forma de pagamento");
    return;
  }

  let msg = "Olá! Gostaria de fazer o seguinte pedido na *WL Hambúrgueria dos Deuses*:\n\n";
  cart.forEach(l => {
    msg += `• ${l.qty}x ${l.item.name} — ${money(lineTotalPrice(l))}\n`;
    if(l.addons && l.addons.length){
      l.addons.forEach(a => {
        msg += `   + ${a.qty}x ${a.addon.name}\n`;
      });
    }
  });
  msg += `\nSubtotal: ${money(cartSubtotal())}`;
  msg += `\nTaxa de entrega: ${money(DELIVERY_FEE)}`;
  msg += `\n*Total: ${money(cartTotal())}*\n`;

  msg += `\n*Dados para entrega:*`;
  msg += `\nNome: ${name}`;
  msg += `\nEndereço: ${address}`;
  if(reference){
    msg += `\nPonto de referência: ${reference}`;
  }
  msg += `\nForma de pagamento: ${payment}`;

  const notes = document.getElementById("cartNotes").value.trim();
  if(notes){
    msg += `\n\nObservações: ${notes}`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderGrids();
  renderCart();

  document.getElementById("openCartTop").addEventListener("click", openCart);
  document.getElementById("openCartFab").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCartFn);
  document.getElementById("overlay").addEventListener("click", closeCartFn);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);

  document.getElementById("closeAddonModal").addEventListener("click", closeAddonModal);
  document.getElementById("addonOverlay").addEventListener("click", closeAddonModal);
  document.getElementById("addonConfirmBtn").addEventListener("click", confirmAddCustomItem);
});
