(function () {
   window.cleanDesk = function (item) {
      var carts = item.querySelectorAll('.item-card');
      var plase = item.querySelector('.list-player-cards');
      [].forEach.call(carts, function (item) {
         item.parentNode.removeChild(item);
      });
      if (!!!item.querySelector('.item-player-card')) {
         var container = document.createElement('li');
         container.classList.add('item-player-card');
         plase.appendChild(container);
      }
      if (!!item.querySelector('.player-points')) {
         var spanPoint = item.querySelector('.player-points');
         spanPoint.textContent = '0';
         item.classList.add('hidden');
      }

   };

})();