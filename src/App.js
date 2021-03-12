import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
<<<<<<< HEAD
    pendingGuest: "",
=======
>>>>>>> e15e7a07d9a900f0eccf8bfe67994f104c8e4212
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Matt',
        isConfirmed: false,
        isEditing: true
      }
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

<<<<<<< HEAD
    setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

    toggleFilter = () => 
      this.setState({ isFiltered: !this.state.isFiltered });

    removeGuestAt = index => 
      this.setState({
        guests: [
          ...this.state.guests.slice(0, index),
          ...this.state.guests.slice(index, + 1)
        ]
      })

    handleNameInput = e => 
      this.setState({ pendingGuest: e.target.value });

    newGuestSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...this.state.guests
        ],
        pendingGuest: ''
      });
    }

=======
    toggleFilter = () => 
      this.setState({ isFiltered: !this.state.isFiltered });

>>>>>>> e15e7a07d9a900f0eccf8bfe67994f104c8e4212
    toggleConfirmationAt = index =>
      this.toggleGuestPropertyAt("isConfirmed", index);

    toggleEditingAt = index =>
      this.toggleGuestPropertyAt("isEditing", index);

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
              <input 
                type="text" 
                onChange={this.handleNameInput}
                value={this.state.pendingGuest}
                placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          
          <GuestList 
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt} 
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
<<<<<<< HEAD
            removeGuestAt={this.removeGuestAt}
=======
>>>>>>> e15e7a07d9a900f0eccf8bfe67994f104c8e4212
            />
        </div>
      </div>
    );
  }
}

export default App;
