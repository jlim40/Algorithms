/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let urls = {};

var encode = function(longUrl) {
  let uniqueKey = Date.now().toString(36);
  urls[uniqueKey] = longUrl;
  return 'http://tinyurl.com/' + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return urls[shortUrl.split('.com/')[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
