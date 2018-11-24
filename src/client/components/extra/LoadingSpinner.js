import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class LoadingSpinner extends React.Component{
    render(){
        return(
            <div className="container container-height"> 
                <p className="text-center"><FontAwesomeIcon size="5x" icon="spinner" pulse/></p>
                <h2 className="text-center">Loading</h2>
            </div>
            );
    }
}
export default LoadingSpinner;