/**
 * Created by Administrateur on 29/08/2016.
 */
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.argv);
console.log(process.env);
console.log(process.env.NODE_ENV || 'development');  //Si NODE_ENV n'est pas setté, on met 'development'