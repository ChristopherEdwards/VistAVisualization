/**
 * PackageController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 * @copyright:: 2014 KRM Associates, Inc.
 * @developer:: Christopher Edwards
 */

module.exports = {

    "new": function(req,res) {
        res.view();
    },

    "visualization": function(req,res) {
        Package.find(req.param('id')).exec(function(err,packages) {
            if(err){
                console.log(err);
                return res.send(err,500);
            }
            if(!packages) {
                console.log("No package found");
                return res.send("No package found",404);
            }
            var rtn = {"id": "root", "name": "VistA", "data": {}, "children":[]};
            packages.forEach(function (package)
            {
                // add the category first (1st level in tree)
                var category=package.Category;
                // does the category exist?
                if(rtn.children.length!=0)
                {
                    var found=false;
                    rtn.children.forEach(function (cat)
                    {
                        if(cat.name.toString() == category.toString())
                        {
                            // Category exists
                            found=true;
                            // Add package to existing category
                            cat.children.push({"id": package.id, "name": package.OfficialName, "data":{}, "children": []});
                        }
                    });
                    if(!found)
                    {
                        //add category and package
                        rtn.children.push({"id": category, "name": category, "data": {}, "children":[{"id": package.id, "name": package.OfficialName, "data": {}, "children": []}]});
                    }
                }
                else
                {
                    // if this is the first category just add it
                    rtn.children.push({"id": category, "name": category, "data": {}, "children":[{"id": package.id, "name": package.OfficialName, "data": {}, "children": []}]});
                }
            });
            //return res.json(rtn);
            return res.view({
                "layout": "emptylayout",
                "json": rtn
            });
        })
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PackageController)
   */
  _config: {}

  
};
