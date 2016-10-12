/**
 * Created by Administrateur on 31/08/2016.
 */
let Router = function() {

    this.routes = [];
};

Router.prototype.add = function(route, routeHandler)
{
    console.log("ROUTER ADD: ", route);

   this.routes.push({'route':route, 'handler': routeHandler});
};

Router.prototype.find = function(route) {

    if (this.routes.length == 0)
    {
        return null;
    }
    for (let r of this.routes)
    {
        if (r.route.method.toUpperCase() != route.method.toUpperCase())
        {
            continue;
        }
        if (!r.route.url.includes(":")) //STATIC route
        {
            if (r.route.url === route.url)
            {
                return r;
            }
        }
        else //DYNAMIC route
        {
            //Si on veut gerer plusieurs parametres dynamiques, il faut 1/ générer une regex a partir de r.route.url et
            // 2/utiliser regex.match(route.url)

            //Ici on decide de ne gerer que le cas avec un parametre a la fin donc il suffit de faire:
            let PartBeforeLastSlashInContainedRoute = route.url.substring(0, route.url.lastIndexOf('/'));
            let PartBeforeLastSlashInSearchedRoute = r.route.url.substring(0, r.route.url.lastIndexOf('/'));

            console.log("PartBeforeLastSlashInContainedRoute ", PartBeforeLastSlashInContainedRoute );
            console.log("PartBeforeLastSlashInSearchedRoute ", PartBeforeLastSlashInSearchedRoute);

            if (PartBeforeLastSlashInContainedRoute == PartBeforeLastSlashInSearchedRoute)
            {
                continue;
            }

            if (PartBeforeLastSlashInSearchedRoute.length + 1 < route.url.length)
            {
                //console.log("PartBeforeLastSlashInSearchedRoute length", PartBeforeLastSlashInSearchedRoute.length);
                return r;
            }


        }
        if (!r.route.url.match(/[^\/]+(\/[^\/]*)?$/))
        {
            return null;
        }

    }



    return this.routes[0];

};


module.exports = Router;