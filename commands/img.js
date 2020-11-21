const request = require('request');
const cheerio = require('cheerio');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.run = async (client, message, args) => {
    var args = args.join(" ");
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args,
        method: "GET",
        headers: {
        "Accept": "text/html",
        "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
    var links = $(".image a.link");
    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
    if (!urls.length) {
        return;
    }
    let maximax = urls.length-1;
    let randomimg = getRandomIntInclusive(0, maximax)
    message.channel.send( urls[randomimg] );
    });
}
module.exports.config = {
    name: "Image",
    description: "Search an image",
    usage: "h.img",
    accessableby: "Members"
}
