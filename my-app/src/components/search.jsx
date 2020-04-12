import React from "react";
import "../styles/search.css";
import PropTypes from 'prop-types';
function Search(props) {
  return (
      <div className="search-bar">
      <label className="dob-label" htmlFor="dob">
          DOB
        </label>
        <form>
          <input
          type="date"
          id="dob"
          onChange={props.handleInputChange}
          name="dob">
        </input>
        <input type="date" id="enddate" name="enddate"></input>
        <input
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
          onChange={(e) => props.handleInputChange(e)}>
        </input>
        </form>
      </div>
   
  );
}

Search.propTypes = {
  children: PropTypes.node,
  handleInputChange: PropTypes.func,
}


export default Search;