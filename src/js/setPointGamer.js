(function() {
  var checkPoint = function (object, transform, rundom, current) {
    var rundomNum = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var probability =  rundomNum(0, 100);
       if(object.sum <= 10) {
        setOfPoints(object, transform, rundom, current);
       } else if (object.sum > 10 && object.sum <= 14 && probability <= 98) {
        setOfPoints(object, transform, rundom, current);
       } else if (object.sum > 14 && object.sum <= 17 && probability <= 70) {
        setOfPoints(object, transform, rundom, current);
        } else if(object.sum > 17 && object.sum <= 19 && probability <= 30) {
          setOfPoints(object, transform, rundom, current);
        } else if(object.sum > 19 && probability <= 3){
          setOfPoints(object, transform, rundom, current);
        }else if (object.sum === 21){
          return console.log('finish');
        } else if (object.sum > 21) {
          return console.log('finish');
        } else {
          return console.log('finish');
        }
    };
    var setOfPoints = function(object, transform, rundom, current) {
      setTimeout(function(){
        window.deck.dealCard(object, transform);
        var newItemsGamer = object.place.querySelectorAll('.item-card');
        setTimeout(function(){
          window.card.openCard(newItemsGamer[newItemsGamer.length - 1], rundom[current], object);
          return current++;
        }, 500);
        setTimeout(function(){
          checkPoint(object, transform+25, rundom, current);
        }, 1500);
        return current, transform;
      }, 1000);
    }
    var openCardGemer = function (current, gamer, rundom, transform) {
      var itemsGamer = gamer.place.querySelectorAll('.item-card');
      [].forEach.call(itemsGamer, function (item) {
          window.card.openCard(item, rundom[current], gamer);
          current++;
          return current;
      });
      setTimeout(function(){
        checkPoint(gamer, transform+25, rundom, current);
      }, 1000);
      return current; 
    };
window.dealGamer = {
  openCardGemer: openCardGemer,
  setOfPoints: setOfPoints,
  checkPoint: checkPoint
};
})();