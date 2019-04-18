let slider = document.querySelector('.slider'),
    sliderSlide = document.querySelectorAll('.slide'),
    sliderBullets = document.querySelectorAll('.bullet'),
    leftArrow = document.querySelector('.left-arrow'),
    rightArrow = document.querySelector('.right-arrow'),
    indexSlide = 1,
    currentPx,
    currentBullet,
    currentPaginationNumber = document.querySelector('.pagination-number span'),
    nextButtonOne = document.querySelector('.form-block1 .button'),
    nextButtonTwo = document.querySelector('.form-block2 .button'),
    nextButtonThree = document.querySelector('.form-block3 .button'),
    nextButtonFour = document.querySelector('.form-block4 .submitButton'),
    formOne = document.querySelector('.form1'),
    formTwo = document.querySelector('.form2'),
    formThree = document.querySelector('.form3'),
    formFour = document.querySelector('.form4'),
    formOneOne = document.querySelector('.form11'),
    formTwoTwo = document.querySelector('.form22'),
    formThreeThree = document.querySelector('.form33'),
    formFourFour = document.querySelector('.form44'),
    questionSuccess = document.querySelector('.question-success'),
    questionBlockText = document.querySelector('.question-block-text'),
    popupClosebutton = document.querySelector('.popup-close-button'),
    questionBlockForm = document.querySelector('.question-block-form');

sliderBullets.forEach(function(sliderBulletsEl, index){

    sliderBulletsEl.addEventListener('click', function(){
        sliderBullets.forEach(function(sliderBulletsActiveEl, index){
            sliderBulletsActiveEl.classList.remove('active');
        });
        this.classList.add('active');

        if(window.innerWidth > 1401){
            slider.style.transform = 'translate(-'+ 1370*index + 'px)';
        }else if(window.innerWidth <= 1400 && window.innerWidth > 1120){
            slider.style.transform = 'translate(-'+ 1120*index + 'px)';
        }else if(window.innerWidth <= 1120 && window.innerWidth > 980){
            slider.style.transform = 'translate(-'+ 980*index + 'px)';
        }else if(window.innerWidth <= 980 && window.innerWidth > 800){
            slider.style.transform = 'translate(-'+ 800*index + 'px)';
        }else if(window.innerWidth <= 800 && window.innerWidth > 600){
            slider.style.transform = 'translate(-'+ 600*index + 'px)';
        }else if(window.innerWidth <= 600 && window.innerWidth == window.innerWidth){
            slider.style.transform = 'translate(-'+ window.innerWidth*index + 'px)';
        }

        currentPaginationNumber.innerHTML = '0' + (index + 1);
        indexSlide = index + 1;

        if(window.innerWidth > 1401){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = 1370;
            }else if(indexSlide == 3){
                currentPx = 2740;
            }else if(indexSlide == 4){
                currentPx = 4110;
            }
        }else if(window.innerWidth <= 1400 && window.innerWidth > 1120){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = 1120;
            }else if(indexSlide == 3){
                currentPx = 2240;
            }else if(indexSlide == 4){
                currentPx = 3360;
            }
        }else if(window.innerWidth <= 1120 && window.innerWidth > 980){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = 980;
            }else if(indexSlide == 3){
                currentPx = 1960;
            }else if(indexSlide == 4){
                currentPx = 2940;
            }
        }else if(window.innerWidth <= 980 && window.innerWidth > 800){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = 800;
            }else if(indexSlide == 3){
                currentPx = 1600;
            }else if(indexSlide == 4){
                currentPx = 2400;
            }
        }else if(window.innerWidth <= 800 && window.innerWidth > 600){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = 600;
            }else if(indexSlide == 3){
                currentPx = 1200;
            }else if(indexSlide == 4){
                currentPx = 1800;
            }
        }else if(window.innerWidth <= 600 && window.innerWidth == window.innerWidth){
            if(indexSlide == 1){
                currentPx = 0;
            }else if(indexSlide == 2){
                currentPx = window.innerWidth * 1;
            }else if(indexSlide == 3){
                currentPx = window.innerWidth * 2;
            }else if(indexSlide == 4){
                currentPx = window.innerWidth * 3;
            }
        }
    });
    
});

leftArrow.addEventListener('click', function(){
    
    if(window.innerWidth > 1401){
        if(currentPx < 1370){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - 1370;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }else if(window.innerWidth <= 1400 && window.innerWidth > 1120){
        if(currentPx < 1120){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - 1120;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }else if(window.innerWidth <= 1120 && window.innerWidth > 980){
        if(currentPx < 980){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - 980;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }else if(window.innerWidth <= 980 && window.innerWidth > 800){
        if(currentPx < 800){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - 800;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }else if(window.innerWidth <= 800 && window.innerWidth > 600){
        if(currentPx < 600){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - 600;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }else if(window.innerWidth <= 600 && window.innerWidth == window.innerWidth){
        if(currentPx < window.innerWidth){
            slider.style.transform = 'translate(-'+ 0 + 'px)';
            currentPx = 0;
            indexSlide = 1;
            currentBullet = indexSlide;
        }else{
            currentPx = currentPx - window.innerWidth;
            slider.style.transform = 'translate(-'+ currentPx + 'px)';
            indexSlide--;
            currentBullet = indexSlide;
        }
    }

    

    sliderBullets.forEach(function(sliderBulletsActiveEl, index){
        sliderBulletsActiveEl.classList.remove('active');
    });
    sliderBullets[currentBullet - 1].classList.add('active');

    currentPaginationNumber.innerHTML = '0' + indexSlide;
});

rightArrow.addEventListener('click', function(){

    if(window.innerWidth > 1401){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ 1370*indexSlide + 'px)';
            currentPx = 1370*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ 4110 + 'px)';
        }
    }else if(window.innerWidth <= 1400 && window.innerWidth > 1120){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ 1120*indexSlide + 'px)';
            currentPx = 1120*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ 3360 + 'px)';
        }
    }else if(window.innerWidth <= 1120 && window.innerWidth > 980){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ 980*indexSlide + 'px)';
            currentPx = 980*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ 2940 + 'px)';
        }
    }else if(window.innerWidth <= 980 && window.innerWidth > 800){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ 800*indexSlide + 'px)';
            currentPx = 800*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ 2400 + 'px)';
        }
    }else if(window.innerWidth <= 800 && window.innerWidth > 600){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ 600*indexSlide + 'px)';
            currentPx = 600*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ 1800 + 'px)';
        }
    }else if(window.innerWidth <= 600 && window.innerWidth == window.innerWidth){
        if(indexSlide <= 3){
            slider.style.transform = 'translate(-'+ window.innerWidth*indexSlide + 'px)';
            currentPx = window.innerWidth*indexSlide;
            indexSlide++;
            currentBullet = indexSlide;
        }else{
            slider.style.transform = 'translate(-'+ window.innerWidth + 'px)';
        }
    }

    

    sliderBullets.forEach(function(sliderBulletsActiveEl, index){
        sliderBulletsActiveEl.classList.remove('active');
    });
    sliderBullets[currentBullet - 1].classList.add('active');

    currentPaginationNumber.innerHTML = '0' + indexSlide;
});

nextButtonOne.addEventListener('click', function(){
    formOne.style.display = 'none';
    formTwo.style.display = 'block';
    formOneOne.style.display = 'none';
    formTwoTwo.style.display = 'block';
});

nextButtonTwo.addEventListener('click', function(){
    formTwo.style.display = 'none';
    formThree.style.display = 'block';
    formTwoTwo.style.display = 'none';
    formThreeThree.style.display = 'block';
});

nextButtonThree.addEventListener('click', function(){
    formThree.style.display = 'none';
    formFour.style.display = 'block';
    formThreeThree.style.display = 'none';
    formFourFour.style.display = 'block';
});

nextButtonFour.addEventListener('click', function(){
    formFour.style.display = 'none';
    formFourFour.style.display = 'none';
    questionBlockText.style.display = 'none';
    questionSuccess.style.display = 'block';
    questionBlockForm.style.display = 'none';
});

popupClosebutton.addEventListener('click', function(){
    questionSuccess.style.display = 'none';
    questionBlockForm.style.display = 'block';
    formOne.style.display = 'block';
    formOneOne.style.display = 'block';
    questionBlockText.style.display = 'block';

    return false;
});