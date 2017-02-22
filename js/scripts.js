// plik scripts.js

var name = prompt('Wpisz swoje imię');
// komentarz dot alert
alert('Witaj, ' + name);
//zadanie 8.3
// dodatkowe 2 komentarze
console.log('Witaj, ' + name);


//Triangle

var a = prompt('Wpisz długość podstawy trójkąta w cm: ');
	h = prompt('Wpisz wysokość trójkąta w cm: ');
	triangleArea = a * h / 2;
alert('Pole Twojego trójkąta wynosi ' + triangleArea);
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log('Wynik = ' + triangleArea)


//zadanie 8.5
var a = prompt('Podaj liczbę "a"');
	b = prompt('Podaj liczbę "b"');
	value = (a * a) + (2 * a * b) - (b * b);
alert('Wnik działania (a * a) + (2 * a * b) - (b * b) = ' + value);
console.log('Wynik = ' + value)

if (value > 0) {
	console.log('wynik dodatni')
} else if (value = 0) {
	console.log('wynik = ' + 0)
} else {
	console.log('wynik ujemny')
}