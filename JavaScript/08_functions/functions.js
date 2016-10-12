/**
 * Created by Administrateur on 01/08/2016.
 */
function helloWorld()
{
    console.log("hello world");
}

helloWorld();

function helloWorldWithParams(a,b,c)
{
    console.log(a,b,c);
}

helloWorldWithParams(1,2,3);
helloWorldWithParams();
helloWorldWithParams(1,2);

function helloWorldWithoutParams()
{
    console.log(arguments);  //mot clef argument contient les arguments de la fonction
}

helloWorldWithoutParams("bonjour", "eliott");

let result = helloWorld();  //Une fonction renvoie tj un resultat, qui peut etre undefined
console.log(result);

function helloWorldReturn()
{
    return "hello world";
}
console.log(helloWorldReturn());

//Function expression
let helloWorldFunctionExpression = function() {  //on declare une variable de type fonction
    console.log("hello world");
}

console.log(helloWorldFunctionExpression);
helloWorldFunctionExpression();
