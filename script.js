const burger = document.querySelector('.burger');
        const menu = document.querySelector('.header-menu');

        if (burger && menu) {
            burger.addEventListener('click', () => {
                menu.classList.toggle('header-menu--open');
                document.body.classList.toggle('no-scroll'); // для блокировки скролла на мобиле
            });

            menu.addEventListener('click', (event) => {
                if (event.target.tagName === 'A') {
                    menu.classList.remove('header-menu--open');
                    document.body.classList.remove('no-scroll');
                }
            });
        }