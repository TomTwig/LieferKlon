import { nanoid } from "@reduxjs/toolkit";


const products = [
    {
      id: nanoid(),
      name: 'Pizza Margherita',
      description: "mit Gouda und Tomatensauce",
      price: 695,
      img: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg",
      amount: 0,
      isFavorite: false,
      category: "pizza"
    },
    {
      id: nanoid(),
      name: 'Pizza Salami',
      description: "Pizza mit Salami, Zwiebeln und Tomate",
      price: 895,
      img: "https://images.pexels.com/photos/9957551/pexels-photo-9957551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "pizza"
    },
    {
      id: nanoid(),
      name: 'Pizza Spinat',
      description: "mit marinierten Hähnchenbruststreifen, Spinat, Knoblauch, Creme Fraiche und Gouda",
      price: 1090,
      img: "https://images.pexels.com/photos/7813568/pexels-photo-7813568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "pizza"
    },
    {
      id: nanoid(),
      name: 'Pizza Prosciutto Funghi',
      description: "mit Hinterschinken, Champignons und Gouda",
      price: 995,
      img: "https://images.pexels.com/photos/4553127/pexels-photo-4553127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "pizza"
    },
    {
      id: nanoid(),
      name: 'Cheeseburger',
      description: "mit 125g Rindfleisch, Gouda, Mayonnaise und Ketchup",
      price: 790,
      img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "burger"
    },

    {
      id: nanoid(),
      name: 'Hamburger',
      description: "mit Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise",
      price: 799,
      img: "https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "burger"
    },

    {
      id: nanoid(),
      name: 'Caesar Salat',
      description: "mit Cocktail-Tomaten, Parmesan und Croutons",
      price: 899,
      img: "https://images.pexels.com/photos/12557595/pexels-photo-12557595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "salad"
    },

    {
      id: nanoid(),
      name: 'Griechischer Salat',
      description: "mit Blattsalaten, Salatgurke, Cocktail-Tomaten, Schafskäse, roten Zwiebeln und Peperoni",
      price: 799,
      img: "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amount: 0,
      isFavorite: false,
      category: "salad"
    },
   
  ];
  
  export default products;
  