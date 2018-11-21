import React from 'react';
import InternshipForm from './internship-form';
import InternshipCard from '../internships/InternshipCard';

class DeleteInternship extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        internshipData: null,
        isActive : true
    }

    componentDidMount() {
        const url = '/api/internships'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                internshipData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }

    DeleteInternship = () =>{
        console.log("deleting.....");
        fetch(`/api/internships/${this.props.match.params.id}`,{
          method: 'DELETE',
          headers:{
            'Authorization': localStorage.getItem('authToken')
          }
        }).then(res => res.json() )
        .then(response=> {
          console.log('delete :', response);
          this.setState({
            isActive : false
        });
        
        })
      }

    render() {
        if(this.state.isLoading){
            return(                <div>{this.state.message}</div>
                );
        }
        else if(!this.state.isActive){
            return(
                <div className="container">
                    <h3>Internship Successfully Deleted</h3>
                    <a href={`/Internships`} className="btn btn-outline-danger btn-sm">Go Back to Internships</a>
                </div>);
        }

        else {
            return (     
                    <div className="container">
                        <h2>Are you Sure want to Delete the item?</h2>
                        <div>
                            <button className="btn btn-outline-danger col-md-3" onClick={this.DeleteInternship}>YES</button>
                            <a  href={`/Internships`} className="btn btn-outline-danger col-md-3">NO</a>
                        </div>
                        <InternshipCard internshipItem={this.state.internshipData} displayFooter={false}/>
                    </div>        
                );
        }
    }
}

export default DeleteInternship;