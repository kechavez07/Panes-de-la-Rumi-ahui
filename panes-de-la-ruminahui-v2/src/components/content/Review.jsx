import React, { useEffect, useState } from "react";
import './Review.css'
import Title from './Title'
import CircleDinamic from "../loader/CircleDinamic";

const Review = (props) => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const tableName = "review";
        fetch(`http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/get_data.php?table=${tableName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setReviews(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return (
        <>
            <Title text="Reseñas"/>
            <div className="container-reviews">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div className="card-review" style={{ '--rating': review.rating*20 }}>
                            <div className="icon-review">🫠</div>
                            <div className="title-review">{review.name}</div>
                            <p className="description-review">{review.comment}</p>
                            <div className="rating-review"></div>
                        </div>
                    ))
                ) : (
                    <CircleDinamic/>
                )}
            </div>
        </>
    )
}

export default Review;