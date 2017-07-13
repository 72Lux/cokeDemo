(function() {
  var cokeController;

  cokeController = function($scope, $http, $q) {
    var init;
    init = function() {
      return $scope.products = [
        [
          {
            name: 'Diet Coke, 2.0 L',
            description: 'Diet Coke Cola: Refreshing uplift any time of day',
            image: 'https://i5.walmartimages.com/asr/5253f23c-e887-4701-8df6-0b48032d8236_1.9c7237ad83cf56acc997abe44839d8b6.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '2L',
            price: 1.89,
            upc: '00049000050110',
            retailers: [
              {
                name: 'peapod',
                image: 'images/peapodicon.png'
              }, {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Coca-Cola Zero Cherry',
            description: 'Cola0 calories per 12 fl oz serving. Low sodium',
            image: 'https://i5.walmartimages.com/asr/fbb8bd57-66ed-4949-913f-27641bb8c7ba_1.b894209f1aa6625b931a0e54f025c040.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '2L',
            price: 1.89,
            upc: '00049000057959',
            retailers: [
              {
                name: 'peapod',
                image: 'images/peapodicon.png'
              }, {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Diet Coke Soda, Lime',
            description: 'No calorie sparkling cola that gives you the refreshment you want',
            image: 'https://i5.walmartimages.com/asr/a699ef9f-9782-4c9c-ad2c-1a8c2fbbbf68_1.56afb627b3a8e0e8ba058a8d83336bd6.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '12-pack',
            price: 5.79,
            upc: '00049000036374',
            retailers: [
              {
                name: 'peapod',
                image: 'images/peapodicon.png'
              }, {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Diet Coke  6-12 fl. oz. Cans',
            description: 'Diet Coke. Canned under authority of The Coca-Cola Company',
            image: 'https://i5.walmartimages.com/asr/5f12b2d7-1eff-4786-b7f4-dbb10c3b606b_1.f2828a42c7171589e5f80e4e6fd969c1.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '6-pack',
            price: 3.75,
            upc: '00049000006582',
            retailers: [
              {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }
        ], [
          {
            name: 'Diet Coke With Splenda Soda, 12 Fl Oz, 12 Ct',
            description: 'Diet Coke is a delicious, crisp tasting,',
            image: 'https://i5.walmartimages.com/asr/23943747-22ef-4f6a-be5b-c005e9869cba_1.facaae4a0731db36184eeceb79adc62e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '12 pack',
            price: 11.54,
            upc: '00049000042696',
            retailers: [
              {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Coca-Cola Cherry, 12 fl oz, 6 Pack',
            description: 'Great taste of Coca-Cola with a sweet, smooth cherry flavor',
            image: 'https://i5.walmartimages.com/asr/5c0d9b19-c406-4ab1-a99c-e40cdb419557_1.d9b1b218988dd37709ff2368dd42cea3.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '12-pack',
            price: 11.54,
            upc: '00049000000504',
            retailers: [
              {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Diet Coke 12 oz Glass Bottle',
            description: 'Diet Coke 12 oz Glass Bottle. Over a million bottles, no two bottles are alike.',
            image: 'https://i5.walmartimages.com/asr/131c8278-f011-43c7-a317-01fe5001fe29_1.b7b7e2061f52cc029127dd04a337712e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '12-pack',
            price: 20.00,
            upc: '00049000068160',
            retailers: [
              {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }, {
            name: 'Coca-Cola  Cherry Cola 2L Plastic Bottle',
            description: 'Coca-Cola Cherry combines the great taste of Coca-Cola with a sweet, smooth cherry flavor.',
            image: 'https://i5.walmartimages.com/asr/58aae208-b0a3-4e53-82a7-e12824275dc8_1.7fa9c558b2820c934c8e07944b9afa73.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
            size: '2L',
            price: 1.89,
            upc: '00049000050165',
            retailers: [
              {
                name: 'peapod',
                image: 'images/peapodicon.png'
              }, {
                name: 'walmart',
                image: 'images/walmarticon.png'
              }
            ]
          }
        ]
      ];
    };
    $scope.extraProducts = [
      {
        name: 'POWERADE ION4 Grape Sports Drink',
        description: 'Coca-Cola Cherry combines the great taste of Coca-Cola with a sweet, smooth cherry flavor.',
        image: 'https://i5.walmartimages.com/asr/89ff76c6-0deb-40ef-96b0-d94f1ee2396f_1.6db96ebae53233d078a70fd994d9b64b.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        size: '32 fl oz',
        price: 1.44,
        upc: '00049000045239',
        retailers: [
          {
            name: 'peapod',
            image: 'images/peapodicon.png'
          }
        ]
      }
    ];
    $scope.buy = function(product) {
      $scope.currentProduct = product;
      $scope.currentSize = product.size;
      $scope.currentProduct.qty = 1;
      $scope.productsToBuy = true;
      return $scope.cartShown = false;
    };
    $scope.cart = {
      zip: '08854',
      qty: function() {
        var item, total, _i, _len, _ref;
        total = 0;
        if (this.retailers.peapod) {
          _ref = this.retailers.peapod.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            total += parseInt(item.qty);
          }
        }
        return total;
      },
      retailers: {},
      subtotal: function() {
        var item, total, _i, _len, _ref;
        total = 0;
        _ref = this.retailers.peapod.items;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          total += item.price * item.qty;
        }
        return total;
      }
    };
    $scope.user = {};
    $scope.closeBuy = function() {
      return $scope.productsToBuy = false;
    };
    $scope.sendToPeapod = function() {
      $scope.peapodLogin = true;
      $scope.login = true;
      return $scope.cartShown = false;
    };
    $scope.showCart = function() {
      return $scope.cartShown = true;
    };
    $scope.removeItem = function(product) {
      var curIndex, item, itemIndex, _i, _len, _ref;
      itemIndex = -1;
      curIndex = 0;
      _ref = this.retailers.peapod.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        if (item.name === product) {
          itemIndex = curIndex;
        }
        curIndex++;
      }
      return this.retailers.peapod.items.splice;
    };
    $scope.transmitToPeapod = function() {
      $scope.transmitting = true;
      return $scope.login = false;
    };
    $scope.addToBag = function() {
      if (typeof $scope.cart.retailers[$scope.currentProduct.retailer] === 'undefined') {
        $scope.cart.retailers[$scope.currentProduct.retailer] = {
          name: $scope.currentProduct.retailer,
          items: []
        };
      }
      $scope.cart.retailers[$scope.currentProduct.retailer].items.push($scope.currentProduct);
      $scope.closeBuy();
      return $scope.showCart();
    };
    return init();
  };

  cokeController.$inject = ['$scope', '$http', '$q'];

  angular.module('cokeApp', ['ngAnimate', 'ngMaterial']).controller('cokeController', cokeController);

}).call(this);
