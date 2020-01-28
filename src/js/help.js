window.help = function () {
    var template = document.querySelector('#help').content;
    var elementHelp = template.querySelector('.help');
    var deck = document.querySelector('.deck');
    var placeForMore = document.querySelector('.footer');
    var getHelp = function(place, str, classElementAnimation, classElement) {
        var element = elementHelp.cloneNode(true);
        element.classList.add(classElementAnimation);
        element.classList.add(classElement);
        var text = element.querySelector('.text-help');
        text.textContent = str;
        place.appendChild(element);  
    }
    getHelp(deck, 'Push button, that cards distribution players', 'animation-help');
    setTimeout(function(){   
        var helpDistribution = document.querySelector('.animation-help');     
        helpDistribution.parentNode.removeChild(helpDistribution);
        getHelp(placeForMore, 'If you need more, push this button', 'animation-help-more', 'help-more');
    }, 5000);
    setTimeout(function(){   
        var helpMore = document.querySelector('.help-more');     
        helpMore.parentNode.removeChild(helpMore);
        getHelp(placeForMore, 'When you will finish to set points, push on button and you know points other gamers', 'animation-help-more', 'help-stop');
    }, 9000);
    setTimeout(function(){   
        var helpStop = document.querySelector('.help-stop');     
        helpStop.parentNode.removeChild(helpStop);
    }, 14000);
    
};