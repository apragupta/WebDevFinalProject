import SearchComponent from "./searchComponent";
import SearchItem from "./SearchItem";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useGetSearchQuery} from "../reducers/api";
import {Spinner} from "react-bootstrap";



const SearchGames = () => {
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'search'});
    };
    let { term } = useParams();
    useEffect(updateNav);
    const {
        data: searchResults,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSearchQuery(term || "")
    let content

    if (isLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess) {
        content = <div className="list-group">
            {
                searchResults.map((game,index) => {
                    return(<SearchItem game= {game} key = {index}/>);})}
        </div>
    } else if (isError) {
        content = <div>{error.error}</div>
    }
    return(
        <div>
        <h1> Search Games </h1>
        <SearchComponent startingTerm={term}/>
            {content}
        </div>
    )
}

export default SearchGames;