// Create a redis client
var redis = require('redis');
// var redisDeletePattern = require('redis-delete-pattern');
var client = redis.createClient();

var id = 'tlvZgFlQutAUipPNUda8Mq3Ive20BYM3'

client.del(`sess:${id}`, function(err, reply) {
    console.log(reply);
    client.end(true);
});

// Delete cached model data
// redisDeletePattern({
//   redis: redis,
//   pattern: 'o6zzoQBa2DEN3LY0_PqLGEvtrwG0WtXZ'
// }, function handleError (err) {
//     console.log(err);
// });
