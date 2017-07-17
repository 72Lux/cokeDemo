(function() {
  var cokeController, guid;

  guid = function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

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
    $scope.shareACoke = {
      name: 'Personalized Coke Glass Bottle',
      retailers: [
        {
          name: 'coke',
          image: 'images/cokelogo.png'
        }
      ],
      size: '8 fl oz',
      price: 5.00,
      image: 'images/shareACokeBottle.png',
      sharing: true
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
      guid: guid(),
      zip: '08854',
      qty: function() {
        var item, total, _i, _j, _len, _len1, _ref, _ref1;
        total = 0;
        if (this.retailers.peapod) {
          _ref = this.retailers.peapod.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            total += parseInt(item.qty);
          }
        }
        if (this.retailers.coke) {
          _ref1 = this.retailers.coke.items;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            item = _ref1[_j];
            total += parseInt(item.qty);
          }
        }
        return total;
      },
      retailers: {},
      subtotal: function() {
        var item, total, _i, _j, _len, _len1, _ref, _ref1;
        total = 0;
        if (this.retailers.peapod) {
          _ref = this.retailers.peapod.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            total += item.price * item.qty;
          }
        }
        if (this.retailers.coke) {
          _ref1 = this.retailers.coke.items;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            item = _ref1[_j];
            total += item.price * item.qty;
          }
        }
        return total.toFixed(2);
      }
    };
    $scope.user = {};
    $scope.closeBuy = function() {
      return $scope.productsToBuy = false;
    };
    $scope.sendToPeapod = function() {
      $scope.peapodLogin = true;
      $scope.login = true;
      $scope.peaPodLink = false;
      $scope.transmitting = false;
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
      var data, item, upcs, _i, _len, _ref;
      $scope.transmitting = true;
      $scope.login = false;
      upcs = [];
      _ref = $scope.cart.retailers.peapod.items;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        upcs.push({
          upc: item.upc,
          qty: item.qty
        });
      }
      data = {
        eGrocer: 'peapod',
        zipCode: $scope.cart.zipCode,
        cartId: $scope.cart.guid,
        userName: $scope.user.name,
        userPass: $scope.user.password,
        products: upcs
      };
      return $http.post('http://40.121.144.101:3201/inject', data).then(function(finished) {
        return setTimeout(function() {
          return $scope.listenForOrderCompletion();
        }, 3000);
      });
    };
    $scope.listenForOrderCompletion = function() {
      return $http.get('http://40.121.144.101:3201/injectStatus').then(function(done) {
        if (done.status) {
          $scope.transmitting = false;
          return $scope.peaPodLink = done.status;
        } else {
          setTimeout(function() {
            return $scope.listenForOrderCompletion();
          });
          return 2000;
        }
      });
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
