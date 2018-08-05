$('.button').on('touchstart', function () {
    var data = {
        user: $(".user").text(),
        pwd: $(".pwd").text()
    };
    $.ajax({
        type: "POST",
        url: "https://ke.qq.com/user/index/index.html#/plan/cid=272944&term_id=100322548",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        async: true,//false代表只有在等待ajax执行完毕后,再向下执行
        beforeSend: function () {
            //3.让提交按钮失效，以实现防止按钮重复点击
            $("button").attr('disabled', 'disabled');
            console.log('send')
            //4.给用户提供友好状态提示
            $("button").attr('value', '加载中...');
        },

        success: function (dataObj) {
            console.log("成功");
        },
        // error: function (error) {
        //     var e = error;
        //     console.log(error);
        //     // window.location.href = "https://www.baidu.com/"
        // }
    });
});