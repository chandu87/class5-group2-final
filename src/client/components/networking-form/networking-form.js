import React from 'react';
import NetworkCard from '../networking/NetworkCard';

class networkingForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                networkData : this.props.networkData,
                displaySubmitForm : false,
                displayDetailsCard:true,
                isActive : true
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
                },
                displaySubmitForm : true,
                displayDetailsCard:false,
                isActive : true               
            }
        }
    }
    // This function for updating the each field value
    updateField = (e) =>{
        const {name, value} = e.target;
        this.setState({
            networkData : {
                ...this.state.networkData, 
                [name]: value
            }
        })

    }
    displaySubmitForm = () =>{
        this.setState({
            displaySubmitForm : true
        });
    }
    deleteNetwork = () =>{
        console.log("deleting.....");
        fetch(`/api/networking/${this.props.match.params.id}`,{
          method: 'DELETE'
        }).then(res => res.json())
        .then(response=> {
          console.log('deelete :', response);
          this.setState({
            isActive : false
        });
        
        })
      }

    //This function for Submitting our request to database to add or modifiy data
    submitForm = (e) =>{
        e.preventDefault();

        let url = '', method = '';
        if(this.props.isEditing){
            url = `/api/networking/${this.props.match.params.id}`;
            method = 'PUT';
        }else{
            url='/api/networking';
            method = 'POST';
        }
        fetch(url, {
            method,
            body: JSON.stringify(this.state.networkData), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => {
              console.log('Success:', response);
              this.setState({
                  displaySubmitForm : false,
                  displayDetailsCard : false
              });
            })
          .catch(error => console.error('Error:', error));
        }
    render(){
        if(this.state.displaySubmitForm && this.state.isActive){
            return(
                <div class="container">
                <form onSubmit={this.submitForm}>       
                    <h2>
                        {`${this.props.isEditing ? "Edit" : "Add"} Network`}
                    </h2>
                    <div className="form-group">
                        <label htmlFor="organisation_name">Organisation name *</label>
                        <input type="text" name="organisation_name" value={this.state.networkData.organisation_name} onChange={this.updateField} className="form-control" id="organisation_name" aria-describedby="nameHelp" placeholder="Enter Name" required/>
                        <small id="nameHelp" className="form-text text-muted">We'll share your details with everyone.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="sector_activity">Sector activity *</label>
                        <input type="text" name="sector_activity" value={this.state.networkData.sector_activity} onChange={this.updateField} className="form-control" id="sector_activity" placeholder="Enter Sector of Activity" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_description">Organisation description</label>
                        <input type="text" name="organisation_description" value={this.state.networkData.organisation_description} onChange={this.updateField} className="form-control form-control-lg" id="organisation_description" placeholder="Enter organisation description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_logo">Organisation logo</label>
                        <input type="url" name="organisation_logo" value={this.state.networkData.organisation_logo} onChange={this.updateField} className="form-control form-control-sm" id="organisation_logo" placeholder="Enter Organisation Logo URL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_url">Organisation url</label>
                        <input type="url" name="organisation_url" value={this.state.networkData.organisation_url} onChange={this.updateField} className="form-control form-control-sm" id="organisation_url" placeholder="Enter organisation URL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_address">Organisation address *</label>
                        <input type="text" name="organisation_address" value={this.state.networkData.organisation_address} onChange={this.updateField} className="form-control" id="organisation_address" placeholder="Enter address, Floor, Street name" required/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_city">Organisation city *</label>
                                <input type="text" name="organisation_city" value={this.state.networkData.organisation_city} onChange={this.updateField} className="form-control" id="organisation_city" placeholder="Enter city name" required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="organisation_postal_code">Organisation postal code *</label>
                                <input type="text" name="organisation_postal_code" value={this.state.networkData.organisation_postal_code} onChange={this.updateField} className="form-control" id="organisation_postal_code" placeholder="Enter Postal code" required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <div className="form-group">
                        <label htmlFor="contact_person">Contact person</label>
                        <input type="text" name="contact_person" value={this.state.networkData.contact_person} onChange={this.updateField} className="form-control" id="contact_person" placeholder="Enter contact person"/>
                    </div>
    
                        </div>
                        <div className="col">
                        <div className="form-group">
                        <label htmlFor="contact_phone">Contact phone</label>
                        <input type="tel" name="contact_phone" value={this.state.networkData.contact_phone} onChange={this.updateField} className="form-control" id="contact_phone" placeholder="Enter contact phone"/>
                    </div>
    
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_email">Contact email *</label>
                        <input type="email" name="contact_email" value={this.state.networkData.contact_email} onChange={this.updateField} className="form-control" id="contact_email" placeholder="Enter contact email" required/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" name="active" value={this.state.networkData.active} onChange={this.updateField} className="form-check-input" id="checkActiveStatus" required/>
                        <label className="form-check-label" htmlFor="checkActiveStatus">Agree to make data active</label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-outline-danger btn-sm">Submit</button>
                    <a href={`/Networking`} className="btn btn-outline-danger btn-sm">Cancel</a>
    
                </form>
                </div>
            );
        }
        else if(this.state.displayDetailsCard && this.state.isActive){
            return(
                    <div>
                        <div>
                            <button className="btn btn-outline-danger btn-sm" onClick={this.displaySubmitForm}> Update</button>
                            <button className="btn btn-outline-danger btn-sm" onClick={this.deleteNetwork}> Delete</button>
                            <a href={`/Networking`} className="btn btn-outline-danger btn-sm network-edit-button">Go Back to Networks</a>
                        </div>
                        <NetworkCard networkItem={this.state.networkData}/>
                    </div>
                    );
        }
        else if(!this.state.isActive){
            return(
                <div>
                    <h3>Network Successfully Deleted</h3>
                    <a href={`/Networking`} className="btn btn-outline-danger btn-sm">Go Back to Networks</a>
                </div>);
        }
        else{
            return(
                <div>
                    <h1>{`Successfully ${this.props.isEditing ? "Edited" : "Added"} Network`}</h1>
                    <br/>
                    <button className="btn btn-outline-danger btn-sm" onClick={this.displaySubmitForm}> Update</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={this.deleteNetwork}> Delete</button>
                    <a className="btn btn-outline-danger btn-sm network-edit-button" href="/Networking/add">Add New Network</a>
                    <a href={`/Networking`} className="btn btn-outline-danger btn-sm network-edit-button">Go Back to Networks</a>
                    <NetworkCard networkItem={this.state.networkData}/>
                </div>);
        }
    }
}   
export default networkingForm;