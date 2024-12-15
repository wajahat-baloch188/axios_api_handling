import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/api/products", function (req, res) {
  const products = [
    {
      id: 1,
      name: "Door",
      price: 220,
      image: "https://images.pexels.com/photos/396804/pexels-photo-396804.jpeg",
    },
    {
      id: 2,
      name: "table",
      price: 150,
      image: "https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg",
    },
    {
      id: 3,
      name: "Chair",
      price: 80,
      image:
        "https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg",
    },
    {
      id: 4,
      name: "Lamp",
      price: 50,
      image:
        "https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg",
    },
    {
      id: 5,
      name: "Bookshelf",
      price: 300,
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    },
    {
      id: 6,
      name: "Couch",
      price: 500,
      image:
        "https://images.pexels.com/photos/2082093/pexels-photo-2082093.jpeg",
    },
    {
      id: 7,
      name: "Bed",
      price: 800,
      image:
        "https://images.pexels.com/photos/6444258/pexels-photo-6444258.jpeg",
    },
    {
      id: 8,
      name: "Wardrobe",
      price: 450,
      image: "https://images.pexels.com/photos/271676/pexels-photo-271676.jpeg",
    },
    {
      id: 9,
      name: "Desk",
      price: 200,
      image: "https://images.pexels.com/photos/376053/pexels-photo-376053.jpeg",
    },
    {
      id: 10,
      name: "Coffee Table",
      price: 120,
      image:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    },
  ];

  //   https://localhost:3000/api/products?search=metal

  if (req.query.search) {
    const searchQuery = req.query.search.toLowerCase(); 
    const filteredProducts = products.filter(
      (product) => product.name.toLowerCase().includes(searchQuery) 
    );
    console.log(req.query.search);
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log("port listening on ", port);
});
