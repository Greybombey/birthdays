$(document).ready(function(){
    $( ".datepicker" ).datepicker({
        dateFormat: "dd.mm.yy"
    });
    $(function(){
        $( ".datepicker").datepicker();
    });
    // по клику сабмит формы проверяем корректность(описано методом validateform)
    $("form").on("submit", function(event){
       if(validateForm()) {
           event.preventDefault(); //если возвращает True(ошибки есть) не дает принять форму
       }
    });


    //возвращает true, если поля некорректно заполнены
    function validateForm(){

        $(".text-error").remove();
        // проверка на непустое имя
        var res1 = false;
        var name = $("#name");
        if(name.val().length < 1)
        {
            res1 = true;
            name.after('<span class="text-error for-login">Пустое имя!</span>');
        }

        //проверка даты на соответствие стандарту dd.mm.yyyy
        var res2 = false;

        // parse date by id
        var date = $("#date");

        //get numbers from input and make them yyyy-mm-dd
        var str = date.val().split(".");
        var intDate = str[2]+'-'+(str[1])+'-'+str[0];

        //check if data basicly valid
        var newDate = new Date(intDate);
        if(newDate == 'Invalid Date'){
            res2 = true;
            date.after('<span class="text-error for-date">Неверная дата!</span>');
        }
        //check if date is correct for given  month
        else if (str[2] != newDate.getFullYear() | str[1] != (parseInt(newDate.getMonth())+1) | str[0] != newDate.getDate()){

            res2 = true;
            date.after('<span class="text-error for-date">В этом месяце нет такого числа!</span>');
        }

        //if date correct - do nothing
        return (res1 | res2);
    }
});