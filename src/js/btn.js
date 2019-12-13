(function () {
    var btnDistribution = document.querySelector('.btn-distribution');
    var btnStill = document.querySelector('.btn-still');
    var btnStop = document.querySelector('.btn-stop');
    var current = 0;
    var currentTransform = 40;
    var currentTransformGamerLeft = 25;
    var currentTransformGamerRight = -25;
    var rundom;
    var amountGamer;
   

    setTimeout(function () {
        rundom = window.run;
        return rundom;
    }, 1000);

    var dealCardForGamer = function (user, Transform, time) {
        setTimeout(function () {
            window.deck.dealCard(user, Transform);
            setTimeout(function () {
                window.deck.dealCard(user, Transform);
            }, 500);
        }, time);
    };

    btnDistribution.addEventListener('click', function () {
        amountGamer = window.popup.amountGamer;
        window.deck.dealCard(window.gamerData.user, currentTransform);
        setTimeout(function () {
            window.deck.dealCard(window.gamerData.user, currentTransform);
            currentTransform += 40;
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
        var time = 3000;
        var timeSecond = time + 1000;
        var timeThird = timeSecond + 1000;
        var timeFourth = timeThird + 1000;
        if (amountGamer == 2) {
            dealCardForGamer( window.gamerData.secondGamer, currentTransformGamerRight, timeSecond);
        } else if (amountGamer == 3) {
            firstGamer.bottom = 60;
            secondGamer.bottom = 60;
            dealCardForGamer(window.gamerData.secondGamer, currentTransformGamerRight, timeSecond);
            dealCardForGamer(window.gamerData.thirdGamer, currentTransformGamerLeft, timeThird);
        } else if (amountGamer == 4) {
            firstGamer.bottom = 60;
            secondGamer.bottom = 60;
            dealCardForGamer(window.gamerData.secondGamer, currentTransformGamerRight, timeSecond);
            dealCardForGamer(window.gamerData.thirdGamer, currentTransformGamerLeft, timeThird);
            dealCardForGamer(window.gamerData.fourthGamer, currentTransformGamerRight, timeFourth);
        }
        dealCardForGamer(window.gamerData.firstGamer, currentTransformGamerLeft, time);
        return amountGamer;
    });
    btnStill.addEventListener('click', function () {
        window.deck.dealCard(window.gamerData.user, currentTransform);
        currentTransform += 40;
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
        window.dealGamer.openCardGemer(current, window.gamerData.firstGamer, rundom, currentTransformGamerLeft);
            ;
    });

})();