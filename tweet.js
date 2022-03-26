var OAuth = require("oauth");

var twitter_application_consumer_key = "UQYoGq1u0K2FMmQvVzHkGBI6J"; // API Key
var twitter_application_secret =
  "aiHbdiG8f8ksqvOhOiCQNFabs4po5433tAXyKLQRde8N7Xdhn1"; // API Secret
var twitter_user_access_token =
  "1507398589257064449-ZQjFp0GHi8kOYKB47Nl0m0mbIqkwdm"; // Access Token
var twitter_user_secret = "xtXau5VrwUe1NOSFxtHS7rW8Z2ZxHmxdBaAPkQth51f05"; // Access Token Secret

var oauth = new OAuth.OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  twitter_application_consumer_key,
  twitter_application_secret,
  "1.0A",
  null,
  "HMAC-SHA1"
);

var status = "Weather"; // This is the tweet (ie status)

var postBody = {
  status: status,
};

// console.log('Ready to Tweet article:\n\t', postBody.status);
oauth.post(
  "https://api.twitter.com/1.1/statuses/update.json",
  twitter_user_access_token, // oauth_token (user access token)
  twitter_user_secret, // oauth_secret (user secret)
  postBody, // post body
  "", // post content type ?
  function (err, data, res) {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
    }
  }
);
