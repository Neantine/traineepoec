/**
 * Created by Administrateur on 05/08/2016.
 */

//javascript est single-thread, non blocking, asynchronous, concurrent language
//il possede une callstack, event-loop, callback queue, des APIs..

function a() {
    console.log("A");
    b();
}

function b() {
    console.log("B");
}

a();


console.log('before');

setTimeout((function() {
    console.log('1000ms plus tard...');
}), 1000);

//Astuce : avec un setTimeout a 0, on simule un comportement asynchrone car il sera executé juste apres le console.log('after')

console.log('after');

//callback hell
//ca s'execute ailleurs, sans bloquer l'UI qui est ds la thread principale
// doSomthingSlow(function(data) {
//     doOtherSlowThing(function(data) {
//         doOtherVerySlow(function(data) {
//
//         })
//     })
// });

//Pour palier a ce pb d'ecriture illisible, il y a les promises depuis ecs 6
//doSomthingSlow(data).then(doOtherSlow...etc


