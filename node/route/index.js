const placeholderMW = require('../middleware/placeholderMW');
const errorMW = require('../middleware/errorMW');

module.exports = function(app){
    app.use('/normal',placeholderMW());
    app.use('/err',function(req,res,next){ throw "This is supposed to be an error message" });
    //the following middleware always has to be at the last place
    app.use(errorMW());
}
