import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: [
        {
          title: 'CSS Tricks - A Complete Guide to Flexbox',
          url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
          tags: ['css', 'front end'],
          rating: 7
        },
        {
          title: 'freecodecamp',
          url: 'https://www.freecodecamp.org/',
          tags: ['course', 'HTML', 'css', 'javascript', 'front end', 'back end'],
          rating: 10
        },
        {
          title: 'CodeAcademy',
          url: 'https://www.codecademy.com/',
          tags: ['course', 'HTML', 'css', 'javascript', 'front end', 'back end'],
          rating: 5
        },
        {
          title: 'Eloquent Javascript',
          url: 'https://eloquentjavascript.net/',
          tags: ['book', 'javascript'],
          rating: 2
        },
        {
          title: 'Art Of Node',
          url: 'https://github.com/maxogden/art-of-node',
          tags: ['nodejs', 'github repository'],
          rating: 3
        },
        {
          title: 'API list',
          url: 'https://apilist.fun/',
          tags: ['APIs'],
          rating: 1
        }
      ]
    }
  }

  sortByRating = (a, b) => {
    if(a.rating > b.rating) return -1;
    if(a.rating < b.rating) return 1;
    return 0;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Web Dev Resources Ranker</h1>
        </header>
        <nav>
          <p>User</p>
          <p>Search</p>
          <p>Favourites</p>
        </nav>
        <main className="main">
          <ul className="main__list">
          {
            this.state.resources.sort(this.sortByRating).map((res,i) => {
              return (
                <li className="main__list-item" key={i} >
                  <p>{res.title}</p>
                  <p>{res.rating}</p>
                </li>
              )
            })
          }
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
