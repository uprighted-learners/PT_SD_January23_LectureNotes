const express = require("express");
const app = express();
const PORT = 4003;
const log = console.log;
const cookieParser = require("cookie-parser");
const db = require("./db.json");

// provides us access to the middleware so that we can see what cookies are stored.
app.use(cookieParser());

app.use(express.json());

// Build a route (GET) to see/test/create a cookie: http://localhost:4003/

// let db = [
//   { id: 1, item: "milk", price: 2.89 },
//   { id: 2, item: "bread", price: 3.99 },
//   { id: 3, item: "hamburger", price: 5.99 },
//   { id: 4, item: "coffee", price: 12.59 },
//   { id: 5, item: "cheese", price: 2.79 },
// ];

app.get("/", (req, res) => {
  // log(req.cookies);

  // Setting some cookie data for our GET response
  res.cookie("cart", [
    { item: "milk", price: 1.79 },
    { item: "cheese", price: 2.99 },
    { item: "dog food", price: 8.98 },
  ]);

  // Set cookie data for our GET request
  const check = req.cookies;
  //   log(check);
  //   log(check.cart);

  // Set var offer to an empty array versus an uninitialized variable
  let offer = [];

  check.cart.every((obj) => {
    // Instead of setting offer to the filtered array of db, we perform the filter and write if conditional to push an item from the db to offer var if both conditions pass
    db.filter((i) => {
      if (i.item === obj.item && i.price < obj.price) {
        offer.push(i);
      }
      // Console logged to check each name and price comparison for myself
      // log(`${i.item} vs ${obj.item}`, `& ${i.price} vs ${obj.price}`);
    });

    if (offer.length > 0) {
      return false;
    }

    return true;
  });
  // Console logged to check if the offer array was changing when item passed the filter tests
  //log(offer);

  if (offer.length > 0) {
    res.send({
      offer: `Our ${offer[0].item} is ${offer[0].price}!`,
      cookies: check,
    });
  } else {
    res.send({
      cookies: check,
    });
  }

  //res.send(check.cart);
});

app.listen(PORT, log(`Server is running on PORT: ${PORT}.`));
