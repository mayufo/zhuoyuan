{
    let controller = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            this.navInit()
            this.slideInit()
            this.featureInit()
            this.applicationInit()
            this.scrollInit()
        },
        navInit () {
            // 当有子菜单的时候显示icon
            $('.nav-item').has('.children-list').find('i').show()

            $('.nav > li').on('click', function (e) {
                $(e.currentTarget).siblings().removeClass('active')
                $(e.currentTarget).addClass('active')
                let el = $(e.currentTarget)
                $(document).one("click", function(){
                    el.removeClass('active');
                });

                e.stopPropagation();
            });
            // $('.nav > li').on('mouseleave', function (e) {
            //     $(e.currentTarget).removeClass('active')
            // })
        },
        slideInit () {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2000,
                },
                loop : true
            });
        },
        featureInit () {
            $('.feature li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
            $('.feature li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
        },
        applicationInit () {
            $('.application li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
            $('.application li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
        },
        scrollInit() {
            this.scrollFn()
            window.onscroll = () => {
                this.scrollFn()
                if (window.scrollY > 30) {
                    $('nav').css({'position': 'fixed', 'top': '0'})
                } else {
                    $('nav').css({'position': 'absolute', 'top': '30px'})
                }
            }
        },
        scrollFn () {
            let scroll = $('[data-scroll]')
            if (scroll) {
                let index = 0;
                for (let i = 0, item = $('[data-scroll]'); i < item.length; i++) {
                    if (Math.abs(item[i].offsetTop - window.scrollY) < Math.abs(item[index].offsetTop - window.scrollY - 600)) {
                        index = i;
                    }
                }
                $(scroll[index]).addClass('scroll')
            }
        }
    }
    controller.init()
}