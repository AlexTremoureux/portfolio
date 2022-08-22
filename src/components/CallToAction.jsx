import React from 'react';

const CallToAction = (props) => {

    return (
        <button type='button' className='CTA' onClick={props.action}>
            {props.text}
        </button>
    );
};

export default CallToAction;