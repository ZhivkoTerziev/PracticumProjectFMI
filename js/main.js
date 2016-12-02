function loadMovieData(id, title, type, year, plot) {

    var basePath = 'http://www.omdbapi.com/?';

    $.ajax({
        method: "GET",
        url: basePath + 'i=' + id + '&t=' + title + '&type=' + type + '&y=' + year + '&plot=' + plot,
        dataType: "json"
    }).done(function (response) {

        console.log(response);

        var temp = $('#temp').clone();
        temp.css("display", "block");

        temp.find('#tempTitle').text(response.Title.toString());
        temp.find('#tempReleased').html(response.Released.toString());
        temp.find('#tempGenre').html(response.Genre.toString());

        $('#movies').append(temp);

        console.log('done!')
    }).fail(function () {
        console.log('fail!')
    }).always(function () {
        console.log('always!')
    })

}