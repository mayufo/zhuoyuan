init ()

function init() {
    bindEvent()
}

function bindEvent() {
    // 导航初始化
    navInit()
    // 行业应用初始化
    applyInit()
    // 新闻初始化
    newInit()
    // 发展初始化
    developmentInit()
    // 招聘初始化
    recruitmentInit()
    // 滚动
    scrollInit()
}


function navInit () {
    // 当有子菜单的时候显示icon
    $('.nav-item').has('.children-list').find('i').show()

    $('.nav > li').on('click', function (e) {
        $(e.currentTarget).siblings().removeClass('active')
        $(e.currentTarget).toggleClass('active')
        var el = $(e.currentTarget)
        $(document).one("click", function(){
            el.removeClass('active');
        });

        e.stopPropagation();
    });
    $('.nav > li').on('mouseleave', function (e) {
        $(e.currentTarget).removeClass('active')
    })
}
function applyInit () {
    $('.apply-wrap > li').on('mouseenter', function (e) {
        $(e.currentTarget).addClass('active')
    })
    $('.apply-wrap > li').on('mouseleave', function (e) {
        $(e.currentTarget).removeClass('active')
    })
}
function newInit () {
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
}
function developmentInit () {
    $('.development .page-content').css('height', $('.page-content').height() + 20)
}
function recruitmentInit () {
    for (var i =0; i < $('.recruitment-content-brief').length; i++) {
        $('.recruitment-content-brief').eq(i).html($('.recruitment-content-detail').eq(i).html().replace(/<[^>]+>/g, ''))
    }

    $('.recruitment-list').on('click', '.describe-close ', function(e) {
        $(e.currentTarget).hide().siblings('.describe-open').show()
        $(e.currentTarget).parent().parent().find('.recruitment-content-detail').show()
        $(e.currentTarget).parent().parent().find('.recruitment-content-brief').hide()

    })
    $('.recruitment-list').on('click', '.describe-open ', function (e) {
        $(e.currentTarget).hide().siblings('.describe-close').show()
        $(e.currentTarget).parent().parent().find('.recruitment-content-brief').show()
        $(e.currentTarget).parent().parent().find('.recruitment-content-detail').hide()

    })
    $('.apply').on('click', function (e) {
        $('#resume h4').html('申请'+ $(e.currentTarget).parent().find('h5').html()+ '岗位')
        $('#resume').attr('recruit', $(e.currentTarget).attr('recruit'))
    })
    // 验证码
    $('.verify').on('input propertychange', function(e) {
        console.log($(e.currentTarget).val())
        if ($(e.currentTarget).val().length === 4) {
            var formData = new FormData()
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
    $('#resume .btn-primary').on('click', function (e) {
        var formData = new FormData()
        var file = $('#resume').find('input')[0].files[0]
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
}
function scrollInit() {
    this.scrollNav()
    $('.nav-wrap').prepend($('<div class="nav-background"></div>'))

    window.onscroll = function () {
        this.scrollNav()
    }
}
function scrollNav () {
    if (window.scrollY > 30) {
        $('.nav-wrap').addClass('suspension')
        $('.nav-background').show()
    } else {
        $('.nav-wrap').removeClass('suspension')
        $('.nav-background').hide()

    }
}