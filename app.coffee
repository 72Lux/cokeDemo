express= require 'express'
app = module.exports = express();
http = require 'http'
app.use(express.static(__dirname + '/public'));
app.set 'port', 4444
app.get '/add_item', (req,res)->
    console.log 'here '
    
    res.sendfile __dirname+'/public/add_item.html'
server = http.createServer(app).listen app.get('port') , ->
        console.log ' running on port ' + app.get 'port'
        
        