$(function () {
  function stack(text, role) {
    let element = text + "</div>";
    switch (role) {
      case "AI":
        element = `<div class="message ai-message">${element}`;
        break;
      case "user":
        element = `<div class="message user-message">${element}`;
        break;
      default:
        throw new Error("Unsupported role.");
    }
    $("div#message-stacking").append(element);
  }
  $("button#send-button").on("click", function (_e) {
    if ($("input#input-text").val() === "") return;
    stack($("input#input-text").val(), "user");
    $.ajax({
      url: `http://${window.location.hostname}:8001/send`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        input: $("input#input-text").val(),
      }),
      success: function (data) {
        stack(data.text, "AI");
      },
    });
    $("input#input-text").val("");
  });
});
