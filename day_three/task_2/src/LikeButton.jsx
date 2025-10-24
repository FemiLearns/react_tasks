import React, { useState } from 'react';

function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    function handleClick () {
        if (liked) {
            setLiked(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsDisabled(true);
        setTimeout(() => {
        setIsDisabled(false);
        }, 1000);

        setLiked(!liked);

    }   
    return (
        <button className='btn' onClick={handleClick}>
            {liked ? '❤️liked' : '🤍Like'} | {likeCount} Likes
            {isDisabled ? "❤️" : "❤️"}
        </button>
    );
}
export default LikeButton;