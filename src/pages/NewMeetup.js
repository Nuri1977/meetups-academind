import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetup() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {

    fetch('https://meetup-1c1f5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      history.replace('/')
    })
  }

  return (
    <div>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}