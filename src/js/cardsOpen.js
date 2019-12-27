(function() {
    var congratulations = document.querySelector('.cogratulation');
    var gameOver =  document.querySelector('.game-over');
    var calculate = function (valueCard, gemer) {
        gemer.sum += valueCard;
        console.log(gemer.sum)
        return gemer.sum;
    };
    var openCard = function (item, indexRundom, gamer) {
    var valueCard = window.cardsData[indexRundom];
    item.classList.add('rotate');
    setTimeout(function() {
        item.classList.add(valueCard.class);
      calculate(valueCard.point, gamer);
      if( gamer.animation === 'animation') {
        window.card.chackPointsUser(gamer);
      }  
        gamer.span.textContent = gamer.sum;
    }, 500);
    };
    var chackPointsUser = function (gamer) {
    if (gamer.sum === 21) {
      congratulations.classList.add('show');  
    } else if (gamer.sum > 21) {
        gameOver.classList.add('show');  
    }
   };
 window.card = {
     openCard: openCard,
     chackPointsUser: chackPointsUser 
 };
})();

