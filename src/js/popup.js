(function () {
var wellcom = document.querySelector('.wellcom');
var popupName = document.querySelector('.name-main-user');
var popupAmount = document.querySelector('.amount-users');
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
var nameUser;
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
    nameUser = inputName.value;
    spanName.textContent = inputName.value;
    userName.textContent = inputName.value;
    closePopup(popupName);
    openPopup(popupAmount);
});
btnGamers.addEventListener('click', function () {
    amountGamer = selectAmount.value;
    [].forEach.call(itemPlayers, function (item, i) {
        if(amountGamer >= i+1) {
            item.classList.remove('hidden');
            if(amountGamer > 2) {
                userDesck.style.height = '217px';
            }
        }
        closePopup(popupAmount);
    });
window.popup = {
    amountGamer: amountGamer
}
});
})();