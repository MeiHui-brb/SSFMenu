const sections = [
{
 id:'signature',
 title:'⭐ Signature',
 items:[
  ['番茄煎蛋','Tomato Omelette'],
  ['红烧豆腐','Braised Tofu'],
  ['姜葱煎鱼','Ginger Scallion Fish'],
  ['Miso Salmon','Miso Salmon'],
  ['肉骨茶','Bak Kut Teh'],
  ['椰子鸡','Coconut Chicken'],
  ['Bibimbap','Bibimbap']
 ]
},
{
 id:'eggs',
 title:'蛋类 Eggs',
 items:[
  ['番茄煎蛋','Tomato Omelette'],
  ['蒸蛋','Steamed Egg'],
  ['韭菜煎蛋','Chive Omelette'],
  ['丝瓜炒蛋','Luffa Egg']
 ]
},
{
 id:'tofu',
 title:'豆腐类 Tofu',
 items:[
  ['红烧豆腐','Braised Tofu'],
  ['煎豆腐','Pan Fried Tofu'],
  ['Tempeh','Tempeh'],
  ['三杯豆腐','Three Cup Tofu']
 ]
},
{
 id:'veg',
 title:'菜类 Vegetables',
 items:[
  ['芥兰','Chinese Kale'],
  ['菠菜','Spinach'],
  ['番薯叶','Sweet Potato Leaves'],
  ['Baby Kailan','Baby Kailan']
 ]
},
{
 id:'meat',
 title:'肉类 Meat',
 items:[
  ['姜葱煎鱼','Ginger Scallion Fish'],
  ['三杯鸡','Three Cup Chicken'],
  ['Miso Salmon','Miso Salmon'],
  ['潮州蒸鱼','Teochew Steamed Fish']
 ]
},
{
 id:'soup',
 title:'汤类 Soup',
 items:[
  ['肉骨茶','Bak Kut Teh'],
  ['椰子鸡','Coconut Chicken'],
  ['Chanko Nabe','Chanko Nabe'],
  ['南瓜汤面','Pumpkin Soup Noodles']
 ]
},
{
 id:'rice',
 title:'饭面 Rice & Noodles',
 items:[
  ['麻油鸡饭','Sesame Chicken Rice'],
  ['日本咖喱饭','Japanese Curry Rice'],
  ['Bibimbap','Bibimbap'],
  ['Tamagodon','Egg Rice Bowl']
 ]
}
];

const menu = document.getElementById('menu');

let cart = [];

/* ---------- Selection ---------- */

function isSelected(cn){
 return cart.some(item => item.cn === cn);
}

function toggleItem(cn,en){

 const index = cart.findIndex(
   item => item.cn === cn
 );

 if(index >= 0){
   cart.splice(index,1);
 }else{
   cart.push({cn,en});
 }

 updateCart();
 render(
   document.getElementById('search').value
 );
}

/* ---------- Sidebar ---------- */

function updateCart(){

 document.getElementById(
   'cartCount'
 ).textContent = cart.length;

 document.getElementById(
   'cartItems'
 ).innerHTML = cart.length
 ? cart.map(item => `
   <div class="cart-item">
     <strong>${item.cn}</strong><br>
     <small>${item.en}</small>
   </div>
 `).join('')
 : `
   <div class="empty-cart">
     No dishes selected 🍲
   </div>
 `;
}

/* ---------- Menu ---------- */

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

   sec.className='section';
   sec.id=section.id;

   sec.innerHTML=`
     <h2>${section.title}</h2>

     <div class="grid">

       ${items.map(item=>`

         <div
           class="card ${
             isSelected(item[0])
             ? 'selected-card'
             : ''
           }"

           onclick="
             toggleItem(
               '${item[0]}',
               '${item[1]}'
             )
           "
         >

           <div class="cn">
             ${item[0]}
           </div>

           <div class="en">
             ${item[1]}
           </div>

           ${
             isSelected(item[0])
             ? `
               <div class="selected-badge">
                 ✓ Selected
               </div>
             `
             : ''
           }

         </div>

       `).join('')}

     </div>
   `;

   menu.appendChild(sec);
 });

}

/* ---------- Search ---------- */

document
 .getElementById('search')
 .addEventListener(
   'input',
   e => render(e.target.value)
 );

/* ---------- Sidebar Open/Close ---------- */

const sidebar =
 document.getElementById('sidebar');

const overlay =
 document.getElementById('overlay');

document
 .getElementById('cartBtn')
 .addEventListener('click',()=>{

   sidebar.classList.add('active');
   overlay.classList.add('active');

 });

function closeSidebar(){

 sidebar.classList.remove('active');
 overlay.classList.remove('active');

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

/* ---------- Init ---------- */

render();
updateCart();