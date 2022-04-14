import React from 'react';
import './game.css'

const Tag = ({type = "light", text = ""}) => {
    return (
         <small>&nbsp;<span className={`badge wd-tag-text rounded-pill bg-${type}`}>{text}</span></small>
    );
};

export default Tag;