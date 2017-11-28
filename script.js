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
        var date = $("#date");
        var str = date.val().split(".");
        /*var day = str[0]+str[1];
        var month = str[3]+str[4];
        var year = str[6]+str[7]+ str[8]+str[9]
        if(parseInt(day)>31 | parseInt(month)>12 | parseInt(year)>2020)
        {
            res2 = true;
            date.after('<span class="text-error for-date">Неверная дата!</span>');

        }*/
        //надо доработать валидацию даты, try не работает https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
        try {
            if new Date(parseInt(str[2]), parseInt(str[1]), parseInt(str[0]));
            alert("Try gonna try!");

        } catch(err) {
            res2 = true;
            date.after('<span class="text-error for-date">Неверная дата!</span>');
            alert(newDate+"ГОД "+str[2]+"\nМесяц "+str[1]+"\nДень "+str[0]);
        }
        return (res1 | res2);
    }
});