(function () {
    var btnDistribution = document.querySelector('.btn-distribution');
    var btnStill = document.querySelector('.btn-still');
    var btnStop = document.querySelector('.btn-stop');
    var gamers = document.querySelectorAll('.item-player');
    var btnAgain = document.querySelectorAll('.again');
    var current = 0;
    btnDistribution.addEventListener('click', function () {
        amountGamer = window.popup.amountGamer;
        window.deal.dealCard(window.gamerData.user);
        setTimeout(function () {
            window.deal.dealCard(window.gamerData.user);
            window.gamerData.user.currentTransform += 40;
        }, 700);
        setTimeout(function () {
            var itemUserCards = window.gamerData.user.place.querySelectorAll('.item-card');
            [].forEach.call(itemUserCards, function (item) {
                window.card.openCard(item, window.popup.rundom[current], window.gamerData.user);
                current++;
                btnDistribution.disabled = 'disabled';
                return current;
            });
        }, 2200);
        if (amountGamer > 2) {
            window.gamerData.gamers[0].bottom = 60;
            window.gamerData.gamers[1].bottom = 60;
        } else {
            window.gamerData.gamers[0].bottom = 0;
            window.gamerData.gamers[1].bottom = 0;
        }
        for (var i = 0; i < amountGamer; i++) {
            window.deal.dealCardForGamer(window.gamerData.gamers[i]);
        }
    });
    btnStill.addEventListener('click', function () {
        window.gamerData.user.transform += 40;
        window.deal.dealCard(window.gamerData.user);
        setTimeout(function () {
            var newItemUserCards = window.gamerData.user.place.querySelectorAll('.item-card');
            window.card.openCard(newItemUserCards[newItemUserCards.length - 1], window.popup.rundom[current], window.gamerData.user);
            current++;
            return current;
        }, 1000);
        window.total.congratulateUser(window.gamerData.user);
    });

    btnStop.addEventListener('click', function () {
        btnStill.disabled = 'disabled';
        btnStop.disabled = 'disabled';
        window.dealGamer.openCardGemer(current, window.gamerData.gamers, window.popup.rundom, 0);
    });

    [].forEach.call(btnAgain, function (item) {
        item.addEventListener('click', function () {
            item.parentElement.parentElement.classList.remove('show');
            current = 0;
            window.popup.popupAmount.classList.add('show');
            window.gamerData.user.transform = 40;
            window.gamerData.user.sum = 0;
            window.gamerData.gamers.forEach(function (item, i) {
                item.sum = 0;
                if (i === 0 || i === 2) {
                    item.transform = 25;
                } else {
                    item.transform = -25;
                }

            });
            btnDistribution.removeAttribute('disabled');
            btnStill.removeAttribute('disabled');
            btnStop.removeAttribute('disabled');
            var spanUser = document.querySelector('.user-points-block .user-points');
            spanUser.textContent = '0';
            [].forEach.call(gamers, function (item) {
                window.cleanDesk(item);
            });
            return current;
        });
    });

})();