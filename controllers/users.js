'use strict'

//const _ = require('lodash'); ignored we use dependable module injection as _

module.exports= function(_){

    return{
        SetRouting: function(router){
            router.get('/', this.indexPage);
        },
        indexPage: function(req,res){
            return res.render('index',{test:'This was tested'});
        }
    }

}