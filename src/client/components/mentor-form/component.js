import React, { Component } from 'react';

/*
TODOs
1. Call the server and save the data in the DB
  1.a Turn the form data into json object
  1.b Call the appropriate endpoint
2. Validation
*/
class MentorForm extends Component {
    state = {
        "first_name": "Susanne",
        "last_name": "Lervad",
        "email": "sl@kontiki.fr",
        "gender": "Female",
        "profile_picture": "http://dummyimage.com/90x90.png/cc0000/ffffff",
        "mentor_description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "languages": "Danish/French/English",
        "availability": "Every Thursday from 12:00 PM to 03:00 PM",
        "offering": "Networking/Self-employment/Terminology research",
        "area_location": "Region Zealand",
        "preferred_meeting_place": "Islands Brygge Copenhagen S",
        "affiliation": "Termplus",
        "active": 1
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        console.log({ state: this.state })

        // debugger;

        // alert(JSON.stringify(this.state));

        // TODO Call the api to save the form


        var url = '/api/mentors';
        var data = this.state;

        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.text())
        .then(response => {
            console.log('Success:', response)
            // TODO redirect to the Mentors list page (/Mentors)
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>
                        First Name
                        <input name="first_name" value={this.state.first_name} onChange={this.updateField} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <input name="last_name" value={this.state.last_name} onChange={this.updateField} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default MentorForm;