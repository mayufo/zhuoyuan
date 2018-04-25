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
            // 滚动
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
            $('.apply').on('click', (e) => {
                $('#resume h4').html(`申请${$(e.currentTarget).parent().find('h5').html()}岗位`)
                $('#resume').attr('recruit', $(e.currentTarget).attr('recruit'))
            })
            // 验证码
            $('.verify').on('input propertychange', (e) => {
                console.log($(e.currentTarget).val())
                if ($(e.currentTarget).val().length === 4) {
                    let formData = new FormData()
                    formData.append('captcha', $(e.currentTarget).val())
                    $.ajax({
                        url: '/captcha.php', // 地址
                        type: 'POST',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false
                    }).done(function(res) {
                       $('#resume').find('.btn-primary').removeClass('disabled')
                    }).fail(function(res) {
                        spop({
                            template: '验证码错误',
                            style: 'error',
                            position  : 'top-center'
                        });
                    });
                }
            })
            // 提交
            $('#resume .btn-primary').on('click', (e) => {
                let formData = new FormData()
                let file = $('#resume').find('input')[0].files[0]
                if (!file) {
                    spop({
                        template: '请上传文件',
                        style: 'error',
                        position  : 'top-center'
                    });
                } else {
                    formData.append('file', file)
                    formData.append('recruit',  $('#resume').attr('recruit'))

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
                }

            })
        },
        scrollInit() {
            this.scrollNav()
            window.onscroll = () => {
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
    }
    controller.init()
}