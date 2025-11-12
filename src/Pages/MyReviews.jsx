import React, { useState } from "react";
import Container from "../Utility/Container";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import MyReviewCard from "../Components/MyReviewCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      foodName: "Spicy Thai Green Curry",
      restaurantName: "Bangkok Taste",
      location: "Downtown District",
      rating: 3,
      createdAt: "2025-01-15",
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2019/06/Thai-Green-Chicken-Curry-Square-FS.jpg",
      reviewText:
        "This is hands down the best Thai green curry I've ever had! The balance of spice and creaminess is absolutely perfect. The restaurant has such a warm atmosphere and the staff is incredibly friendly. Highly recommend this place if you're craving authentic Thai cuisine.",
      tags: ["Thai", "Spicy", "Creamy"],
    },
    {
      id: 2,
      foodName: "Wood-Fired Pizza Margherita",
      restaurantName: "Nepali Kitchen",
      location: "Harbor View",
      rating: 5,
      createdAt: "2025-01-10",
      image:
        "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217",
      reviewText:
        "The Wood-Fired Pizza Margherita at Nepali Kitchen is a true culinary delight! The crust is perfectly charred and has that authentic smoky flavor from the wood fire. The fresh basil, mozzarella, and tomato sauce come together in perfect harmony. A must-try for pizza lovers!",
      tags: ["Italian", "Pizza", "Vegetarian"],
    },
    {
      id: 3,
      foodName: "Wood-Fired Pizza Margherita",
      restaurantName: "Nepali Kitchen",
      location: "Harbor View",
      rating: 2,
      createdAt: "2025-01-10",
      image:
        "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217",
      reviewText:
        "The Wood-Fired Pizza Margherita at Nepali Kitchen is a true culinary delight! The crust is perfectly charred and has that authentic smoky flavor from the wood fire. The fresh basil, mozzarella, and tomato sauce come together in perfect harmony. A must-try for pizza lovers!",
      tags: ["Italian", "Pizza", "Vegetarian"],
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Reviews</h1>
            <p className="text-accent animate-bounce">
              Manage all your food reviews in one place
            </p>
          </div>
          <Link
            to="/create-review"
            className="flex items-center gap-2 btn-primary rounded-lg"
          >
            <Plus size={20} />
            Add Review
          </Link>
        </div>

        {reviews.length === 0 ? (
          <div className="card p-12 text-center">
            <h2 className="text-2xl font-bold mb-2 text-text-primary">
              No reviews yet
            </h2>
            <p className="text-text-secondary mb-6">
              Start sharing your food experiences with the community
            </p>
            <Link to="/add-review" className="btn-primary inline-block">
              Write Your First Review
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <MyReviewCard
                key={review.id}
                review={review}
                onDelete={() => handleDelete(review.id)}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyReviews;
