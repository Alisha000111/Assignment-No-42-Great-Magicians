var magicians = ['alisha', 'tania', 'ifra'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the great" + magicians[i];
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
