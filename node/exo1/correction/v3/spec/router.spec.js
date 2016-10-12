const Router = require('../router');

describe('Router', function() {

    describe('add', function() {
        it('should contain 0 route after construction', function() {
            const router = new Router();
            expect(router.routes.length).toBe(0);
        });

        it('should contain one route when adding GET /films (req, resp) => {}', function() {
            const router = new Router();

            const routeHandler = () => {};

            router.add({ 'method' : 'GET','url': '/films' }, routeHandler);

            expect(router.routes.length).toBe(1);
            expect(router.routes[0].route).toEqual({ 'method' : 'GET','url': '/films' });
            expect(router.routes[0].handler).toBe(routeHandler);
        });

        // TODO écrire un autre test unitaires dans lequel on ajoute plusieurs routes

        // TODO gérer les 'erreurs ou cas particuliers'
        // TODO écrire un test unitaire dans lequel on ajoute une route qui existe déjà
        // TODO écrire un test unitaire dans lequel on ajoute une route incorrecte
        // TODO écrire un test unitaire dans lequel on ajoute une handler incorrecte
        // TODO test qui vérifie si erreur si route est null ou handler est null
        // ...
    });

    describe('find', function() {
        it('should return null when no route has been added', function() {
            const router = new Router();

            const res = router.find({ 'method' : 'GET','url': '/films' });

            expect(res).toBeNull();
        });

        it('should return the one route that has been added', function() {
            const router = new Router();

            const routeHandler = () => {};
            router.add({ 'method' : 'GET','url': '/films' }, routeHandler);

            const res = router.find({ 'method' : 'GET','url': '/films' });

            expect(res.route).toEqual({ 'method' : 'GET','url': '/films' });
            expect(res.handler).toBe(routeHandler);
        });

        it('should find /films/1 when add /films/:id', function() {
            const router = new Router();

            const routeHandler = () => {};
            router.add({ 'method' : 'GET','url': '/films/:id' }, routeHandler);

            const res = router.find({ 'method' : 'GET','url': '/films/1' });

            expect(res.route).toEqual({ 'method' : 'GET','url': '/films/:id' });
            expect(res.handler).toBe(routeHandler);
        });

        it('should return static url', function() {
            const router = new Router();

            const routeHandler = () => {};
            router.add( { 'method' : 'GET','url': '/films/aa/bb/cc/dd' }, () => {});
            router.add( { 'method' : 'GET','url': '/films/actors' }, routeHandler);
            router.add( { 'method' : 'GET','url': '/films/' }, () => {});

            const res = router.find({ 'method' : 'GET','url': '/films/actors' });

            expect(res.route).toEqual({ 'method' : 'GET','url': '/films/actors' });
            expect(res.handler).toBe(routeHandler);
        });

        it('should not find /films/1/toto when add /films/:id ', function() {
            const router = new Router();

            router.add({ 'method' : 'GET','url': '/films/:id' }, () => {});

            const res = router.find({ 'method' : 'GET','url': '/films/1/toto' });

            expect(res).toBeNull();
        });

        it('should not find dynamic routes with only a parameter at the end', function() {
            const router = new Router();
            router.add({ 'method' : 'GET','url': '/films/:id' });
            router.add({ 'method' : 'GET','url': '/films/actor/:id' });
            router.add({ 'method' : 'GET','url': '/films/1/actor/:id' });
            expect(router.find({ 'method' : 'GET','url': '/actor/:id' })).toBeNull();
            expect(router.find({ 'method' : 'GET','url': '/tests/1/actor/:id' })).toBeNull();
        });




        it('should return the correct route if multiple routes were added', function() {
            const router = new Router();

            const routeHandler = () => {};
            router.add( { 'method' : 'GET','url': '/films' }, () => {});
            router.add( { 'method' : 'GET','url': '/films/:id' }, routeHandler);
            router.add( { 'method' : 'GET','url': '/actors' }, () => {});

            // TODO vérifier que l'ont peut également trouver la première et la troisième route

            const res = router.find({ 'method' : 'GET','url': '/films/1' });

            expect(res.route).toEqual({ 'method' : 'GET','url': '/films/:id' });
            expect(res.handler).toBe(routeHandler);
        });



    });

});