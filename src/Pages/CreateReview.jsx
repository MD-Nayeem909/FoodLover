import React, { useState } from "react";
import Container from "../Utility/Container";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const CreateReview = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    restaurantName: "",
    location: "",
    rating: 5,
    reviewText: "",
  })

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
          to="/"
          className="font-medium text-xl flex items-center gap-2 mb-4"
        >
          <ArrowLeft /> Back to Reviews
        </Link>
          <h2 className="text-5xl font-bold mb-4">
            Share Your Food Experience
          </h2>
          <p className="text-accent mb-8">
            Share your food experience with the community.
          </p>
        </div>
        <form className="max-w-3xl mx-auto mt-10 bg-base-100 gap-7 p-8 rounded-lg shadow-xl flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label mb-2">
                <span className="label-text">Food Name</span>
              </label>
              <input
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
              name="rating"
              value={formData.rating}
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
              className="textarea textarea-bordered w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 "
              placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
            ></textarea>
          </div>

          <button className="btn btn-primary">Submit Review</button>
        </form>
      </div>
    </Container>
  );
};

export default CreateReview;
