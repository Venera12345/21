(function () {
    window.cardsData = [
        {
          class: 'six-b',
          point: 6
        },
        {
          class: 'seven-b',
          point: 7
        },
        {
          class: 'eight-b',
          point: 8
        },
        {
          class: 'nine-b',
          point: 9
        },
        {
          class: 'ten-b',
          point: 10
        },
        {
          class: 'jb',
          point: 2
        },
        {
          class: 'lb',
          point: 3
        },
        {
          class: 'kb',
          point: 4
        },
        {
          class: 'ab',
          point: 11
        },
        {
          class: 'six-t',
          point: 6
        },
        {
          class: 'seven-t',
          point: 7
        },
        {
          class: 'eight-t',
          point: 8
        },
        {
          class: 'nine-t',
          point: 9
        },
        {
          class: 'ten-t',
          point: 10
        },
        {
          class: 'jt',
          point: 2
        },
        {
          class: 'lt',
          point: 3
        },
        {
          class: 'kt',
          point: 4
        },
        {
          class: 'at',
          point: 11
        },
        {
          class: 'six-p',
          point: 6
        },
        {
          class: 'seven-p',
          point: 7
        },
        {
          class: 'eight-p',
          point: 8
        },
        {
          class: 'nine-p',
          point: 9
        },
        {
          class: 'ten-p',
          point: 10
        },
        {
          class: 'jp',
          point: 2
        },
        {
          class: 'lp',
          point: 3
        },
        {
          class: 'kp',
          point: 4
        },
        {
          class: 'ap',
          point: 11
        },
        {
          class: 'six-h',
          point: 6
        },
        {
          class: 'seven-h',
          point: 7
        },
        {
          class: 'eight-h',
          point: 8
        },
        {
          class: 'nine-h',
          point: 9
        },
        {
          class: 'ten-h',
          point: 10
        },
        {
          class: 'jh',
          point: 2
        },
        {
          class: 'lh',
          point: 3
        },
        {
          class: 'kh',
          point: 4
        },
        {
          class: 'ah',
          point: 11
        },
      ];
      window.createRandomPhoto = function (min, max) {
        var numReserve = [];
        while (numReserve.length < 36) {
          var randomNumber = Math.floor(Math.random() * (max - min)) + min;
          var found = false;
          for (var i = 1; i < numReserve.length; i++) {
            if (numReserve[i] === randomNumber) {
              found = true;
              break;
            }
          }
          if (!found) {
            numReserve[numReserve.length] = randomNumber;
          }
        }
        return numReserve;
      };
      window.run = window.createRandomPhoto(1, 36);
      
})();