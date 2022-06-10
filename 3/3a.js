function silnia(n) {
    let liczba = 1;
    if (n == 0 || n == 1) {
        return liczba;
    } else {
        for (var i = n; i >= 1; i--) {
            liczba = liczba * i;
        }
        return liczba;
    }
}

let n = 4;
liczba = silnia(n)
console.log("Silnia z " + n + " to " + liczba);
// ------------------------------------------
let silnia_rekurencja = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * silnia_rekurencja(n - 1);
    }
}
let m = 4;
liczba_rekurencja = silnia_rekurencja(n)
console.log("Silnia z " + n + " to " + liczba);