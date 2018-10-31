import React from 'react';

class networkingForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                networkData: this.props.networkData
            }
        } else {
            this.state = {
                networkData: {
                    "organisation_name": "",
                    "sector_activity": "",
                    "organisation_description": "",
                    "organisation_logo": "",
                    "organisation_url": "",
                    "organisation_address": "",
                    "organisation_city": "",
                    "organisation_postal_code": "",
                    "contact_person": "",
                    "contact_email": "",
                    "contact_phone": "",
                    "active": 1
                }
            }
        }
    }
    submitForm = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className='form-group'>
                    <h2>
                        {`${this.props.isEditing ? "Edit" : "Add"} Network`}
                    </h2>
                    <div>
                        <label>
                            Affiliation
                            <input className='form-control' name="affiliation" value={this.state.networkData.affiliation} onChange={this.updateField} />
                        </label>
                    </div>
                </div>
            </form>
        );
    }
}
export default networkingForm;