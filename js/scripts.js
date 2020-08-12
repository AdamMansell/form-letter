$(document).ready(function(){
  $("#formName").submit(function(event) {
    const userName = $("input#name").val();

    $(".name").text(userName);

    $("#letter").show();

    event.preventDefault();
  });
});