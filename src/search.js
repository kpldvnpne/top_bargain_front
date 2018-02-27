import React from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import qs from "query-string";

import "../css/search.css";

const searchResults = {
  recommendedPrice: 1000,
  list: [
    {
      image: new Blob(),
      productName: "Table",
      location: "Baneshwor",
      price: 1500
    },
    {
      image: new Blob(),
      productName: "Table",
      location: "Baneshwor",
      price: 1500
    },
    {
      image: new Blob(),
      productName: "Table",
      location: "Baneshwor",
      price: 1500
    },
    ,
    {
      image: new Blob(),
      productName: "Table",
      location: "Baneshwor",
      price: 1500
    }
  ]
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      instantSearchListVisible: false,
      instantSearchList: ["Table", "Radio", "Chair", "Towel"]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  handleInputChange(e) {
    const search = e.target.value;
    this.setState({
      searchInput: search
    });
    axios
      .get("/instantSearch?" + search)
      .then(response => {
        if (response && response.instantSearchList) {
          const instantSearchList = response.instantSearchList;
          this.setState({
            instantSearchList: instantSearchList
          });
          console.log("Received instant search results");
        } else {
          throw "Received blank response";
        }
      })
      .catch(error => {
        console.log("Error receiving instant search. Error: " + error);
      });
  }

  handleGainedFocus() {
    this.setState({
      instantSearchListVisible: true
    });
  }

  handleLostFocus() {
    if (this.state.mouseLeft)
      this.setState({
        instantSearchListVisible: false
      });
  }

  handleSubmit(event) {
    const url = "/search?q=" + encodeURIComponent(this.state.searchInput);
    axios
      .get("/search?" + this.state.searchInput)
      .then(response => {
        if (response.searchResults) {
          this.props.setSearchResults(response.searchResults);
        } else {
          throw Error("Did not receive search results");
        }
      })
      .catch(error => {
        console.log("Could not search! Error: " + error);
      });

    this.props.history.push(url);

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  setSearch(event) {
    const searchValue = event.target.innerHTML;
    console.log(searchValue);
    this.setState({
      searchInput: searchValue,
      instantSearchListVisible: false
    });

    this.handleSubmit(null);
  }

  render() {
    let instantSearchResult;
    if (this.state.instantSearchListVisible) {
      instantSearchResult = this.state.instantSearchList.map(
        instantSearchItem => {
          return (
            <div
              onClick={e => this.setSearch(e)}
              key={instantSearchItem}
              className="instantSearchItem"
            >
              {instantSearchItem}
            </div>
          );
        }
      );
    } else {
      instantSearchResult = <div />;
    }
    return (
      <div className="searchContainer">
        <div
          className="searchBar"
          tabIndex="1" //To receive focus
          onFocus={() => this.handleGainedFocus()}
          onBlur={() => this.handleLostFocus()}
          onMouseLeave={() => {
            this.setState({ mouseLeft: true });
          }}
          onMouseEnter={() => {
            this.setState({ mouseLeft: false });
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              className="searchBarInput"
              onChange={this.handleInputChange}
              value={this.state.searchInput}
              placeholder="What are you searching for?"
            />
          </form>
          <div className="instantSearchList">{instantSearchResult}</div>
        </div>
      </div>
    );
  }
}

const SearchBarWithRouter = withRouter(SearchBar);

function SearchItem(props) {
  return (
    <div className="searchItem">
      <img className="productImage" alt={props.produtName + "'s Image"} />
      <div className="productDetails">
        <h2>Product Details</h2>
        <p>Product Name: {props.productName}</p>
        <p>Location: {props.location}</p>
        <p>Price of Purchase: {props.price}</p>
      </div>
    </div>
  );
}

class SearchResult extends React.Component {
  render() {
    const searchItems = this.props.searchResults.list.map(purchaseDetails => {
      return <SearchItem {...purchaseDetails} />;
    });
    return (
      <div className="searchResult">
        <div className="recommendedPrice">
          Recommended price: Rs. {this.props.searchResults.recommendedPrice}
        </div>
        <div className="itemsList">{searchItems}</div>
      </div>
    );
  }
}

export class SearchApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: searchResults
    };

    this.setSearchResults = this.setSearchResults.bind(this);
  }

  setSearchResults(searchResults) {
    this.setState({
      searchResults: searchResults
    });
  }

  render() {
    const q = qs.parse(this.props.location.search).q;
    const searchResults = q ? (
      <SearchResult searchResults={this.state.searchResults} />
    ) : null;
    return (
      <div className="searchApp">
        <h2>Find out the price for your item</h2>
        <SearchBarWithRouter setSearchItems={this.setSearchItems} />
        {searchResults}
      </div>
    );
  }
}
