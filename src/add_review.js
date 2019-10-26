import React from 'react';
import Form from './form';

class AddComment extends React.PureComponent {
  addReview = async (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value
    const rating = e.target.elements.rating.value
    let link = window.location.href
    const hotel_id = link.split('/')[link.split('/').length-2]
    const data = {
      comment,
      rating,
      hotel_id
   }
   try {
   const response = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({reviews:data})
   });
   if(response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
   throw new Error("Failed to comment")
  }
  } catch(error) {
    console.log(error);
  }
  alert('Your comment is successfully added!')
  }
  render() {
    return (
      <div>
        <Form addReview={this.addReview}/>
      </div>
    );
  }
}
export default AddComment;