var messaggio = "Hello, world!";
document.writeln(messaggio);
document.writeln(typeof messaggio);
messaggio = 12;
document.writeln(messaggio);
document.writeln(typeof messaggio);

var add = function (a,b) 
{
	return a+b;
};

var result = add(4,5);

document.writeln(result);

var divide = function (a,b)
{
 	return a/b;
};

result = divide(4,0);

document.writeln(result);

result = divide(0,0);

document.writeln(isNaN(result));

document.writeln("cat uppercase is...");
document.writeln('cat'.toUpperCase());

var object1 = {};
document.writeln("object1 vale...");
document.writeln(object1);

object1 = {
	nome : "Mimmo",
	cognome: "Riccio"
};

document.writeln("object1 vale...");
document.writeln(object1);

document.writeln(object1.nome);
document.writeln(object1.cognome);

object1.eta = 27;

document.writeln(object1.eta);

document.writeln(object1.age || "non esiste l'attributo age");



if (typeof Object.beget !== 'function') {
	Object.beget = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var object2 = Object.beget(object1);
object2.nome = "Domenico";
document.writeln(object2.nome);
document.writeln(object2.cognome);

delete object2.nome;

document.writeln(object2.nome);
document.writeln(object2.cognome);


/*
var printProperties = function(oggetto){
	var name;
	for(name in oggetto){
		if(typeof obj[name] !== 'function'){
			document.writeln(name + ": " + obj[name];
		}
	}
};
var lol = printProperties(object2);
*/
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};
