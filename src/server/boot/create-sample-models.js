import Bluebird from 'bluebird';

export default function(app) {
  const mydb = app.dataSources.mydb;

  function createReviewers() {
    return mydb.automigrate('Reviewer')
      .then(function() {
        const Reviewer = app.models.Reviewer;

        return Reviewer.create([
          {email: 'foo@bar.com', password: 'foobar'},
          {email: 'john@doe.com', password: 'johndoe'},
          {email: 'jane@doe.com', password: 'janedoe'}
        ]);
      });
  }

  function createCoffeeShops() {
    return mydb.automigrate('CoffeeShop')
      .then(function() {
        const CoffeeShop = app.models.CoffeeShop;

        return CoffeeShop.create([
          {name: 'BLAHHHHH', city: 'Vancouver'},
          {name: 'Three Bees Coffee House', city: 'San Mateo'},
          {name: 'Caffe Artigiano', city: 'Vancouver'}
        ]);
      });
  }

  function createReviews(result) {
    const reviewers = result.reviewers;
    const coffeeShops = result.coffeeShops;
    const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

    return mydb.automigrate('Review')
      .then(function() {
        const Review = app.models.Review;

        return Review.create([
          {
            date: Date.now() - (DAY_IN_MILLISECONDS * 4),
            rating: 5,
            comments: 'A very good coffee shop.',
            publisherId: reviewers[0].id,
            coffeeShopId: coffeeShops[0].id,
          },
          {
            date: Date.now() - (DAY_IN_MILLISECONDS * 3),
            rating: 5,
            comments: 'Quite pleasant.',
            publisherId: reviewers[1].id,
            coffeeShopId: coffeeShops[0].id,
          },
          {
            date: Date.now() - (DAY_IN_MILLISECONDS * 2),
            rating: 4,
            comments: 'It was ok.',
            publisherId: reviewers[1].id,
            coffeeShopId: coffeeShops[1].id,
          },
          {
            date: Date.now() - (DAY_IN_MILLISECONDS),
            rating: 4,
            comments: 'I go here everyday.',
            publisherId: reviewers[2].id,
            coffeeShopId: reviewers[2].id,
          }
        ]);
      });
  }

  Bluebird.props({
    reviewers: createReviewers(),
    coffeeShops: createCoffeeShops()
  })
  .then(createReviews).then(function (result) {
    const Review = app.models.Review;

    // Example of how to retrieve a model
    Review.findById(1).then(function(model) {
      // console.log(model);
    });

    return result;
  })
  .catch( function (error) {
    if (error) {
      throw error;
    }
  });

}
