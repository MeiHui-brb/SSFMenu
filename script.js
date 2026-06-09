let sections = [];
let categoryMeta = {};

async function loadData(){

  try{

    const response =
      await fetch('menu.json');

    const data =
      await response.json();

    sections =
      data.sections;

    categoryMeta =
      data.categories;

    render();
    updateCart();

  }catch(err){

  console.error(err);

  menu.innerHTML = `
    <div style="
      padding:20px;
      text-align:center;
      color:red;
    ">
      Failed to load menu.json
    </div>
  `;

  }
}
  
const menu = document.getElementById('menu');

let cart = JSON.parse(
  localStorage.getItem('ssf-cart')
) || [];

function saveCart(){
  localStorage.setItem(
    'ssf-cart',
    JSON.stringify(cart)
  );
}

function isSelected(cn){
  return cart.some(
    item => item.cn === cn
  );
}

function removeItem(cn){

  cart = cart.filter(
    item => item.cn !== cn
  );

  saveCart();
  updateCart();

  render(
    document.getElementById('search').value
  );
}

function toggleItem(cn,en){

  const index = cart.findIndex(
    item => item.cn === cn
  );

  if(index >= 0){
    cart.splice(index,1);
  }else{
    cart.push({
      cn,
      en
    });
  }

  saveCart();

  updateCart();

  render(
    document.getElementById('search').value
  );
}

function updateCart(){

  const cartCount =
    document.getElementById('cartCount');

  const cartItems =
    document.getElementById('cartItems');

  cartCount.textContent = cart.length;

  if(cart.length === 0){

    cartItems.innerHTML = `
      <div class="empty-cart">
        No dishes selected 🍲
      </div>
    `;

    return;
  }

  cartItems.innerHTML = '';

  const sortedCart = [...cart].sort((a,b) => {

    const sectionA =
      getItemSection(a.cn)?.id || '';

    const sectionB =
      getItemSection(b.cn)?.id || '';

    if(sectionA !== sectionB){
      return sectionA.localeCompare(sectionB);
    }

    return a.cn.localeCompare(
      b.cn,
      'zh'
    );

  });

  sortedCart.forEach(item => {

    const row =
      document.createElement('div');

    row.className = 'cart-item';

    row.innerHTML = `
      <button class="remove-btn">
        ✕
      </button>

      <div class="cart-info">
        <strong>
          ${getItemCategory(item.cn).icon}
          ${item.cn}
        </strong>
        <br>
        <small>${item.en}</small>
      </div>
    `;

    row
      .querySelector('.remove-btn')
      .addEventListener(
        'click',
        () => removeItem(item.cn)
      );

    cartItems.appendChild(row);

  });

}

function getItemCategory(cn){

  for(const section of sections){

    if(
      section.items.some(
        item => item[0] === cn
      )
    ){
      return categoryMeta[section.id];
    }

  }

  return {
    icon:'🍽️',
    class:''
  };

}

function getItemSection(cn){

  for(const section of sections){

    if(
      section.items.some(
        item => item[0] === cn
      )
    ){
      return section;
    }

  }

  return null;

}

document
  .getElementById('clearBtn')
  .addEventListener(
    'click',
    clearAll
  );
  
function render(filter=''){

  menu.innerHTML='';

  sections.forEach(section=>{

    const items = section.items.filter(
      item =>
        (item[0] + item[1])
        .toLowerCase()
        .includes(filter.toLowerCase())
    );

    if(!items.length) return;

    const sec = document.createElement('section');

    sec.className = 'section';
    sec.id = section.id;

    const meta = categoryMeta[section.id] || {
      icon:'🍽️',
      class:''
    };

    sec.innerHTML = `
      <h2 class="${meta.class}">
        ${meta.icon} ${section.title}
      </h2>

      <div class="grid">
        ${items.map(item => {

  const selected = isSelected(item[0]);

  return `
    <div class="card ${selected ? 'selected' : ''}"
         onclick="toggleItem('${item[0]}','${item[1]}')">

      <div class="cn">${item[0]}</div>
      <div class="en">${item[1]}</div>

      ${selected ? '<div class="selected-badge">✓ Selected</div>' : ''}

    </div>
  `;

}).join('')}
      </div>
    `;

    menu.appendChild(sec);

  });

}

document
  .getElementById('search')
  .addEventListener(
    'input',
    e => render(e.target.value)
  );

const sidebar =
  document.getElementById('sidebar');

const overlay =
  document.getElementById('overlay');

document
  .getElementById('cartBtn')
  .addEventListener(
    'click',
    () => {

      sidebar.classList.add(
        'active'
      );

      overlay.classList.add(
        'active'
      );

    }
  );
  
function closeSidebar(){

  sidebar.classList.remove(
    'active'
  );

  overlay.classList.remove(
    'active'
  );

}

document
  .getElementById('closeBtn')
  .addEventListener(
    'click',
    closeSidebar
  );

overlay.addEventListener(
  'click',
  closeSidebar
);

document
  .getElementById('copyBtn')
  .addEventListener(
    'click',
    copyResults
  );

async function copyResults(){

  if(cart.length === 0){
    alert('No items selected yet.');
    return;
  }

  const text = [...cart]
  .sort((a,b)=>{

    const sectionA =
      getItemSection(a.cn)?.id || '';

    const sectionB =
      getItemSection(b.cn)?.id || '';

    if(sectionA !== sectionB){
      return sectionA.localeCompare(sectionB);
    }

    return a.cn.localeCompare(
      b.cn,
      'zh'
    );

  })
  .map(item => item.cn)
  .join('\n');

  try{

    if(navigator.clipboard){
	  console.log(text);
      await navigator.clipboard.writeText(text);

    }else{

      const textarea =
        document.createElement('textarea');

      textarea.value = text;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      textarea.remove();

    }

    const btn =
      document.getElementById('copyBtn');

    btn.textContent = '✅ Copied';

    setTimeout(() => {
      btn.textContent = '📋 Copy';
    }, 2000);

  }catch(err){

    console.error(err);

    alert('Copy failed: ' + err.message);

  }

}

function clearAll(){

  if(cart.length === 0){
    return;
  }

  const confirmed = confirm(
    'Clear all selected dishes?'
  );

  if(!confirmed){
    return;
  }

  cart = [];

  saveCart();

  updateCart();

  render(
    document.getElementById('search').value
  );

}

/* While it often works because fetch() is asynchronous, 
   moving loadData() to the bottom removes any possibility of initialization timing issues.
*/
loadData();