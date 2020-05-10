import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./QuoteContainer.css";

export default class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      quote: ""
    };
    this.handleQuote = this.handleQuote.bind(this);
  }

  componentDidMount() {
    this.handleQuote();
  }

  handleQuote() {
    fetch("https://api.kanye.rest/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.quote
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const quote = this.state.quote;
    const author = "Kanye West";
    const twitterLink = `https://twitter.com/intent/tweet?text=${quote} - Kanye West`;

    return (
      <div className="QuoteContainer" id="quote-box">
        <p className="quote" id="text">
          {quote}
        </p>
        <p className="author" id="author">
          {author}
        </p>
        <div className="buttons-row">
          <div className="first-group">
            <a
              className="twitter"
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
              href={twitterLink}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="second-group">
            <button className="cta" onClick={this.handleQuote} id="new-quote">
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
