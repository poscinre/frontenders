// 헤더
{
    const scrollHeader = () =>{
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        this.scrollY >= 50 ? header.classList.add('scroll-header') 
                        : header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
}


// 슬라이드
{
    const $indicators = document.querySelectorAll('.cont3>div>.tour-container>p');
    const $container = document.querySelector('.cont3>div>.tour-container');
    const $btnPrev = document.querySelector('.cont3>div>.prev');
    const $btnNext = document.querySelector('.cont3>div>.next');

    let nowIdx = 0; 

    $btnPrev.addEventListener('click',function(evt){
        evt.preventDefault();
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=4;
        }
        $container.style.left = -350*nowIdx + 'px';

        $indicators.forEach(function(anchor,actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    })

    $btnNext.addEventListener('click',function(evt){
        evt.preventDefault();

        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        $container.style.left = -350*nowIdx + 'px';

        $indicators.forEach(function(anchor,actIdx){
            anchor.parentElement.classList.toggle('on',actIdx===nowIdx);
        });
    })
}

// 커뮤니티
{
    const accordionItems = document.querySelectorAll('.value__accodion-item');

    accordionItems.forEach((item) => {
        const accordionHeader = item.querySelector('.value__accordion-header');

        accordionHeader.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-open')

            toggleItem(item)
            
            if(openItem && openItem!== item){
                toggleItem(openItem)
            }
        })
    })

    const toggleItem = (item) => {
        const accordionContent = item.querySelector('.value__accordion-content');

        if(item.classList.contains('accordion-open')){
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open')
        }else{
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open');
        }
    }
}


// 스크롤에 따른 메뉴
{
    const sections = document.querySelectorAll('section[id]')
    
    const scrollActive = () =>{
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }                                                    
        })
    }
    window.addEventListener('scroll', scrollActive)
}

// 맨위로
{
    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
}


// 다크모드
{
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

