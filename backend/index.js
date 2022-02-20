const PORT = process.env.PORT || 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
const newspapers = [
  {
    name: "thetimes",
    address: "https://www.thetimes.co.uk/",
    base: "https://www.thetimes.co.uk",
  },
];

let articles = [];
function getkey(keyword) {
  newspapers.forEach((newspaper) => {
    axios
      .get(newspaper.address)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        articles = [];
        $(`a:contains(${keyword})`, html).each(function () {
          const title = $(this).text();
          const url = $(this).attr("href");
          articles.push({
            title,
            url: newspaper.base + url,
            source: newspaper.name,
          });
        });
      })
      .catch((err) => console.log(err));
  });
}

app.get("/", (req, res) => {
  res.json("Welcome to the keyword finder");
});

app.get("/news/:keyword", (req, res) => {
  const keyword = req.params.keyword;
  getkey(keyword);
  res.json(articles);
});

app.listen(PORT, () => console.log("good"));
