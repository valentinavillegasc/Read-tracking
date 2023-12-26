import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ readOnly, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (star) => {
    if (!readOnly) {
      setRating(star);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          color={star <= rating ? "gold" : "lightgray"}
          onClick={() => handleStarClick(star)}
          style={{ cursor: readOnly ? "default" : "pointer" }}
        />
      ))}
      {readOnly ? null : <p>Selected rating: {rating}</p>}
    </div>
  );
};

export default Rating;
