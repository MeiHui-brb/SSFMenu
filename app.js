async function init(){

  await loadData();

  render();
  updateCart();

  document
    .getElementById('search')
    .addEventListener(
      'input',
      e => render(
        e.target.value
      )
    );

  document
    .getElementById('cartBtn')
    .addEventListener(
      'click',
      openSidebar
    );

  document
    .getElementById('closeBtn')
    .addEventListener(
      'click',
      closeSidebar
    );

  document
    .getElementById('copyBtn')
    .addEventListener(
      'click',
      copyResults
    );

  document
    .getElementById('clearBtn')
    .addEventListener(
      'click',
      clearAll
    );

  overlay.addEventListener(
    'click',
    closeSidebar
  );

}

init();