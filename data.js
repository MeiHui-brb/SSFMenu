let sections = [];
let categoryMeta = {};
let itemLookup = {};

async function loadData(){

  const response =
    await fetch('./data/menu.json');

  const data =
    await response.json();

  sections = data.sections;
  categoryMeta = data.categories;

  itemLookup = {};

  sections.forEach(section => {

    section.items.forEach(item => {

      itemLookup[item[0]] = {
        section,
        category:
          categoryMeta[section.id]
      };

    });

  });

}