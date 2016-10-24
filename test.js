function derp() {
    console.log("****" + i);
    for (var i = 0; i < 9; i++) {

    }
    console.log(i);
}

var movie = "outer movie";

function tst() {
    var movie = "****** tst movie ";
    console.log(movie);

    if (true) {
        var movie = "if movie";
        console.log(movie);
    }

    console.log(movie);
}

console.log(movie);
