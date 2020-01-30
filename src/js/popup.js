(function () {
    var wellcom = document.querySelector('.wellcom-wrapper');
    var popupName = document.querySelector('.name-main-user-wrapper');
    var popupAmount = document.querySelector('.amount-users-wrapper');
    var btnBegin = document.querySelector('.begin');
    var btnName = document.querySelector('.name-btn');
    var inputName = document.querySelector('.input-btn');
    var spanName = document.querySelector('.text-name-js');
    var btnGamers = document.querySelector('.gamers-btn');
    var selectAmount = document.querySelector('.amount');
    var itemPlayers = document.querySelectorAll('.item-player');
    var userName = document.querySelector('.user-name');
    var userDesck = document.querySelector('.user .list-player-cards');
    var amountGamer;
    var rundom;
    var current = 1;
    var openPopup = function (item) {
        item.classList.add('show');
    };
    var closePopup = function (item) {
        item.classList.remove('show');
    };
    openPopup(wellcom);
    btnBegin.addEventListener('click', function () {
        closePopup(wellcom);
        openPopup(popupName);
    });
    btnName.addEventListener('click', function () {
        spanName.textContent = inputName.value;
        userName.textContent = inputName.value;
        closePopup(popupName);
        openPopup(popupAmount);
    });
    btnGamers.addEventListener('click', function () {
        amountGamer = selectAmount.value;
        if(current === 1){
          window.help();
          current++;
        }
        [].forEach.call(itemPlayers, function (item, i) {
            if (amountGamer >= i + 1) {
                item.classList.remove('hidden');
                if (amountGamer > 2) {
                    userDesck.style.height = '217px';
                } else {
                    userDesck.style.height = '320px';
                }
            }
            closePopup(popupAmount);
            rundom = window.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0]);
            return rundom;
        });
        window.popup = {
            amountGamer: amountGamer,
            rundom: rundom,
            popupAmount: popupAmount
        }
    });
    
})();