const sections=[
{
id:'signature',
title:'⭐ Signature',
items:[
['肉骨茶','Bak Kut Teh'],
['椰子鸡','Coconut Chicken'],
['姜葱煎鱼','Ginger Scallion Fish'],
['Miso Salmon','Miso Salmon'],
['Bibimbap','Bibimbap'],
['红烧豆腐','Braised Tofu'],
['番茄煎蛋','Tomato Omelette']
]
},
{
id:'eggs',
title:'蛋类 Eggs',
items:[
['丝瓜炒蛋','Luffa Egg'],
['番茄煎蛋','Tomato Omelette'],
['蒸蛋','Steamed Egg'],
['韭菜煎蛋','Chive Omelette'],
['香菜煎蛋','Coriander Omelette'],
['苦瓜煎蛋','Bitter Gourd Omelette'],
['马铃薯煎蛋','Potato Omelette'],
['豆角煎蛋','Long Bean Omelette'],
['羊角豆煎蛋','Okra Omelette'],
['肉碎蒸蛋','Minced Meat Steamed Egg'],
['茄汁番茄蛋','Tomato Egg'],
['日式蛋卷','Japanese Omelette'],
['洋葱煎蛋','Onion Omelette'],
['羊角豆蒸蛋','Okra Steamed Egg'],
['九层塔煎蛋','Thai Basil Omelette'],
['甜菜脯煎蛋','Preserved Radish Omelette'],
['姜丝煎荷包蛋','Ginger Fried Egg'],
['姜酒煎荷包蛋','Ginger Wine Fried Egg'],
['Mani菜炒蛋','Mani Vegetable Egg']
]
},
{
id:'tofu',
title:'豆腐类 Tofu',
items:[
['红烧豆腐','Braised Tofu'],
['红烧豆腐荷包蛋','Braised Tofu Egg'],
['嫩豆腐','Soft Tofu'],
['煎豆腐','Pan Fried Tofu'],
['豆干炒韭菜','Dried Tofu with Chives'],
['葱烧豆腐','Scallion Tofu'],
['豆腐块炒灯笼椒','Tofu with Bell Pepper'],
['金瓜豆腐','Pumpkin Tofu'],
['Tempeh','Tempeh'],
['三杯豆腐','Three Cup Tofu'],
['肉碎蒸豆腐','Minced Meat Tofu']
]
},
{
id:'veg',
title:'菜类 Vegetables',
items:[
['油麦','Yau Mak'],
['芥兰','Chinese Kale'],
['番薯叶','Sweet Potato Leaves'],
['杂菜','Mixed Vegetables'],
['黄瓜炒菇','Cucumber Mushroom'],
['Asparagus','Asparagus'],
['三杯茄子','Three Cup Eggplant'],
['四大天王','Four Heavenly Kings'],
['French Bean','French Bean'],
['Broccoli Mushroom','Broccoli Mushroom'],
['小白菜','Baby Bok Choy'],
['Cauliflower','Cauliflower'],
['豆豉苦瓜','Black Bean Bitter Gourd'],
['豆瓣焖苦瓜','Braised Bitter Gourd'],
['清炒羊角豆','Stir Fried Okra'],
['蒸羊角豆','Steamed Okra'],
['南瓜炒咖喱叶','Pumpkin Curry Leaf'],
['菠菜','Spinach'],
['白菜炒虾米','Cabbage with Dried Shrimp'],
['Baby Kailan','Baby Kailan'],
['元菜','Yuan Choy'],
['帝王苗','Pea Shoots'],
['菇炒干辣椒','Mushroom Dry Chili'],
['杂菇药材','Herbal Mixed Mushroom'],
['姜丝炒菇','Ginger Mushroom'],
['包菜','Cabbage'],
['Miso Eggplant','Miso Eggplant'],
['苍蝇头（素）','Vegetarian Fly Head'],
['三杯菇','Three Cup Mushroom']
]
},
{
id:'meat',
title:'肉类 Meat & Seafood',
items:[
['姜葱煎鱼','Ginger Scallion Fish'],
['豆豉苦瓜猪肉','Pork with Bitter Gourd'],
['豆瓣红椒猪肉','Pork with Red Pepper'],
['豆瓣青椒猪肉','Pork with Green Pepper'],
['葱烧五花肉','Braised Pork Belly'],
['虾','Prawn'],
['椒仔花肉','Chili Pork'],
['Kimchi炒猪肉','Kimchi Pork'],
['三杯鸡','Three Cup Chicken'],
['煎五花肉','Pan Fried Pork Belly'],
['Butter Miso Salmon','Butter Miso Salmon'],
['潮州蒸鱼','Teochew Steamed Fish'],
['咖喱叶煎鱼','Curry Leaf Fish']
]
},
{
id:'soup',
title:'汤类 Soup & Hot Pot',
items:[
['无水鸡蔬菜锅','Waterless Chicken Pot'],
['Mille-Feuille Nabe','Mille-Feuille Nabe'],
['肉骨茶','Bak Kut Teh'],
['椰子鸡','Coconut Chicken'],
['丝瓜蛋面线','Luffa Egg Mee Sua'],
['元菜蛋面线','Yuan Choy Mee Sua'],
['ABC汤','ABC Soup'],
['老王瓜汤','Old Cucumber Soup'],
['花生莲藕汤','Peanut Lotus Soup'],
['姜蛋面线','Ginger Egg Mee Sua'],
['黄酒姜蛋面线','Rice Wine Ginger Mee Sua'],
['Doenjang-jjigae','Korean Soybean Stew'],
['南瓜汤面','Pumpkin Soup Noodles'],
['番茄拌面','Tomato Noodles'],
['Chanko Nabe','Chanko Nabe'],
['Miso汤','Miso Soup']
]
},
{
id:'rice',
title:'饭面 Rice & Noodles',
items:[
['豆角饭','Long Bean Rice'],
['麻油鸡饭','Sesame Chicken Rice'],
['牛蒡冬菇饭','Burdock Mushroom Rice'],
['Miso Salmon Rice','Miso Salmon Rice'],
['炒饭','Fried Rice'],
['青江菜饭','Choy Sum Rice'],
['日本咖喱饭','Japanese Curry Rice'],
['Pad Kra Pao','Pad Kra Pao'],
['Bibimbap','Bibimbap'],
['Tamagodon','Tamagodon'],
['Janchi Guksu','Janchi Guksu'],
['Tomato Pasta','Tomato Pasta']
]
}
];

const categoryMeta={

 signature:{
  icon:'⭐',
  class:'signature-title'
 },

 eggs:{
  icon:'🥚',
  class:'eggs-title'
 },

 tofu:{
  icon:'🧈',
  class:'tofu-title'
 },

 veg:{
  icon:'🥬',
  class:'veg-title'
 },

 meat:{
  icon:'🍖',
  class:'meat-title'
 },

 soup:{
  icon:'🍲',
  class:'soup-title'
 },

 rice:{
  icon:'🍚',
  class:'rice-title'
 }

};

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

  cart.forEach(item => {

    const row =
      document.createElement('div');

    row.className = 'cart-item';

    row.innerHTML = `
      <div class="cart-info">
        <strong>${item.cn}</strong>
        <br>
        <small>${item.en}</small>
      </div>

      <button class="remove-btn">
        ✕
      </button>
    `;

    row.querySelector('.remove-btn')
      .addEventListener(
        'click',
        () => removeItem(item.cn)
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

    const sec =
      document.createElement('section');

    sec.className='section';
    sec.id=section.id;

    
    const meta = categoryMeta[section.id];

sec.innerHTML=`
  <h2 class="${meta.class}">
    ${meta.icon} ${section.title}
  </h2>

  <div class="grid">
  
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

  const text = cart
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

render();
updateCart();