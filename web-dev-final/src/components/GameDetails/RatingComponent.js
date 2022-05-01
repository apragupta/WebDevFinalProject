import React from 'react';

const RatingComponent = ({game, numberOfPosts}) => {
    const rating_string = () => game.total_rating? Math.round(game.total_rating *100)/100 + "%": "unavailable";
    return (
        <div className="d-flex justify-content-between ">
            <div className="d-flex w-75 justify-content-start">
                <small className="pe-2">
                    {"Rating: " + rating_string() }
                </small>
                <div className="progress w-50 align-self-center"
                     style={{height: ".5rem"}}>
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                         role="progressbar"
                         aria-valuenow={game.total_rating}
                         aria-valuemin="0"
                         aria-valuemax="100"
                         style={{width: `${game.total_rating}%`}}>

                    </div>

                </div>

            </div>
            <small>{game.total_rating_count ? game.total_rating_count : 0} {" Ratings /"}</small>
            <small>{numberOfPosts} {" Posts"}</small>
        </div>
    );
};

export default RatingComponent;