import React from 'react';
import Recommendations from './components/Recommendations/Recommendations';
import EnterTimeForm from './components/EnterTimeForm/EnterTimeForm';
import './App.scss';

export default class App extends React.Component {
  state = {
    allMovies: [
      {
        "id": 1,
        "name": "Lion King",
        "image": "assets/lion-king.jpeg",
        "runtime": 89
      },
      {
        "id": 2,
        "name": "Frozen",
        "image": "assets/frozen.jpeg",
        "runtime": 109
      },
      {
        "id": 3,
        "name": "Toy Story",
        "image": "assets/toy-story.jpeg",
        "runtime": 81
      },
      {
        "id": 4,
        "name": "Minions",
        "image": "assets/minions.jpeg",
        "runtime": 91
      },
      {
        "id": 5,
        "name": "Up",
        "image": "assets/up.jpeg",
        "runtime": 96
      },
      {
        "id": 6,
        "name": "Moana",
        "image": "assets/moana.jpeg",
        "runtime": 113
      },
      {
        "id": 7,
        "name": "Mulan",
        "image": "assets/mulan.jpeg",
        "runtime": 88
      },
      {
        "id": 8,
        "name": "Princess and the Frog",
        "image": "assets/princess-and-the-frog.jpeg",
        "runtime": 98
      },
      {
        "id": 9,
        "name": "Wreck-It-Ralph",
        "image": "assets/wreck-it-ralph.jpeg",
        "runtime": 108
      },
      {
        "id": 10,
        "name": "Incredibles",
        "image": "assets/incredibles.jpeg",
        "runtime": 116
      }
    ],
    recommendedMovies: [],
    targetRuntime: 0
  };

  submitHandler = (event) => {
    event.preventDefault();

    let idArray = [];
    let recommendedMoviesArray = [];
    let desiredCount = Math.floor(parseInt(event.target.timeInMinutes.value) / 116);

    this.setState({
      targetRuntime: event.target.timeInMinutes.value
    })

    if (parseInt(event.target.timeInMinutes.value) < 116) {
      document.getElementById('too-short').innerHTML = 'Not enough time to watch a movie!';
    }

    else {
      while (idArray.length < desiredCount) {
        let randomIndex = Math.floor(Math.random() * 10) + 1;
        let moviesList = this.state.allMovies;
        let trueIndex = randomIndex - 1;

        if (idArray.indexOf(randomIndex) === -1) {
          idArray.push(trueIndex);
          recommendedMoviesArray.push(moviesList[trueIndex]);
        };
      }

      this.setState({
        recommendedMovies: recommendedMoviesArray
      })
    }
  }

  render() {
    return (
      <>
        <h1 className="App__title">Movies in a Crunch</h1>
        <div className="App__content">
          <EnterTimeForm submitHandler={this.submitHandler} />
          {this.state.targetRuntime <= 0 &&
            <p id="too-short"></p>
          }
          {this.state.targetRuntime >= 116 &&
            <div id="recommendations">
              <Recommendations recommendedMovies={this.state.recommendedMovies} />
            </div>
          }
        </div>
      </>
    );
  }
}