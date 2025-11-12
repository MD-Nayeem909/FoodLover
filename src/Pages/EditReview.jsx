import React, { useState } from "react";
import Container from "../Utility/Container";
import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const EditReview = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/my-reviews";

  if (!location.state?.reviewData) {
    return <div>Review not found</div>;
  }
  const reviewData = location.state.reviewData;

  const [foodName, setFoodName] = useState(reviewData.foodName || "");
  const [foodImage, setFoodImage] = useState(reviewData.image || "");
  const [restaurantName, setRestaurantName] = useState(
    reviewData.restaurantName || ""
  );
  const [reviewLocation, setReviewLocation] = useState(
    reviewData.location || ""
  );
  const [rating, setRating] = useState(reviewData.rating || 5);
  const [reviewText, setReviewText] = useState(reviewData.reviewText || "");
  const [tags, setTags] = useState(reviewData.tags || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Container>
      <div className="my-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/my-reviews"
            className="font-medium text-xl flex items-center gap-2 mb-4"
          >
            <ArrowLeft /> Back to My Reviews
          </Link>
          <h2 className="text-5xl font-bold mb-4">Edit Review</h2>
          <p className="text-accent mb-8">Update your food review</p>
        </div>
        <form className="max-w-3xl mx-auto mt-10 bg-base-100 gap-7 p-8 rounded-lg shadow-xl flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label mb-2">
                <span className="label-text">Food Name</span>
              </label>
              <input
                onChange={(e) => setFoodName(e.target.value)}
                value={foodName}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
              />
            </div>
            <div className="flex flex-col">
              <label className="label mb-2">
                <span className="label-text">Restaurant Name</span>
              </label>
              <input
                onChange={(e) => setRestaurantName(e.target.value)}
                value={restaurantName}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <label className="label mb-2">
                <span className="label-text">Location of Restaurant</span>
              </label>
              <input
                onChange={(e) => setReviewLocation(e.target.value)}
                value={reviewLocation}
                type="text"
                placeholder="e.g. 18.5"
                className="input w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Food Image URL</span>
            </label>
            <input
              onChange={(e) => setFoodImage(e.target.value)}
              value={foodImage}
              type="text"
              placeholder="https://...Image URL"
              className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Rating</span>
            </label>
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={handleChange}
              className="select select-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
            >
              <option value={5}>5 Stars - Excellent</option>
              <option value={4.5}>4.5 Stars</option>
              <option value={4}>4 Stars - Very Good</option>
              <option value={3.5}>3.5 Stars</option>
              <option value={3}>3 Stars - Good</option>
              <option value={2.5}>2.5 Stars</option>
              <option value={2}>2 Stars - Fair</option>
              <option value={1.5}>1.5 Stars</option>
              <option value={1}>1 Star - Poor</option>
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Your Review</span>
            </label>
            <textarea
              onChange={(e) => setReviewText(e.target.value)}
              value={reviewText}
              rows={6}
              className="textarea textarea-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
              placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
            ></textarea>
          </div>
          <div className="grid grid-cols-1">
            <label className="label mb-2">
              <span className="label-text">Tags (comma-separated)</span>
            </label>
            <input
              onChange={(e) => setTags(e.target.value)}
              value={tags.map((tag) => tag.trim()).join(", ")}
              type="text"
              placeholder="e.g. spicy, vegan, dessert"
              className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
            />
          </div>
          <div className="flex gap-4 w-full justify-end mt-6">
            <button className="btn btn-primary flex-1">Save Changes</button>
            <Link
              to={from}
              state={{ from: location, review: reviewData }}
              className="btn btn-outline border-gray-300 flex-1"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditReview;
