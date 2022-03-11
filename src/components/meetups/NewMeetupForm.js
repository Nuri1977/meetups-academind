import { useRef } from 'react';

import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';

export default function NewMeetupForm({onAddMeetup}) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();


    const enetredTitle = titleInputRef.current.value;
    const enetredImage = imageInputRef.current.value;
    const enetredAddress = addressInputRef.current.value;
    const enetredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enetredTitle,
      image: enetredImage,
      address: enetredAddress,
      description: enetredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <input type="text" required id='description' ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  )
}
