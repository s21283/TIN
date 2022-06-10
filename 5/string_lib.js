exports.string_1 = function(){
    response.end("You came to the wrong neighbourhood!");
}

exports.string_2 = function(){
    response.end("Hasta la vista, baby!");
}

exports.string_3 = function(){
    response.end("May the force be with you.");
}

exports.string_4 = function(){
    response.end("Say hello to my little friend!");
}

exports.string_5 = function(){
    response.end("Show me the money!");
}

exports.string_6 = function(){
    response.end("Go ahead, make my day.");
}

 exports.string_randomizer = function (){
     return "string_" + Math.floor(Math.random()*(6)+1);
}