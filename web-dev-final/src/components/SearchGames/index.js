import SearchComponent from "./searchComponent";
import SearchItem from "./SearchItem";
import React from "react";
import {useDispatch, useSelector} from "react-redux";



const SearchGames = () => {
    const searchResults = useSelector(
        state => state.search);
    const dispatch = useDispatch();
    return(
        <div>
        <h1> Search Games </h1>
        <SearchComponent/>
            <div className="list-group">
            {
                searchResults.map((game,index) => {
                    return(<SearchItem game= {game} key = {index}/>);})}
            </div>
        </div>
    )
}

export default SearchGames;