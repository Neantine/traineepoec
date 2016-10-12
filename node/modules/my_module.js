/**
 * Created by Administrateur on 29/08/2016.
 */
function hello() {
    console.log('hello from my module');
}

//module.exports = hello;
module.exports.hello = hello;