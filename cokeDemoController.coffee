Model= require './cokeModel'

exports.addToCart = (req,res)->
    upcs = req.params.upcs 
    
    "http://egrocer.shoppable.co:4444/add_item.html?code=a9OSY%2BYp1mMLjUcoj%2BLiV8J%2FygJO5gudfo0UuShH%2FzpSsgebUOVtIB3K12%2FZVAdz&state=00049000036374|1|08854"