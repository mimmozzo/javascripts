var messaggio = "Hello, world!";
document.writeln(messaggio);
document.writeln(typeof messaggio);

messaggio = 12;

document.writeln(messaggio);
document.writeln(typeof messaggio);


messaggio = 12.5;

document.writeln(messaggio);
document.writeln(typeof messaggio);

var add = function (a,b) 
{
	return a+b;
};

var result = add(4,5);

document.writeln(result);
