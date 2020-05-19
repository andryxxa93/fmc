window.addEventListener('DOMContentLoaded', function() {

    const slider = () => {
        $('.slider').each(function() {

            let thisSlider = $(this),
                group = thisSlider.find('.slider__items'),
                slides = thisSlider.find('.slider__item'),
                currentSlide = 0,
                navigation = thisSlider.find('.navigation__section'),
                prev = this.querySelector('.prev'),
                next = this.querySelector('.next'),
                timeout;
        
            function move(newSlide) {
    
                let animateLeft, slideLeft;
        
                advance();
        
                if(group.is(':animated') || newSlide == currentSlide) {
                    return;
                }
    
                if(newSlide < 0) {
                    newSlide = (slides.length - 1);
                }
    
                if(newSlide == slides.length) {
                    newSlide = 0;
                }
    
                navigation[currentSlide].classList.remove('active');
                navigation[newSlide].classList.add('active');
        
                if(newSlide > currentSlide) {
                    slideLeft = '130%';
                    animateLeft = '-130%';
                } else {
                    slideLeft = '130%';
                    animateLeft = '-130%';
                }
                slides.eq(newSlide).css({left: slideLeft, display: 'block'});
                group.animate({left: animateLeft}, function() {
                    slides.eq(currentSlide).css({display:'none'});
                    slides.eq(newSlide).css({left:0});
                    group.css({left: 0});
                    currentSlide = newSlide;
                });
            }
        
            function advance() {
                clearTimeout(timeout);
        
                timeout = setTimeout(function() {
                    if(currentSlide < (slides.length -1)) {
                        move(currentSlide + 1);
                    } else {
                        move(0);
                    }
                }, 4000);
            }
    
            for(let i = 0; i < navigation.length; i++) {
                navigation[i].addEventListener('click', (el) => {
                    el.preventDefault();
                    move(i);
                });
            }
    
            prev.addEventListener('click', () => {
                   move(currentSlide - 1);
            });
            next.addEventListener('click', () => {
                    move(currentSlide + 1);
            });
    
            advance();
        });
    };

    const animationIcon = () => {
        
       let startBlock = document.getElementsByClassName('start__block'),
            leftLine = startBlock[0].getElementsByClassName('start__line-left'),
            rightLine = startBlock[0].getElementsByClassName('start__line-right');

            console.log(leftLine);
            console.log(rightLine);

        startBlock[0].addEventListener('mouseover', () => {
             leftLine[0].classList.add('start__line-left_hover');
             rightLine[0].classList.add('start__line-right_hover');
        });
        startBlock[0].addEventListener('mouseout', () => {
            leftLine[0].classList.remove('start__line-left_hover');
            rightLine[0].classList.remove('start__line-right_hover');
       });
    };

    slider();
    animationIcon();

});

