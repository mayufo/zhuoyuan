{
    let controller = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            this.navInit()
            this.applyInit()
            this.newInit()
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
        applyInit () {
            $('.apply-wrap > li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
            $('.apply-wrap > li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
        },
        newInit () {
            $('.new-wrap > li').on('mouseenter', function (e) {
                $(e.currentTarget).addClass('active')
            })
            $('.new-wrap > li').on('mouseleave', function (e) {
                $(e.currentTarget).removeClass('active')
            })
        }

    }
    controller.init()
}