import React, {useState} from 'react';
import '../HomeScreen/home.css'
import {useDispatch} from "react-redux";
import {search} from "../../actions/search-actions";



const SearchComponent = () => {

    let [searchTerm, setSearchTerm]
        = useState("");
    const dispatch = useDispatch();

    const searchClickHandler = () => {
        console.log(searchTerm);
        search(dispatch, searchTerm)
    }


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
                           setSearchTerm(event.target.value)}/>
            </div>

    );
};

export default SearchComponent;