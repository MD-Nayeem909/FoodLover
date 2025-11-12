import React, { useState } from "react";
import Container from "../Utility/Container";
import ReviewCard from "../Components/ReviewCard";
import { Heart } from "lucide-react";
import { Link } from "react-router";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      foodName: "Burger",
      restaurantName: "McDonalds",
      location: "Dhaka",
      rating: 4,
      reviewerName: "John Doe",
      image:
        "https://www.lurch.de/media/b5/4c/70/1693989554/burger-classic-cheese-rezept.jpg?ts=1753774543",
      tags: ["Burger", "Fast Food", "Cheese"],
      reviewText:
        "This is a great burger. The patty is juicy and the buns are crispy. The cheese is melty and the sauce is delicious. I highly recommend this place!",
    },
    {
      id: 2,
      foodName: "Pizza",
      restaurantName: "Dominos",
      location: "Dhaka",
      rating: 5,
      reviewerName: "Jane Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s",
      tags: ["Pizza", "Italian", "Vegetarian"],
      reviewText:
        "This is a great pizza. The toppings are fresh and the crust is crispy. The sauce is flavorful and the cheese is melty. I highly recommend this place!",
    },
    {
      id: 3,
      foodName: "Sushi",
      restaurantName: "Sushi Place",
      location: "Dhaka",
      rating: 4,
      reviewerName: "John Doe",
      image:
        "https://www.craftycookbook.com/wp-content/uploads/2024/03/tobiko-roll-1200.jpg",
      tags: ["Sushi", "Japanese", "Fresh"],
      reviewText:
        "This is a great sushi. The rolls are fresh and the fish is fresh. The sauce is flavorful and the seaweed is fresh. I highly recommend this place!",
    },
  ]);

  const handleRemoveFavorite = (id, isFavorite) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <Container>
      <div className="my-20">
        <div className="">
          <h2 className="text-5xl font-bold mb-4">My Favorites</h2>
          <p className="text-accent mb-8 animate-bounce">
            Your collection of loved food reviews
          </p>
        </div>
        {favorites.length === 0 ? (
          <div className="w-3xl mx-auto bg-base-100 rounded-2xl p-12 text-center shadow-md">
            <Heart size={48} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-bold mb-2 text-text-primary">
              No favorites yet
            </h2>
            <p className="text-accent">
              Start adding your favorite food reviews to this collection
            </p>
            <Link to="/all-reviews" className="mt-6 btn btn-primary rounded-lg">
              Browse Reviews
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-4 p-4 bg-primary/10 rounded-lg">
              <p className="text-text-primary font-medium">
                You have {favorites.length} favorite{" "}
                {favorites.length === 1 ? "review" : "reviews"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="relative">
                  <ReviewCard review={favorite} handleFavoriteToggle={handleRemoveFavorite} isFavorite={true} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Favorites;
