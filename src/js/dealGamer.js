(function () {
  var openCardGemer = function (current, gamer, rundom, i) {
    var itemsGamer = gamer[i].place.querySelectorAll('.item-card');
    [].forEach.call(itemsGamer, function (item) {
      window.card.openCard(item, rundom[current], gamer[i]);
      current++;
      return current;
    });
    if (gamer[i].transform > 0) {
      gamer[i].transform += 25;
    } else {
      gamer[i].transform -= 25;
    }

    setTimeout(function () {
      checkPoint(gamer, rundom, current, i);
    }, 1000);
    return current;
  };
  var setOfPoints = function (object, rundom, current, i) {
    setTimeout(function () {
      window.deal.dealCard(object[i]);
      var newItemsGamer = object[i].place.querySelectorAll('.item-card');
      setTimeout(function () {
        window.card.openCard(newItemsGamer[newItemsGamer.length - 1], rundom[current], object[i]);
        return current++;
      }, 500);
      if (object[i].transform > 0) {
        object[i].transform += 25;
      } else {
        object[i].transform -= 25;
      }
      setTimeout(function () {
        checkPoint(object, rundom, current, i);
      }, 1500);
      return current;
    }, 1000);
  };
  var checkPoint = function (object, rundom, current, i) {
    var rundomNum = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var probability = rundomNum(0, 100);
    var amount = window.popup.amountGamer;
    if (object[i].sum <= 10) {
      setOfPoints(object, rundom, current, i);
    } else if (object[i].sum > 10 && object[i].sum <= 14 && probability <= 98) {
      setOfPoints(object, rundom, current, i);
    } else if (object[i].sum > 14 && object[i].sum <= 17 && probability <= 78) {
      setOfPoints(object, rundom, current, i);
    } else if (object[i].sum > 17 && object[i].sum <= 19 && probability <= 30) {
      setOfPoints(object, rundom, current);
    } else if (object[i].sum > 19 && probability <= 3) {
      setOfPoints(object, rundom, current, i);
    } else if (object[i].sum === 21) {
      if (i !== amount - 1) {
        setOfPointsGamers(object, current, rundom, amount, i + 1);
      } else {
        console.log('результат');
        window.total.compareSum();
      }
    } else if (object[i].sum > 21) {
      if (i !== amount - 1) {
        setOfPointsGamers(object, current, rundom, amount, i + 1);
      } else {
        console.log('результат');
        window.total.compareSum();
      }
    } else {
      if (i !== amount - 1) {
        setOfPointsGamers(object, current, rundom, amount, i + 1);
      } else {
        window.total.compareSum();
        console.log('результат');
      }
    }
  };
  var setOfPointsGamers = function (object, current, rundom, amount, i) {
    if (amount > 1) {
      current += 1;
      openCardGemer(current, object, rundom, i);
    }
  };
  window.dealGamer = {
    openCardGemer: openCardGemer,
    setOfPoints: setOfPoints,
    checkPoint: checkPoint,
  };
})();