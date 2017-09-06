guid = ()->
  s4= ()->
    Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
transmitterController  = ($scope, $http, $q, $location) ->
    $scope.closeWindow= ()->
        window.close();
    init = ()->
        $scope.transmitting=true
        absurl = $location.absUrl();     
        searchParts = absurl.split('=')
        tokenQuery =  searchParts[1].split('&')[0];
        firstLoop=0
        upcs = []
        items =  searchParts[2].split '-'
        for item in items 
            parts = item.split '|'
            upcs.push {
                upc:parts[0]
                qty:parts[1]
                zip:parts[2]
            }
        urlAdds=''
        setTimeout ()-> 
            $scope.transmitting=false
        ,8000
        data = {
            token:tokenQuery
            upcs :  upcs
        }
        url = 'http://egrocer.shoppable.co:4441/cart'
        $http.post url,data
        .then (done)->
            console.log 'done'
        , (err)->
            console.log err
        
    init()
cokeController = ($scope, $http, $q) ->
    init = ()->
        $scope.products = [
            [
                {
                name:'Diet Coke, 2.0 L',
                description:'Diet Coke Cola: Refreshing uplift any time of day'
                image: 'https://i5.walmartimages.com/asr/5253f23c-e887-4701-8df6-0b48032d8236_1.9c7237ad83cf56acc997abe44839d8b6.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'2L'
                price:1.89
                upc:'00049000050110'
                retailers:[
                  
                    {
                        name:'peapod'
                        image:'images/peapodicon.png'
                    },  {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                
                ]
                
                },{
                name:'Coca-Cola Cherry - 12 pk',
                description:'Cola0 calories per 12 fl oz serving. Low sodium'
                image: 'https://i5.walmartimages.com/asr/58aae208-b0a3-4e53-82a7-e12824275dc8_1.7fa9c558b2820c934c8e07944b9afa73.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'12 pack'
                price:1.89
                upc:'00049000050165'
                retailers:[
                  
                    {
                        name:'peapod'
                        image:'images/peapodicon.png'
                    },  {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                
                ]
                },{
                name:'Diet Coke Soda, Lime',
                description:'No calorie sparkling cola that gives you the refreshment you want'
                image: 'https://i5.walmartimages.com/asr/a699ef9f-9782-4c9c-ad2c-1a8c2fbbbf68_1.56afb627b3a8e0e8ba058a8d83336bd6.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
                size:'12-pack'
                price:5.79
                upc:'00049000036374'
                retailers:[
                  
                    {
                        name:'peapod'
                        image:'images/peapodicon.png'
                    },  {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                
                ]
                },{
                name:'Diet Coke  6-12 fl. oz. Cans',
                description:'Diet Coke. Canned under authority of The Coca-Cola Company'
                image: 'https://i5.walmartimages.com/asr/5f12b2d7-1eff-4786-b7f4-dbb10c3b606b_1.f2828a42c7171589e5f80e4e6fd969c1.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
                size:'6-pack'
                price:3.75
                upc:'00049000006582'
                retailers:[
                    {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                ]
                }
            ],
            [ {
                name:'Diet Coke With Splenda Soda, 12 Fl Oz',
                description:'Diet Coke is a delicious, crisp tasting,'
                image: 'https://i5.walmartimages.com/asr/23943747-22ef-4f6a-be5b-c005e9869cba_1.facaae4a0731db36184eeceb79adc62e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'12 pack'
                price:11.54
                upc:'00049000042696'
                retailers:[
                    {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                ]
                },{
                name:'Coca-Cola Cherry, 12 fl oz, 6 Pack',
                description:'Great taste of Coca-Cola with a sweet, smooth cherry flavor'
                image: 'https://i5.walmartimages.com/asr/5c0d9b19-c406-4ab1-a99c-e40cdb419557_1.d9b1b218988dd37709ff2368dd42cea3.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'12-pack'
                price:11.54
                upc:'00049000000504'
                retailers:[
                    {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                ]
                },{
                name:'Coca-Cola  Cherry Cola 2L Plastic Bottle',
                description:'Coca-Cola Cherry combines the great taste of Coca-Cola with a sweet, smooth cherry flavor.'
                image: 'https://i5.walmartimages.com/asr/58aae208-b0a3-4e53-82a7-e12824275dc8_1.7fa9c558b2820c934c8e07944b9afa73.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'2L'
                price:1.89
                upc:'00049000050165'
                retailers:[
                   
                    {
                        name:'peapod'
                        image:'images/peapodicon.png'
                    }, {
                        name:'walmart',
                        image:'images/walmarticon.png'
                    }
                
                ]
                }]
        ]
    $scope.shareACoke = 
        name:'Personalized Coke Glass Bottle',
        retailers:[  {
                        name:'coke'
                        image:'images/cokelogo.png'
                    }]
        size: '8 fl oz'
        price: 5.00
        image: 'images/shareACokeBottle.png'
        sharing:true
    $scope.extraProducts = [
            {
                name:'POWERADE ION4 Grape Sports Drink',
                description:'Coca-Cola Cherry combines the great taste of Coca-Cola with a sweet, smooth cherry flavor.'
                image: 'https://i5.walmartimages.com/asr/89ff76c6-0deb-40ef-96b0-d94f1ee2396f_1.6db96ebae53233d078a70fd994d9b64b.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff'
                size:'32 fl oz'
                price:1.44
                upc:'00049000045239'
                retailers:[
                    {
                        name:'peapod'
                        image:'images/peapodicon.png'
                    }
                
                ] 
            }
     ]
        
    $scope.buy =(product)->
        $scope.currentProduct=product
        $scope.currentSize = product.size
        $scope.currentProduct.qty=1
        $scope.productsToBuy=true
        $scope.cartShown= false
    $scope.buySale= (product)->
        $scope.saleViewed=true
        $scope.buy(product);
    $scope.cart = 
        guid: guid()
        zip:'08854'
        qty: ()->
            total =0
            if @retailers.peapod
                for item in @retailers.peapod.items
                    total += parseInt(item.qty)
            if @retailers.coke
                for item in @retailers.coke.items
                    total += parseInt(item.qty)
            return total
        retailers:{}
        subtotal: ()->
            total =0
            if @retailers.peapod
                for item in @retailers.peapod.items
                    total += item.price*item.qty
            if @retailers.coke
                for item in @retailers.coke.items
                    total += item.price*item.qty
            return total.toFixed(2)
    $scope.user ={}
    $scope.closeBuy =()->
        $scope.productsToBuy=false
        $scope.currentProduct={};
    
    $scope.sendToPeapod= ()->
        $scope.peapodLogin =false;
        $scope.cartShown=false 
        $scope.productsToBuy=false
        urlAdds="state="
        itemsForPeaPod= []
        firstLoop =true
        for item in $scope.cart.retailers.peapod.items
                if !firstLoop
                    urlAdds+='-'
                urlAdds+= item.upc+'|'+item.qty+'|'+$scope.cart.zip
                firstLoop =false
         
        newwindow = window.open("https://www.peapod.com/shop/oauth2/?response_type=code&client_id=1057&"+urlAdds+"&redirect_uri=http://egrocer.shoppable.co:4444/add_item.html","_shoppablePopup","location=0,status=1,menubar=0,resizable=1,width=350,height=550")
        
   
    $scope.showCart =()->
        $scope.cartShown= true
        
    $scope.removeItem= (product)->
        itemIndex = -1 
        curIndex= 0
        for item in $scope.cart.retailers.peapod.items
            if item.name is product 
                itemIndex = curIndex
            curIndex++
        $scope.cart.retailers.peapod.items.splice(itemIndex,1)
    $scope. transmitToPeapod =()->
        $scope.transmitting=true;
        $scope.login=false;
        $scope.addedupcs = []
        for item in $scope.cart.retailers.peapod.items
            $scope.addedupcs.push {
                upc: item.upc
                qty: item.qty
                image: item.image
            } 
        data= 
            eGrocer:'peapod'
            zipCode: $scope.cart.zip
            cartId:$scope.cart.guid
            userName: $scope.user.name
            userPass: $scope.user.password
            products:$scope.addedupcs
        $scope.determinateValue=0   
        $scope.msg= 'Preparing your Cart'
        $http.post 'http://40.121.144.101:3201/inject', data
        .then (finished)->
            setTimeout ()->
                $scope.listenForOrderCompletion()
                $scope.determinateValue=10
            ,3000
    $scope.updateTransmitted = (data)->
        $scope.currentUpcsAdded=[]
        for upc in $scope.addedupcs
            for newupc in data.addedUpcs
                if newupc.upc is upc.upc
                    $scope.currentUpcsAdded.push upc
        $scope.determinateValue = (data.addedUpcs.length/$scope.addedupcs.length)*100
    $scope.listenForOrderCompletion = ()->
        $http.get 'http://40.121.144.101:3201/injectStatus/cartId/'+$scope.cart.guid 
        .then (done)->
            data = JSON.parse(done.data)
            if data.msg
                $scope.msg=data.msg;
            if data.status
                $scope.determinateValue =100
                $scope.transmitting=false;
                $scope.peaPodLink =data.status; 
            else if  data.addedUpcs
                $scope.updateTransmitted data
                
                setTimeout ()->
                    $scope.listenForOrderCompletion()
                500
            else
                setTimeout ()->
                    $scope.listenForOrderCompletion()
                1000
                
    $scope.addToBag = ()->
        if typeof $scope.cart.retailers[$scope.currentProduct.retailer] == 'undefined'
            $scope.cart.retailers[$scope.currentProduct.retailer] = {name:$scope.currentProduct.retailer, items: []}
        
        $scope.cart.retailers[$scope.currentProduct.retailer].items.push $scope.currentProduct
        $scope.closeBuy()
        $scope.showCart()
    
    init()


cokeController
    .$inject=  ['$scope', '$http','$q']
transmitterController
    .$inject=  ['$scope', '$http','$q','$location']


angular
     .module 'cokeApp',['ngAnimate', 'ngMaterial']
     .controller 'cokeController', cokeController
     .controller 'transmitterController', transmitterController
     .filter 'trustAsResourceUrl', ['$sce', ($sce) ->
         (val)->
              $sce.trustAsResourceUrl(val);
        ]
    