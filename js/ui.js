const menu =
  document.getElementById('menu');

const sidebar =
  document.getElementById('sidebar');

const overlay =
  document.getElementById('overlay');

function refreshMenu(){

  render(
    document.getElementById('search')
      .value
  );

}

function getItemCategory(cn){

  return itemLookup[cn]?.category || {
    icon:'🍽️',
    class:''
  };

}

function getItemSection(cn){

  return itemLookup[cn]?.section || null;

}

/* UPDATE CART */
function updateCart(){

  const cartCount =
    document.getElementById('cartCount');

  const cartItems =
    document.getElementById('cartItems');

  cartCount.textContent =
    cart.length;

  if(cart.length === 0){

    cartItems.innerHTML = `
      <div class="empty-cart">
        No dishes selected 🍲
      </div>
    `;

    return;

  }

  cartItems.innerHTML='';

  getSortedCart()
    .forEach(item=>{

      const row =
        document.createElement('div');

      row.className='cart-item';

      row.innerHTML=`
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
          ()=>removeItem(item.cn)
        );

      cartItems.appendChild(row);

    });

}

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

function openSidebar(){

  sidebar.classList.add(
    'active'
  );

  overlay.classList.add(
    'active'
  );

}

function closeSidebar(){

  sidebar.classList.remove(
    'active'
  );

  overlay.classList.remove(
    'active'
  );

}

async function copyResults(){

  if(cart.length === 0){

    alert(
      'No items selected yet.'
    );

    return;

  }

  const text = getSortedCart()
  .map(item => {

    const icon =
      getItemCategory(item.cn).icon;

    return `${icon} ${item.cn} ${item.en}`;

  })
  .join('\n');

  await navigator.clipboard
    .writeText(text);

  const btn =
    document.getElementById(
      'copyBtn'
    );

  btn.textContent =
    '✅ Copied';

  setTimeout(()=>{

    btn.textContent =
      '📋 Copy';

  },2000);

}