export default function(Review) {

  Review.beforeRemote('create', function(context, user, next) {
    const req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });

}
