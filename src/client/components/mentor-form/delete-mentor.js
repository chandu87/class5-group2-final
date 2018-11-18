import React from 'react';
import MentorForm from './mentor-form';
import MentorCard from '../mentors/MentorCard';

class DeleteMentor extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        mentorData: null,
        isActive : true
    }

    componentDidMount() {
        const url = '/api/mentors'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                mentorData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }

    DeleteMentor = () =>{
        console.log("deleting.....");
        fetch(`/api/mentorss/${this.props.match.params.id}`,{
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
            return(                
                <div>{this.state.message}</div>
            );
        }
        else if(!this.state.isActive){
            return(
                <div className="container">
                    <h3>Mentor Successfully Deleted</h3>
                    <a href={`/Mentors`} className="btn btn-outline-danger btn-sm">Go Back to Mentors</a>
                </div>);
        }

        else {
            return (     
                    <div className="container">
                        <h2>Are you Sure want to Delete the item?</h2>
                        <div className="mb-4 mt-4">
                            <button className="btn btn-outline-danger" onClick={this.DeleteMentor}>YES</button>
                            <a  href={`/Mentors`} className="btn btn-outline-danger">NO</a>
                        </div>
                        <MentorCard mentorItem={this.state.mentorData}/>
                    </div>        
                );
        }
    }
}

export default DeleteMentor;