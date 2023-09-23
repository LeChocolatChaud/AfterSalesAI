$(function(){$("button#send-button").on("click", function(_e) {
    $.ajax({
        url: `http://${window.location.hostname}:8001/send`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            "input": $("textarea#input-text").val()
        }),
        success: function(data) {
            $("textarea#output-text").val(data.text);
        }
    });
});});