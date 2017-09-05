(function() {
  var Model;

  Model = require('./cokeModel');

  exports.addToCart = function(req, res) {
    var upcs;
    upcs = req.params.upcs;
    return "http://shoppable.com:4444/add_item.html?code=a9OSY%2BYp1mMLjUcoj%2BLiV8J%2FygJO5gudfo0UuShH%2FzpSsgebUOVtIB3K12%2FZVAdz&state=00049000036374|1|08854";
  };

}).call(this);
