/**
 * Created by Administrateur on 01/08/2016.
 */
/* Pour tous les nb de 0 a 100
Si le nb est multiple de 3 afficher 'nombre FIZZ'
Si le nb est multiple de 5 afficher 'nombre BUZZ'
Si le nb est multiple de 3 et de 5 afficher 'nombre FIZZBUZZ'
 */

for (let nb=0; nb<101; nb++)
{
    if (nb%15 == 0)
        console.log(nb+ " FIZZBUZZ");
    else if (nb%3 == 0)
        console.log(nb+ " FIZZ");
    else if (nb%5 == 0)
        console.log(nb+" BUZZ");

}

