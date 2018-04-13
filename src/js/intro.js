{
    let controller = {
        init () {
            this.bindEvent()
        },
        bindEvent () {
            // 导航初始化
            this.navInit()
            // 行业应用初始化
            this.applyInit()
            // 新闻初始化
            this.newInit()
            // 发展初始化
            this.developmentInit()
            // 招聘初始化
            this.recruitmentInit()
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
                if ($('.new-wrap > li').index(this) > 2) {
                    $(e.currentTarget).addClass('active')
                }
            })
            $('.new-wrap > li').on('mouseleave', function (e) {
                if ($('.new-wrap > li').index(this) > 2) {
                    $(e.currentTarget).removeClass('active')
                }
            })
        },
        developmentInit () {
            $('.development .page-content').css('height', $('.page-content').height() + 20)
        },
        recruitmentInit () {
            $('.recruitment-content-brief').html($('.recruitment-content-detail').html().replace(/<[^>]+>/g, ''))
            $('.recruitment-list').on('click', '.describe-close ', (e) => {
                $(e.currentTarget).hide().parent().find('.describe-open').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-detail').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-brief').hide()
            })
            $('.recruitment-list').on('click', '.describe-open ', (e) => {
                $(e.currentTarget).hide().parent().find('.describe-close').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-brief').show()
                $(e.currentTarget).hide().parent().parent().find('.recruitment-content-detail').hide()

            })
        }


    }
    controller.init()
}