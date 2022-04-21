import SearchComponent from "./searchComponent";
import SearchItem from "./SearchItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";



const SearchGames = () => {
    const searchResults = useSelector(
        state => state.search);
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'search'});
    };
    let { term } = useParams();
    useEffect(updateNav);
    return(
        <div>
        <h1> Search Games </h1>
        <SearchComponent startingTerm={term}/>
            <div className="list-group">
            {
                searchResults.map((game,index) => {
                    return(<SearchItem game= {game} key = {index}/>);})}
            </div>
        </div>
    )
}

export default SearchGames;