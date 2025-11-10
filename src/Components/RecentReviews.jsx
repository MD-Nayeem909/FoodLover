import React from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router";

// review: {
//     id: number
//     foodName: string
//     restaurantName: string
//     location: string
//     rating: number
//     reviewerName: string
//     image: string
//   }

const reviews = [
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
];

const RecentReviews = () => {
  return (
    <div className="my-20">
      <div className="">
        <h2 className="text-5xl font-bold mb-4">
          Featured Reviews:<span className="text-gradient"> { reviews.length}</span>
        </h2>
        <p className="text-accent">
          Top-rated food experiences from our community
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 my-10">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link to="/all-reviews" className="btn btn-primary flex mx-auto w-fit">
        Show All Reviews
      </Link>
    </div>
  );
};

export default RecentReviews;
