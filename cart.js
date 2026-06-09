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

function toggleItem(cn,en){

  const index =
    cart.findIndex(
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
  refreshMenu();

}

function removeItem(cn){

  cart = cart.filter(
    item => item.cn !== cn
  );

  saveCart();
  updateCart();
  refreshMenu();

}

function clearAll(){

  if(cart.length === 0){
    return;
  }

  if(
    !confirm(
      'Clear all selected dishes?'
    )
  ){
    return;
  }

  cart = [];

  saveCart();
  updateCart();
  refreshMenu();

}

function getSortedCart(){

  return [...cart].sort((a,b)=>{

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

}