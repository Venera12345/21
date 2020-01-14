(function () {
    var calculate = function (valueCard, gemer) {
        gemer.sum += valueCard;
        return gemer.sum;
    };
    var openCard = function (item, indexRundom, gamer) {
        var valueCard = window.cardsData[indexRundom];
        item.classList.add('rotate');
        setTimeout(function () {
            item.classList.add(valueCard.class);
            calculate(valueCard.point, gamer);
            gamer.span.textContent = gamer.sum;
            window.total.congratulateUser(window.gamerData.user);
        }, 500);
    };
    window.card = {
        openCard: openCard
    };
})();

