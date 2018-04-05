{
    let controller = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            this.navInit()
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
        }

    }
    controller.init()
}