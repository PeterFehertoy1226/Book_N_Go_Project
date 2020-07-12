import React from 'react';


import './searchBox.css';

const SearchBox = props => {




    return (

        <div className="searchBox">


            <h2>Where would you like to travel ?</h2>
            <input type="text"
                spellcheck="false"
                name=""
                id="from"
                placeholder="Where from"
                class=""
                autocomplete="off"
            >
            </input>

            <input type="text"
                spellcheck="false"
                name=""
                id="from"
                placeholder="Where to"
                class=""
                autocomplete="off"
            >
            </input>
            <div id="date-passanger">
                <input type="date" id="start-date" name="birthday"></input>

                <input type="number" id="passenger" placeholder="Passengers"  ></input>
            </div>


            <div id="search-button" >
                <h2>Search</h2>
            </div>


        </div>
    );


};

export default SearchBox;