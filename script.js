// ===== CONFIG =====
const WHATSAPP_NUMBER = "5537998655709"; // formato: 55 + DDD + número
const DELIVERY_FEE = 3.00; // taxa de entrega

// ===== MENU DATA =====
const MENU = {
  hamburgueres: [
    { id: "h-eros", name: "Eros", desc: "Hambúrguer artesanal suculento 140g, pão médio tradicional, bacon crocante, mussarela derretida, molho cheddar cremoso e molho secreto da casa.", price: 25.00 },
    { id: "h-hercules", name: "Hércules", desc: "Hambúrguer artesanal suculento 140g, pão médio tradicional (sem gergelim), bacon crocante, mussarela derretida, alface fresca, tomate fatiado, molho rosé cremoso, molho barbecue defumado e molho secreto da casa.", price: 30.00, img: "img-hercules.jpg" },
    { id: "h-atena", name: "Atena", desc: "Hambúrguer artesanal suculento 140g, pão de brioche macio, cebola na chapa caramelizada, mussarela derretida, cheddar em fatia, anel de cebola empanado crocante, molho barbecue defumado e molho especial da casa.", price: 37.00, img: "img-atena.jpg" },
    { id: "h-montado", name: "Montado", desc: "Crie seu próprio hambúrguer artesanal.", price: 3.00 },
    { id: "h-apolo", name: "Apolo", desc: "Duplo Apolo (280g de carne artesanal): 2 hambúrgueres 140g suculentos, 2 fatias de mussarela derretida, bacon crocante, catupiry original cremoso, cream cheese, ovo frito, molho cheddar cremoso e molho secreto da casa.", price: 45.00, img: "img-apolo.jpg" },
    { id: "h-zeus", name: "Zeus", desc: "Hambúrguer artesanal suculento 140g, pão com gergelim tostado, bacon crocante, anéis de cebola empanados, tomate fresco, alface crocante, catupiry original cremoso, molho secreto da casa, molho cheddar derretido e molho barbecue. Acompanha batata frita.", price: 40.00, img: "img-zeus.jpg" },
    { id: "h-invictus", name: "Invictus", desc: "Hambúrguer artesanal suculento 140g, pão tradicional, ovo frito, bacon crocante, mussarela derretida, tomate fresco, alface crocante, catupiry original cremoso, molho secreto da casa e molho barbecue defumado.", price: 35.00, img: "img-invictus.jpg" },
  ],
  sobremesas: [
    { id: "s-afrodite", name: "Afrodite", desc: "A sobremesa do Olimpo: pão de brioche tostado, recheado com Nutella cremosa, morangos frescos selecionados, Oreo crocante e uma chuva de leite Ninho.", price: 25.00, img: "img-afrodite.jpg" },
  ],
  porcoes: [
    { id: "p-batata-cheddar-bacon", name: "Batata Cheddar e Bacon", desc: "Porção batata frita com cheddar e bacon.", price: 35.00 },
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
    { id: "c-combo-atena-hercules", name: "Combo Atena & Hércules", desc: "1 Hambúrguer Atena, 1 Hambúrguer Hércules, 1 Porção batata com bacon e cheddar, 1 Porção de anel de cebola, 2 Fini.", price: 95.00 },
    { id: "c-combo-eros", name: "Combo 3 Eros", desc: "3 Eros, porção de batata frita, porção de nuggets, porção de anel de cebola.", price: 115.00 },
  ],
};

const money = (v) => "R$ " + v.toFixed(2).replace(".", ",");

// ===== CART STATE =====
let cart = {}; // id -> { item, qty }

function loadCart(){
  try{
    const raw = localStorage.getItem("wl_cart");
    if(raw) cart = JSON.parse(raw);
  }catch(e){ cart = {}; }
}
function saveCart(){
  try{ localStorage.setItem("wl_cart", JSON.stringify(cart)); }catch(e){}
}

function findItem(id){
  for(const cat of Object.values(MENU)){
    const found = cat.find(i => i.id === id);
    if(found) return found;
  }
  return null;
}

function addToCart(id){
  const item = findItem(id);
  if(!item) return;
  if(!cart[id]) cart[id] = { item, qty: 0 };
  cart[id].qty += 1;
  saveCart();
  renderCart();
  renderGrids();
  showToast(`${item.name} adicionado`);
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart();
  renderCart();
  renderGrids();
}

function removeFromCart(id){
  delete cart[id];
  saveCart();
  renderCart();
  renderGrids();
}

function cartCount(){
  return Object.values(cart).reduce((sum, l) => sum + l.qty, 0);
}
function cartSubtotal(){
  return Object.values(cart).reduce((sum, l) => sum + l.qty * l.item.price, 0);
}
function cartTotal(){
  const items = cartSubtotal();
  return items > 0 ? items + DELIVERY_FEE : 0;
}

// ===== RENDER MENU =====
function renderGrids(){
  renderGrid("grid-hamburgueres", MENU.hamburgueres);
  renderGrid("grid-porcoes", MENU.porcoes);
  renderGrid("grid-bebidas", MENU.bebidas);
  renderGrid("grid-combos", MENU.combos);
  renderGrid("grid-sobremesas", MENU.sobremesas);
}

function renderGrid(elId, items){
  const el = document.getElementById(elId);
  el.innerHTML = items.map(item => {
    const line = cart[item.id];
    const footer = line
      ? `<div class="qty-row">
           <button onclick="changeQty('${item.id}', -1)" aria-label="Diminuir">−</button>
           <span>${line.qty}</span>
           <button onclick="changeQty('${item.id}', 1)" aria-label="Aumentar">+</button>
         </div>`
      : `<button class="add-btn" onclick="addToCart('${item.id}')" aria-label="Adicionar ${item.name}">+</button>`;

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
  const lines = Object.entries(cart);

  if(lines.length === 0){
    itemsEl.innerHTML = `<p class="cart-empty" id="cartEmptyMsg">Seu carrinho está vazio. O Olimpo espera sua fome.</p>`;
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }
  document.getElementById("checkoutBtn").disabled = false;

  itemsEl.innerHTML = lines.map(([id, l]) => `
    <div class="cart-line">
      <div>
        <div class="cart-line-name">${l.qty}x ${l.item.name}</div>
        <div class="cart-line-price">${money(l.item.price * l.qty)}</div>
      </div>
      <button class="cart-line-remove" onclick="removeFromCart('${id}')">remover</button>
    </div>
  `).join("");
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
  const lines = Object.values(cart);
  if(lines.length === 0) return;

  let msg = "Olá! Gostaria de fazer o seguinte pedido na *WL Hambúrgueria dos Deuses*:\n\n";
  lines.forEach(l => {
    msg += `• ${l.qty}x ${l.item.name} — ${money(l.item.price * l.qty)}\n`;
  });
  msg += `\nSubtotal: ${money(cartSubtotal())}`;
  msg += `\nTaxa de entrega: ${money(DELIVERY_FEE)}`;
  msg += `\n*Total: ${money(cartTotal())}*\n`;

  const notes = document.getElementById("cartNotes").value.trim();
  if(notes){
    msg += `\nObservações: ${notes}\n`;
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
});
