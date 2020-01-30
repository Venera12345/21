(function () {
  var congratulations = document.querySelector('.cogratulation-wrapper');
  var gameOver = document.querySelector('.game-over-wrapper');
  var gameDeadHeat = document.querySelector('.game-dead-heat-wrapper');
  var showPopup = function (item) {
    setTimeout(function () {
      item.classList.add('show');
    }, 1000);
  }
  var compareSum = function () {
    if (window.gamerData.user.sum > 21) {
      showPopup(gameOver);
    } else {
      var winner = window.gamerData.gamers.filter(function (item) {
        return item.sum > window.gamerData.user.sum && item.sum <= 21;
      });

      var winnerTheSame = window.gamerData.gamers.filter(function (item) {
        return item.sum === window.gamerData.user.sum;
      });
      if (winner.length > 0) {
        showPopup(gameOver);
      } else if (winnerTheSame.length > 0) {
        showPopup(gameDeadHeat);
      } else {
        showPopup(congratulations);
      }
    }
  };
  var congratulateUser = function (gamer) {
    if (gamer.sum === 21) {
      showPopup(congratulations);
    }
  };
  window.total = {
    compareSum: compareSum,
    congratulateUser: congratulateUser
  };
})();