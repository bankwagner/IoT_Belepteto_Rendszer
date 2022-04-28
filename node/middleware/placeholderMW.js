module.exports = function(){
    return function(req, res, next){
        console.log("Main page loaded");
        res.send('Hello World!');
    }
}
