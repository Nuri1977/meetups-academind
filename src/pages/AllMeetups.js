import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect} from "react";

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setLoadMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetup-1c1f5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
    .then((res) => res.json())
    .then((data) => {
      const meetups = [];
      for (let key in data) {
        const meetup = {
          id: key,
          ...data[key],
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadMeetups(meetups);
    });
  },[])



  if(isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
        <MeetupList meetups={loadMeetups}/>
    </section>
    )
}
