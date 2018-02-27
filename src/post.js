import React from "react";

import "../css/post.css";

export class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleProduct = this.handleProduct.bind(this);
    this.handlePersonname = this.handlePersonname.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      product: "",
      personname: "",
      price: 0,
      location: "",
      file: ""
    };
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file
      });
    };
    reader.readAsDataURL(file);
  }

  handlePersonname(event) {
    const personname = event.target.value;
    this.setState({
      personname: personname
    });
  }

  handleProduct(event) {
    const product = event.target.value;
    this.setState({
      product: product
    });
  }

  handlePrice(event) {
    const price = event.target.value;
    this.setState({
      price: price
    });
  }

  handleLocation(event) {
    const location = event.target.value;
    this.setState({
      location: location
    });
  }

  handleSubmit(event) {
    window
      .fetch("/success", {
        method: "POST",
        body: JSON.stringify({
          personname: this.state.personname,
          product: this.state.product,
          price: this.state.price,
          location: this.state.location,
          file: this.state.file
        })
      })
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return data;
          } else {
            return Promise.reject({ status: response.status, data });
          }
        });
      })
      .then(result => {
        if (result && result.success === "yes") {
          console.log("success");
        } else {
          console.log("failure");
        }
      })
      .catch(error => console.log("error:", error));
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} alt="" />;
    } else {
      imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div className="container-contact100">
        <div className="wrap-contact100">
          <span className="contact100-form-title">Provide the review</span>
          <form onSubmit={this.handleSubmit}>
            <div className="wrap-input100 bg1">
              <span className="label-input100">Full Name</span>
              <input
                type="text"
                className="input100"
                onChange={this.handlePersonname}
                value={this.state.personname}
                placeholder="Enter Your Name"
              />
              <br />
            </div>

            <div className="wrap-input100 bg1">
              <span className="label-input100"> Product Name </span>

              <input
                className="input100"
                type="text"
                onChange={this.handleProduct}
                value={this.state.product}
                placeholder="Enter the product name"
              />
              <br />
            </div>

            <div className="wrap-input100 bg1">
              <span className="label-input100"> Price </span>
              <input
                type="number"
                className="input100"
                onChange={this.handlePrice}
                value={this.state.price}
                placeholder="Enter the Product Price"
              />
              <br />
            </div>
            <div className="wrap-input100 bg1">
              <span className="label-input100"> Location </span>
              <input
                type="text"
                className="input100"
                onChange={this.handleLocation}
                value={this.state.location}
                placeholder="Enter the location you bought the product"
              />
            </div>
            <br />
            <div className="wrap-input100 bg1">
              <span className="label-input100"> Upload Picture </span>
              <input
                className="input100"
                type="file"
                onChange={e => this._handleImageChange(e)}
              />
              {imagePreview}
            </div>
            <input type="submit" className="submit-button" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
