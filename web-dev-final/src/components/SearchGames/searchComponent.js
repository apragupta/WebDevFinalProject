import React, {useEffect, useState} from 'react';
import '../HomeScreen/home.css'
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {search} from "../../actions/search-actions";



const SearchComponent = (startingTerm) => {

    let navigate = useNavigate();


    let [searchTerm, setSearchTerm]
        = useState(startingTerm.startingTerm || "");
    const dispatch = useDispatch();

    const searchClickHandler = () => {
        console.log(searchTerm);
        search(dispatch, searchTerm)
        navigate(`/search/${encodeURIComponent(searchTerm)}`)
    }


    useEffect(() => {if (startingTerm.startingTerm) search(dispatch, startingTerm.startingTerm);},
        [startingTerm.startingTerm]);



    return (
            <div className="input-group border border-1 wd-border-color rounded-pill pe-3 my-2 mb-3">
                <div className="input-group-prepend border-0">
                    <button  type="button" className="btn "
                             onClick={searchClickHandler}>
                        <i className="fa fa-search "></i>
                    </button>
                </div>
                <input type="search" placeholder="Search Games"  className="form-control  border-0 wd-body-bkg-color wd-search-bar"
                       onChange={(event) =>
                           setSearchTerm(event.target.value)} value={searchTerm}
                       onKeyUp={(event) => {
                           if (event.code === "Enter") searchClickHandler()}}/>
            </div>

    );
};

export default SearchComponent;