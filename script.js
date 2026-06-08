const sections = [
{
id:'eggs',
icon:'🥚',
title:'🥚 蛋类 Eggs',
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
icon:'🧈',
title:'🧈 豆腐类 Tofu',
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
icon:'🥬',
title:'🥬 菜类 Vegetables',
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
icon:'🍖',
title:'🍖 肉类 Meat & Seafood',
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
icon:'🍲',
title:'🍲 汤类 Soup & Hot Pot',
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
icon:'🍚',
title:'🍚 饭面 Rice & Noodles',
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

function malaysiaReset() {

  let state = JSON.parse(
    localStorage.getItem('ssf-family')
  ) || {
    users: ['Guest'],
    currentUser: 'Guest',
    selections: {},
    resetDate: ''
  };

  const now = new Date(
    new Date().toLocaleString(
      'en-US',
      {
        timeZone: 'Asia/Kuala_Lumpur'
      }
    )
  );

  const today =
    now.toISOString().slice(0, 10);

  if (
    now.getHours() >= 20 &&
    state.resetDate !== today
  ) {

    state.selections = {};

    state.resetDate = today;

    localStorage.setItem(
      'ssf-family',
      JSON.stringify(state)
    );

  }

  return state;
}

let state = malaysiaReset();

function save() {

  localStorage.setItem(
    'ssf-family',
    JSON.stringify(state)
  );

}

function refreshUsers() {

  userSelect.innerHTML =
    state.users.map(
      u =>
      `<option ${
        u === state.currentUser
          ? 'selected'
          : ''
      }>${u}</option>`
    ).join('');

}

function selected(dish) {

  return (
    state.selections[
      state.currentUser
    ] || []
  ).includes(dish);

}

function toggleDish(dish) {

  state.selections[
    state.currentUser
  ] ||= [];

  const i =
    state.selections[
      state.currentUser
    ].indexOf(dish);

  if (i > -1) {

    state.selections[
      state.currentUser
    ].splice(i, 1);

  } else {

    state.selections[
      state.currentUser
    ].push(dish);

  }

  save();

  render();

  renderSidebar();
}

window.toggleDish = toggleDish;

function render(filter = '') {

  menu.innerHTML = '';

  sections.forEach(sec => {

    sec.items
      .filter(
        i =>
        (i[0] + i[1])
          .toLowerCase()
          .includes(
            filter.toLowerCase()
          )
      )
      .forEach(i => {

        menu.innerHTML += `
          <div
            class="card ${
              selected(i[0])
                ? 'selected-card'
                : ''
            }"
            onclick="toggleDish('${i[0]}')"
          >
            <b>${i[0]}</b>
            <br>
            ${i[1]}
          </div>
        `;

      });

  });

}

function renderSidebar() {

  const view =
    document
      .querySelector(
        '.tab.active'
      )
      .dataset.view;

  if (view === 'family') {

    sidebarContent.innerHTML =
      Object.entries(
        state.selections
      )
      .map(
        ([u, d]) => `
          <div class="section">
            <b>👤 ${u}</b>
            <br>
            ${d.join('<br>')}
          </div>
        `
      )
      .join('');

  } else {

    const map = {};

    Object.entries(
      state.selections
    ).forEach(
      ([u, dishes]) => {

        dishes.forEach(d => {

          map[d] =
            map[d] || [];

          map[d].push(u);

        });

      }
    );

    sidebarContent.innerHTML =
      Object.entries(map)
      .map(
        ([dish, users]) => `
          <div class="section">
            <b>${dish}</b>
            <br>

            ${users.map(
              u => `
                <span class="chip">
                  👤 ${u}
                </span>
              `
            ).join('')}
          </div>
        `
      )
      .join('');

  }

}

refreshUsers();

render();

renderSidebar();

search.oninput =
  e => render(
    e.target.value
  );

userSelect.onchange =
  e => {

    state.currentUser =
      e.target.value;

    save();

    render();

  };

addUserBtn.onclick =
  () => {

    const n =
      prompt(
        'Family member name'
      );

    if (n) {

      if (
        !state.users.includes(n)
      ) {

        state.users.push(n);

      }

      state.currentUser = n;

      save();

      refreshUsers();

      render();

    }

  };

openSidebar.onclick =
  () => {

    sidebar.classList.add(
      'open'
    );

    overlay.classList.add(
      'show'
    );

  };

overlay.onclick =
  () => {

    sidebar.classList.remove(
      'open'
    );

    overlay.classList.remove(
      'show'
    );

  };

document
  .querySelectorAll('.tab')
  .forEach(t =>

    t.onclick = () => {

      document
        .querySelectorAll(
          '.tab'
        )
        .forEach(
          x =>
            x.classList.remove(
              'active'
            )
        );

      t.classList.add(
        'active'
      );

      renderSidebar();

    }

  );