import express from "express";

const app = express();

const arrayGyms = [
  {
    id: 1,
    name: "Berta Block",
    location: {
      city: "Berlin",
      address: "Mühlenstraße 62",
      postCode: "13187",
      country: "Germany",
    },
  },
  {
    id: 2,
    name: "BoulderKlub",
    location: {
      city: "Berlin",
      address: "Ohlauer Str. 38",
      postCode: "10999",
      country: "Germany",
    },
  },
  {
    id: 3,
    name: "The Castle",
    location: {
      city: "London",
      address: "Green Lanes",
      postCode: "N4 2HA",
      country: "United Kingdom",
    },
  },
];

app.get("/gyms", (req, res) => {
  return res.send(Object.values(arrayGyms));
});

app.get("/gyms/:gymId", (req, res) => {
  return res.send(arrayGyms.find((x) => x.id === +req.params.gymId));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
