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

            $('.nav > li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
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
                }
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
            }
        },
        scrollFn () {
            let scroll = $('[data-scroll]')
            let index = 0;
            console.log(window.scrollY)
            for (let i = 0, item = $('[data-scroll]'); i < item.length; i++) {
                if (Math.abs(item[i].offsetTop - window.scrollY) < Math.abs(item[index].offsetTop - window.scrollY)) {
                    index = i;
                }
            }
            $(scroll[index]).addClass('scroll')
        }
    }
    controller.init()
}