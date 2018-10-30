import React from 'react';

class networkingForm extends React.Component{
    constructor(props){
        super(props);
        if(this.props.isEditing){
            this.state = {
                networkData : this.props.networkData
            }
        }else{
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
    updateField = (e) =>{
        const {name, value} = e.target;
        this.setState({
            networkData : {
                ...this.state.networkData, 
                [name]: value
            }
        })

    }
    submitForm = (e) =>{
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.submitForm}>       
                <h2>
                    {`${this.props.isEditing ? "Edit" : "Add"} Network`}
                </h2>
                <div className="form-group">
                    <label for="organisation_name">Organisation name</label>
                    <input type="text" name="organisation_name" value={this.state.networkData.organisation_name} onChange={this.updateField} className="form-control" id="organisation_name" aria-describedby="nameHelp" placeholder="Enter Name"/>
                    <small id="nameHelp" class="form-text text-muted">We'll share your details with everyone.</small>
                </div>
                <div className="form-group">
                <label for="sector_activity">Sector activity</label>
                    <input type="text" name="sector_activity" value={this.state.networkData.sector_activity} onChange={this.updateField} className="form-control" id="sector_activity" placeholder="Enter Sector of Activity"/>
                </div>
                <div className="form-group">
                    <label for="organisation_description">Organisation description</label>
                    <input type="text" name="organisation_description" value={this.state.networkData.organisation_description} onChange={this.updateField} className="form-control form-control-lg" id="organisation_description" placeholder="Enter organisation description"/>
                </div>
                <div className="form-group">
                    <label for="organisation_logo">Organisation logo</label>
                    <input type="file" name="organisation_logo" value={this.state.networkData.organisation_logo} onChange={this.updateField} className="form-control-file" id="organisation_logo" placeholder="Upload organisation_logo"/>
                </div>
                <div className="form-group">
                    <label for="organisation_url">Organisation url</label>
                    <input type="url" name="organisation_url" value={this.state.networkData.organisation_url} onChange={this.updateField} className="form-control form-control-sm" id="organisation_url" placeholder="Enter organisation url"/>
                </div>
                <div className="form-group">
                    <label for="organisation_address">Organisation address</label>
                    <input type="text" name="organisation_address" value={this.state.networkData.organisation_address} onChange={this.updateField} className="form-control" id="organisation_address" placeholder="Enter organisation address"/>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label for="organisation_city">Organisation city</label>
                            <input type="text" name="organisation_city" value={this.state.networkData.organisation_city} onChange={this.updateField} className="form-control" id="organisation_city" placeholder="Enter city name"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label for="organisation_postal_code">Organisation postal code</label>
                            <input type="text" name="organisation_postal_code" value={this.state.networkData.organisation_postal_code} onChange={this.updateField} className="form-control" id="organisation_postal_code" placeholder="Enter Postal code"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="form-group">
                    <label for="contact_person">Contact person</label>
                    <input type="text" name="contact_person" value={this.state.networkData.contact_person} onChange={this.updateField} className="form-control" id="contact_person" placeholder="Enter contact person"/>
                </div>

                    </div>
                    <div className="col">
                    <div className="form-group">
                    <label for="contact_phone">Contact phone</label>
                    <input type="tel" name="contact_phone" value={this.state.networkData.contact_phone} onChange={this.updateField} className="form-control" id="contact_phone" placeholder="Enter contact phone"/>
                </div>

                    </div>
                </div>
                <div className="form-group">
                    <label for="contact_email">Contact email</label>
                    <input type="email" name="contact_email" value={this.state.networkData.contact_email} onChange={this.updateField} className="form-control" id="contact_email" placeholder="Enter contact email"/>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="active" value={this.state.networkData.active} onChange={this.updateField} className="form-check-input" id="checkActiveStatus"/>
                    <label className="form-check-label" for="checkActiveStatus">Agree to make data active</label>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        );
    }
}   
export default networkingForm;