function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function (a, b) { return b.length - a.length; });
    return longestWord[0];
}

let result = findLongestWord("Katana jest to jednosieczna japońska broń biała o zakrzywionej głowni długości przynajmniej 60 cm i ściętym sztychu (kissaki). Z technicznego punktu widzenia jest to szabla (wygięta i jednosieczna głownia). W języku angielskim mianem sword (miecz) określa się potocznie każdy rodzaj broni białej, który posiada długą głownię osadzoną w rękojeści, przez co nazewnictwo katany w języku angielskim jako japanese sword (japoński miecz) lub samurai sword (miecz samuraja) spopularyzowało w polskich tłumaczeniach zwrot „miecz japoński” lub „miecz samurajski”, pomimo tego, że ze względu na swoją budowę katana nie jest mieczem.");
console.log(result);