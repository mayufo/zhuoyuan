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
                $(e.currentTarget).toggleClass('active')
                let el = $(e.currentTarget)
                $(document).one("click", function(){
                    el.removeClass('active');
                });

                e.stopPropagation();
            });
            $('.nav > li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
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
            if (window.scrollY === 0) {
                this.scrollFn()
            } else {
                for (let i = 0, item = $('[data-scroll]'); i < item.length; i++) {
                    item.eq(i).addClass('scroll')
                }
            }
            this.scrollNav()

            window.onscroll = () => {
                this.scrollFn()
                this.scrollNav()
            }
        },
        scrollNav () {
            $('.nav-wrap').prepend($('<div class="nav-background"></div>'))
            if (window.scrollY > 30) {
                $('.nav-wrap').addClass('suspension')
                $('.nav-background').show()
            } else {
                $('.nav-wrap').removeClass('suspension')
                $('.nav-background').hide()

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