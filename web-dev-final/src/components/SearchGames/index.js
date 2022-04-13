import react from 'react'
import SearchComponent from "./searchComponent";
import search_results from "../../sample_data/games_search.json"
import SearchItem from "./SearchItem";
import React from "react";

const SearchGames = () => {
    return(
        <div>
        <h1> Search Games </h1>
        <SearchComponent/>
            <div className="list-group">
            {
                search_results.map((game,index) => {
                    return(<SearchItem game= {game} key = {index}/>);})}
            </div>
        </div>
    )
}

export default SearchGames;