import React, { Component } from "react";
import { connect } from "react-redux";


class Union extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  componentDidMount() {
    /*  this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err)); */
  }

  /*   callApi = async () => {
    const response = await fetch(
      "mongodb+srv://cafe-user:1979Colador@cluster0-iysvx.mongodb.net/test?retryWrites=true&w=majority"
    );
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
 */
/*   handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
 */
  render() {
    return (
      <div className="App">
        <p>
         
        </p>

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Filtrar ciudad</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    test: store.test
  };
}

export default connect(mapStateToProps)(Union);
