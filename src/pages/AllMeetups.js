import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage(props) {
  let [loadedMeetups, setloadedMeetups] = useState([]);
  let [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
    fetch("https://meet-up-c935b-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }

        setisLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
