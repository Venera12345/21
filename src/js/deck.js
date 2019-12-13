(function () {
var card = document.querySelector('#card').content.querySelector('.item-card');
var fragment = document.createDocumentFragment();
var dealCard = function (object, transform) { 
  var element = card.cloneNode(true);
  element.classList.add(object.animation);
  fragment.appendChild(element);
  element.style.left = object.left + '%';
  element.style.bottom = object.bottom + '%';
  console.log(object);
  var block = object.place.querySelector('.item-player-card');
  if(!!block) {
    block.parentNode.removeChild(block);
   object.place.appendChild(fragment);
  } else {
    element.style.transform = 'translateX(' + transform + '%)';
  object.place.appendChild(fragment);   
  }
};
window.deck = {
  dealCard: dealCard
}
})();