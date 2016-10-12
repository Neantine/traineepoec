class Router {

    constructor() {
        this.routes = [];
    }

    /**
     * Adds a new route.
     * @param route Object {'method': 'GET', 'url':'/someUrl' }
     * @param routeHandler Function //TODO explain function signature here
     */
    add (route, routeHandler) {
        this.routes.push({
            'route': route,
            'handler': routeHandler
        });
    }

    /**
     Les routes dynamiques acceptées n'ont qu'un paramètre à la fin, par ex
     /:id match /1
     /films/:id match /films/1
     /films/1/actors/:id match /films/1/actors/158
     Pour une vraie gestion des routes dynamiques (multi paramètres, contraintes sur les paramètres, etc...)
         1) générer une regex à partir de r.route.url
         2) regex.match(route.url)
     * @param route
     * @returns route dans le router qui correspond à la route demandée
     */
    find (route) {
        if(this.routes.length == 0) { return null; }

        for(const r of this.routes) {
            if(r.route.method.toUpperCase() != route.method.toUpperCase()) {
                continue;
            }

            if(! r.route.url.includes(":")
              && r.route.url === route.url) {
                return r;
            }

            if (! r.route.url.includes(":")) {
                console.log('static route');
                if (r.route.url === route.url) { return r; }
            } else { // dynamic route avec un paramètre a la fin
                let pathBeforeLastSlashForStoredRoute = r.route.url.substring(0, r.route.url.lastIndexOf('/'));
                let pathBeforeLastSlashForRouteToFind = route.url.substring(0, route.url.lastIndexOf('/'));

                // comparer les radix routes jusqu'au dernier /
                // verifie si il reste le contenu d'un parametre apres le dernier /
                if(pathBeforeLastSlashForStoredRoute === pathBeforeLastSlashForRouteToFind
                && pathBeforeLastSlashForRouteToFind.length + 1 < route.url.length) {
                    return r;
                }
            }
        }

        return null;
    }
}

module.exports = Router;