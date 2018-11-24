import React from 'react';
import NetworkingForm from './networking-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditNetwork extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        networkData: null
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

    render() {
        return (
            this.state.isLoading ? 
                <div className="container container-height">
                    <p className="text-center"><FontAwesomeIcon size="5x" icon="spinner" pulse/></p>
                    <h2 className="text-center">Loading</h2>
                    <hr className="hr-style2"/>
                </div>   :
                <NetworkingForm {...this.props} networkData={this.state.networkData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditNetwork;