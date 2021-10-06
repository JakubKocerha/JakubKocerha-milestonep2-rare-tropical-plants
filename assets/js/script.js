
$(document).ready(function () {
    $('.dropdown-item').click(function () {
        if ($(this).hasClass('philodendron')) {
            alert('hapa');//Here I need the code to see only divs having the class criteria
        } else if ($(this).hasClass('monsteras')) {
            alert('papa');//The same here
        } else if ($(this).hasClass('syngonium')) {
            alert('hobo');//The same here
        } else {
            alert('hura');//Here I need a default sequence of all divs.
        }
    });
});
