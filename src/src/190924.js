/* $()- документы jquery */
/*
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});
*/

/*
$(document).ready(function () {
    $("button").click(function () {
        $('p').toggle();
    });
});
*/

/*
$(document).ready(function () {
   $("p").text("текст помешенй в jguere")
    $("p").html("<h3>текст помешенй в jguere<h3>");
    $("input").val("Значения поля,установленая в jguere");
     $("p").attrs("style", "font-size:24px;");

     
    $("p").append("Hollo") - Добавление значения в конце тега
    $("p").prepend("Oh, man, J.....") - Добавление значения в начале тега
    $("p").after("div");
    $("p").before("div");
     

    $("p").prepend("Oh, man, J.....");
    $("p").before("<div>Hollo world</div>");
    
    $("p").remove() - удаление дочернего элемента (указаного в методе)
    

    $("p").empty() - удаление все дочерних элементов
    */

   $(document).ready(function () {
    $.ajax({
       url: "https://jsonplaceholder.tupicode.com/todos/1",
       type:"GET",
       success: function(data) {
        fro (key in data) {
            $("#ajaxPictuer").append(key + ":" + data[key] + "<div>");
        }
        
       },
       error: function (error) {
        $("#ajaxPictuer").text(error);
       },
    });
});