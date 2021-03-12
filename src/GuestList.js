import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
    <ul>
        {props.guests
            .filter(guest => !props.isFiltered || guest.isConfirmed)
            .map((guest, index) =>
                <Guest 
                    key={index} 
                    name={guest.name} 
                    isConfirmed={guest.isConfirmed} 
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmationAt(index)} 
                    handleToggleEditing={() => props.toggleEditingAt(index)}
<<<<<<< HEAD
                    setName={text => props.setNameAt(text, index)}
                    handleRemove={() => props.removeGuestAt(index)} />
=======
                    setName={text => props.setNameAt(text, index)} />
>>>>>>> e15e7a07d9a900f0eccf8bfe67994f104c8e4212
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
<<<<<<< HEAD
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired
=======
    isFiltered: PropTypes.bool.isRequired
>>>>>>> e15e7a07d9a900f0eccf8bfe67994f104c8e4212
};

export default GuestList;
