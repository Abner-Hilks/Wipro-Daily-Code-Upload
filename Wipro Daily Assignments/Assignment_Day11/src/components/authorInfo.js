import React, { Component } from "react";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authorDetails: null,
    };
  }

  componentDidMount() {
    console.log(`Loading author data for ${this.props.author}...`);

    // Simulate API loading delay
    setTimeout(() => {
      const authorData = this.getAuthorData(this.props.author);

      this.setState({
        loading: false,
        authorDetails: authorData,
      });
    }, 1000);
  }

  // Author-specific data
  getAuthorData(author) {
    const data = {
      "Robin Sharma": {
        name: "Robin Sharma",
        bio: "Robin Sharma is a Canadian writer, leadership expert, and motivational speaker best known for his book 'The Monk Who Sold His Ferrari'. His works inspire readers to live with purpose and lead without a title.",
        topBooks: [
          "The Monk Who Sold His Ferrari",
          "The 5 AM Club",
          "Who Will Cry When You Die?",
        ],
      },
      "Paulo Coelho": {
        name: "Paulo Coelho",
        bio: "Paulo Coelho is a Brazilian author celebrated for his philosophical novels that explore spirituality, destiny, and personal growth. His stories inspire millions to follow their dreams.",
        topBooks: [
          "The Alchemist",
          "Brida",
          "The Valkyries",
        ],
      },
      "Robert Kiyosaki": {
        name: "Robert Kiyosaki",
        bio: "Robert Kiyosaki is an American entrepreneur and author best known for 'Rich Dad Poor Dad'. His books teach financial literacy, investing, and entrepreneurship to empower individuals to achieve financial freedom.",
        topBooks: [
          "Rich Dad Poor Dad",
          "Cashflow Quadrant",
          "Rich Dad's Guide to Investing",
        ],
      },
      "Napoleon Hill": {
        name: "Napoleon Hill",
        bio: "Napoleon Hill was an American self-help author widely considered one of the greatest writers on success. His philosophy emphasizes the power of thoughts, persistence, and definite purpose.",
        topBooks: [
          "Think And Grow Rich",
          "The Law of Success",
          "Success Through a Positive Mental Attitude",
        ],
      },
      "Yuval Noah Harari": {
        name: "Yuval Noah Harari",
        bio: "Yuval Noah Harari is a historian and author whose works explore human evolution, technology, and the future of civilization. His books offer deep insights into where humanity has been and where it’s headed.",
        topBooks: [
          "Sapiens",
          "Homo Deus",
          "21 Lessons for the 21st Century",
        ],
      },
    };

    // Default if no match found
    return (
      data[author] || {
        name: author,
        bio: `${author} is a renowned author with multiple bestselling titles.`,
        topBooks: ["Book One", "Book Two", "Book Three"],
      }
    );
  }

  render() {
    const { loading, authorDetails } = this.state;

    if (loading)
      return (
        <p className="text-center mt-3 text-muted">
          Loading author details...
        </p>
      );

    return (
      <div
        className="card mt-3 shadow-sm"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <div className="card-body">
          <h4 className="card-title">{authorDetails.name}</h4>
          <p className="card-text">{authorDetails.bio}</p>
          <h6 className="mt-3">Top Books:</h6>
          <ul className="list-group list-group-flush">
            {authorDetails.topBooks.map((book, index) => (
              <li key={index} className="list-group-item">
                {book}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
