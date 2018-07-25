export default function(CoffeeShop) {

  CoffeeShop.status = function (cb) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const OPEN_HOUR = 6;
    const CLOSE_HOUR = 20;
    var response;

    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }

    cb(null, response);
  };

  CoffeeShop.remoteMethod('status', {
    http: {
      path: '/status',
      verb: 'get'
    },
    returns: {
      arg: 'status',
      type: 'string'
    }
  });

  CoffeeShop.getName = function getName(id, cb) {
    CoffeeShop.findById(id, function (error, instance) {
      if (error) {
        throw error;
      }

      var response = 'Name of coffeeshop is ' + instance.name;
      cb(null, response);
    });
  };

  CoffeeShop.remoteMethod('getName', {
    http: { path: '/getname', verb: 'get' },
    accepts: { arg: 'id', type: 'number', http: { source: 'query' }},
    returns: { arg: 'name', type: 'string' }
  });
}
