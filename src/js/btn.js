(function () {
    var btnDistribution = document.querySelector('.btn-distribution');
    var btnStill = document.querySelector('.btn-still');
    var btnStop = document.querySelector('.btn-stop');
    var current = 0;
    var rundom;
    var amountGamer;
    setTimeout(function () {
        rundom = window.run;
        return rundom;
    }, 1000);

    btnDistribution.addEventListener('click', function () {
        amountGamer = window.popup.amountGamer;
        window.deck.dealCard(window.gamerData.user);
        setTimeout(function () {
            window.deck.dealCard(window.gamerData.user);
            window.gamerData.user.currentTransform += 40;
        }, 700);
        setTimeout(function () {
            var itemUserCards = window.gamerData.user.place.querySelectorAll('.item-card');
            [].forEach.call(itemUserCards, function (item) {
                window.card.openCard(item, rundom[current], window.gamerData.user);
                current++;
                btnDistribution.disabled = 'disabled';
                return current;
            });
        }, 2200);
        window.deck.dealCardForGamer(window.gamerData.gamers[0]);
        if (amountGamer == 2) {
            window.deck.dealCardForGamer(window.gamerData.gamers[1]);
        } else if (amountGamer == 3) {
            window.gamerData.gamers[0].bottom = 60;
            window.gamerData.gamers[1].bottom = 60;
            window.deck.dealCardForGamer(window.gamerData.gamers[1]);
            window.deck.dealCardForGamer(window.gamerData.gamers[2]);
        } else if (amountGamer == 4) {
            window.gamerData.gamers[0].bottom = 60;
            window.gamerData.gamers[1].bottom = 60;
            window.deck.dealCardForGamer(window.gamerData.gamers[1]);
            window.deck.dealCardForGamer(window.gamerData.gamers[2]);
            window.deck.dealCardForGamer(window.gamerData.gamers[3]);
        }
        return amountGamer;
    });
    btnStill.addEventListener('click', function () {
        window.deck.dealCard(window.gamerData.user);
        window.gamerData.user.currentTransform += 40;
        setTimeout(function () {
            var newItemUserCards = window.gamerData.user.place.querySelectorAll('.item-card');
            window.card.openCard(newItemUserCards[newItemUserCards.length - 1], rundom[current], window.gamerData.user);
            current++;
            return current;
        }, 1000);
    });

    btnStop.addEventListener('click', function () {
        btnStill.disabled = 'disabled';
        btnStop.disabled = 'disabled';
        window.dealGamer.openCardGemer(current, window.gamerData.gamers, rundom, 0);  
    });

})();