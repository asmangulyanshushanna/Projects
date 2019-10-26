import React from 'react';

const Form = props => (
    <form onSubmit={props.addReview}>
        <input type="text" name="comment" placeholder="Comment"/>
        <input type="text" name="rating" placeholder="Rateing"/>
        <button>Add Review</button>
    </form>
)

export default Form;