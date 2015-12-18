var main = function() {
    $.getJSON('json/test.json', function(data){
        var items = [];

        $.each(data, function(key, val){
            items.push(val);
        });

        $('<h2>', {
            'class': 'capital1',
            html: items[0]
        }).appendTo('.project-name1');

        $('<p>', {
            'class': 'text1',
            html: items[1]
        }).appendTo('.project-text1');

        $('<img>', {
            'src': items[2],
            'class': 'logo1'
        }).appendTo('.logo-project1');

        $('<h2>', {
            'class': 'capital2',
            html: items[3]
        }).appendTo('.project-name2');

        $('<p>', {
            'class': 'text2',
            html: items[4]
        }).appendTo('.project-text2');

        $('<img>', {
            'src': items[5],
            'class': 'logo2'
        }).appendTo('.logo-project2');
    });

        $('#but1').click(function() {
            $('.project1').fadeOut(300);
        });

        $('#but2').click(function() {
            $('.project2').fadeOut(300);
        });
}

$(document).ready(main);