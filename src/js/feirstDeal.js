(function () {
  var card = document.querySelector('#card').content.querySelector('.item-card');
  var fragment = document.createDocumentFragment();
  var dealCard = function (object) {
    var element = card.cloneNode(true);
    element.classList.add(object.animation);
    fragment.appendChild(element);
    element.style.left = object.left + '%';
    element.style.bottom = object.bottom + '%';
    var block = object.place.querySelector('.item-player-card');
    if (!!block) {
      block.parentNode.removeChild(block);
      object.place.appendChild(fragment);
    } else {
      element.style.transform = 'translateX(' + object.transform + '%)';
      object.place.appendChild(fragment);
    }
  };
  var dealCardForGamer = function (user) {
    setTimeout(function () {
      dealCard(user);
      setTimeout(function () {
        dealCard(user);
      }, 500);
    }, user.time);
  };
  window.deal = {
    dealCard: dealCard,
    dealCardForGamer: dealCardForGamer
  }
})();