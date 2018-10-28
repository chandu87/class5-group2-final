import React from 'react';
import MentorForm from './mentor-form';

export default (props) => {
    console.log({props});
    return (
        <MentorForm {...props} isEditing={true} />
    )
}