// plik scripts.js

//var name = prompt('Wpisz swoje imię');
// komentarz dot alert
//alert('Witaj, ' + name);
//zadanie 8.3
// dodatkowe 2 komentarze
//console.log('Witaj, ' + name);


//Triangle

//var a = prompt('Wpisz długość podstawy trójkąta w cm: ');
//	h = prompt('Wpisz wysokość trójkąta w cm: ');
//	triangleArea = a * h / 2;
//alert('Pole Twojego trójkąta wynosi ' + triangleArea);
//console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
//console.log('Wynik = ' + triangleArea)


//zadanie 8.5
//var a = prompt('Podaj liczbę "a"');
//	b = prompt('Podaj liczbę "b"');
//	value = (a * a) + (2 * a * b) - (b * b);
//alert('Wnik działania (a * a) + (2 * a * b) - (b * b) = ' + value);
//console.log('Wynik = ' + value)

//if (value > 0) {
//	console.log('wynik dodatni')
//} else if (value = 0) {
//	console.log('wynik = ' + 0)
//} else {
//	console.log('wynik ujemny')
//}

//zadanie 8.6

//var a = prompt('Podaj w cm długość podstawy Twojego trójkąta: ');
//	h = prompt('Podaj w cm wysokość Twojego trójkąta: ');
//	triangle0Area = getTriangleArea(a, h);
//	triangle1Area = getTriangleArea(10, 32);
//	triangle2Area = getTriangleArea(3, 342);
//	triangle3Area = getTriangleArea(23, 352);
//
//	function getTriangleArea(a, h) {
//
//		if (a <= 0 || h <= 0) {
//			alert('Uknown Data');	
//		} 
//		
//		return a * h / 2;
//}

//getTriangleArea(triangle0Area);
//console.log('Pole twojego trójkąta wynosi: ' + triangle0Area);

//getTriangleArea(triangle1Area);
//console.log('Pole trójkąta o podstawie 10 i wysokosci 32 wynosi: ' + triangle1Area);
//
//getTriangleArea(triangle2Area);
//console.log('Pole trójkąta o podstawie 3 i wysokosci 342 wynosi: ' + triangle2Area);
//
//getTriangleArea(triangle3Area);
//console.log('Pole trójkąta o podstawie 23 i wysokosci 352 wynosi: ' + triangle3Area);


//zadanie 8.7

//var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
//	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//	allNames = femaleNames.concat(maleNames);
//	newName = 'Marian';
//
//	if (allNames.indexOf(newName) === -1) {
//	} 
//	allNames.push(newName);
//	
//console.log(allNames);

//zadanie 8.8

//var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
//	animal = 'Zielone słonie';
//	upperElephants = animal.toUpperCase();
//	animalrpl = text.replace('Papugi', upperElephants);
//	halfSentence = animalrpl.slice(0, 45);
//	
//console.log(text);
//console.log(halfSentence);
//console.log();


//zadanie 8.9
//
//function rysujChoinke(n) {
//moje n = 5
//
//	for( var i = 0 ; i < n ; i++) {
//		var star = '*';
//	
//		for( var j = 0 ; j < i*2-1 ; j++) {
//			var star = star + '*';
//		}
//		console.log(star);
//	}
//}
//
//rysujChoinke(5);

//zadanie 8.10

//	var buttons = document.getElementsByClassName('btn');
//	console.log(buttons);
//
//		for ( var i = 0 ; i < buttons.length ; i++) {
//			
//			var k = i+1; 
//
//			alert('Przycisk nr ' + k + ' to: ' + buttons[i].innerText);
//
//			console.log(buttons[i].innerText);
//		}

//Zadanie 8.11

//var list = document.getElementById('lista');
//	add = document.getElementById('addElem');//
//
//add.addEventListener('click', function() {
//
//	var number = document.getElementsByTagName('li');
//	console.log(number);
//
//	list.innerHTML += '<li>item ' + number.length + '</li>';
//});
	

//	Zadanie 9.2	

$("span:odd").css('color', 'red');

var paragraphs = $("p");
paragraphs.each(function(index, element) {
	var button = '<button class="btn btn-primary" data-tmp="' +	index + '">Click me</button>'
	$(element).append(button)																																																																																																								
});

$("button").click(function(){
		//nie kumam skąd te "this"
		alert($(this).attr("data-tmp"));
});

