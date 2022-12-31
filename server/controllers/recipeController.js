/**
 * GET/
 * Homepage
 */

exports.homepage = async(req,res)=> {
    res.render('layouts/index');
}