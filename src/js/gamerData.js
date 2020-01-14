(function () {
    var user =
    {
        place: document.querySelector('.list-player-cards.main-user'),
        animation: 'animation',
        left: 30,
        bottom: 0,
        span: document.querySelector('.user-points'),
        sum: 0,
        transform: 40
    };
    var gamers =
        [{
            place: document.querySelector('.list-player-cards.gamer.first'),
            animation: 'animation-l-t',
            left: 0,
            bottom: 0,
            span: document.querySelector('.player-points.first'),
            sum: 0,
            transform: 25,
            time: 3000
        },
        {
            place: document.querySelector('.list-player-cards.gamer.second'),
            animation: 'animation-r-t',
            left: 88,
            bottom: 0,
            span: document.querySelector('.player-points.second'),
            sum: 0,
            transform: -25,
            time: 4000
        },
        {
            place: document.querySelector('.list-player-cards.gamer.third'),
            animation: 'animation-l-b',
            left: 0,
            bottom: 0,
            span: document.querySelector('.player-points.third'),
            sum: 0,
            transform: 25,
            time: 5000
        },
        {
            place: document.querySelector('.list-player-cards.gamer.fourth'),
            animation: 'animation-r-b',
            left: 88,
            bottom: 0,
            span: document.querySelector('.player-points.fourth'),
            sum: 0,
            transform: -25,
            time: 6000
        }];
    window.gamerData = {
        user: user,
        gamers: gamers
    };
})();