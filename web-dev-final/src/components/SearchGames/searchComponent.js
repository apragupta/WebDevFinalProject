import React from 'react';
import '../HomeScreen/home.css'
const SearchComponent = () => {
    return (

            <div className="input-group border border-1 wd-border-color rounded-pill pe-3 my-2 mb-3">
                <div className="input-group-prepend border-0">
                    <button  type="button" className="btn "><i className="fa fa-search "></i></button>
                </div>
                <input type="search" placeholder="Search Games"  className="form-control  border-0 wd-body-bkg-color wd-search-bar"/>
            </div>

    );
};

export default SearchComponent;