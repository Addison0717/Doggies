import React, {PureComponent} from 'react'
import request from 'superagent'

export default class DogsList extends PureComponent {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => response.body.message)
      .then(data => this.updateBreeds(Object.keys(data)))
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {

    let doggies

    if (this.state.dogBreeds === null) {
       doggies = 'Loading..'
     } else {
       doggies = this.state.dogBreeds.map(breed => <li key={breed}> {breed} </li>)
     }

    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {doggies}
      </div>
    )
  }


}
