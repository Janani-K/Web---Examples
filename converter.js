var converter = {};

converter.farenToCel = function(faren){
    var cel = 5/9*(faren-32);
    console.log(cel)
}

module.exports = converter;