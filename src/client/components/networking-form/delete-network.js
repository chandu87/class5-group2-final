import React from 'react';
import NetworkingForm from './networking-form';
import NetworkCard from '../networking/NetworkCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DeleteNetwork extends React.Component {
    state = {
        isLoading: true,
        networkData: null,
        isActive : true
    }

    componentDidMount() {
        const url = '/api/networking'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                networkData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }
    deleteNetwork = () =>{
        console.log("deleting.....");
        fetch(`/api/networking/${this.props.match.params.id}`,{
          method: 'DELETE',
          headers:{
            'Authorization': localStorage.getItem('authToken')
          }
        }).then(res => res.json())
        .then(response=> {
          console.log('deelete :', response);
          this.setState({
            isActive : false
        });
        
        })
      }

    render() {
        if(this.state.isLoading){
            return(             
                <div className="container container-height">
                    <p className="text-center"><FontAwesomeIcon size="5x" icon="spinner" pulse/></p>
                    <h2 className="text-center">Loading</h2>
                <hr className="hr-style2"/>
            </div>
                );
        }
        else if(!this.state.isActive){
            return(
                <div className="container">
                    <h3>Network Successfully Deleted</h3>
                    <a href={`/Networking`} className="btn btn-outline-danger btn-sm"><FontAwesomeIcon icon="caret-square-left"/> Go Back</a>
                </div>);
        }

        else {
            return (     
                    <div className="container">
                        <h2>Are you Sure want to Delete this below Network</h2>
                        <div>
                            <button className="btn btn-outline-danger col-md-3" onClick={this.deleteNetwork}>YES</button>
                            <a  href={`/Networking`} className="btn btn-outline-danger col-md-3">NO</a>
                        </div>
                        <NetworkCard networkItem={this.state.networkData}/>
                    </div>        
                );
        }
    }
}

export default DeleteNetwork;