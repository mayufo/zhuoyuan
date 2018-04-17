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
            for (let i =0; i < $('.recruitment-content-brief').length; i++) {
                $('.recruitment-content-brief').eq(i).html($('.recruitment-content-detail').eq(i).html().replace(/<[^>]+>/g, ''))
            }

            $('.recruitment-list').on('click', '.describe-close ', (e) => {
                $(e.currentTarget).hide().siblings('.describe-open').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-detail').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-brief').hide()

            })
            $('.recruitment-list').on('click', '.describe-open ', (e) => {
                $(e.currentTarget).hide().siblings('.describe-close').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-brief').show()
                $(e.currentTarget).parent().parent().find('.recruitment-content-detail').hide()

            })
            $('.apply').on('change', (e) => {
                let formData = new FormData()
                let file = $(e.currentTarget).find('input')[0].files[0]
                formData.append('file', file)

                $.ajax({
                    url: '/upload', // 地址
                    type: 'POST',
                    cache: false,
                    data: formData,
                    processData: false,
                    contentType: false
                }).done(function(res) {
                    spop({
                        template: '上传成功',
                        style: 'success',
                        autoclose: 5000,
                        position  : 'top-center'
                    });
                }).fail(function(res) {
                    spop({
                        template: '上传失败',
                        style: 'error',
                        position  : 'top-center'
                    });
                });

            })
        }


    }
    controller.init()
}