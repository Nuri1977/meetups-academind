import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://worldwidetravel.tips/wp-content/uploads/2019/07/weather-in-Amsterdam-Netherlands-Amsterdam-weather.jpg',
    address: 'Meetupstreet 8, 45684 Meetup City',
    description:
      'This is a second, amazing meetup which you definitely should not miss.',
  },
];

export default function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA}/>
    </section>
    )
}
