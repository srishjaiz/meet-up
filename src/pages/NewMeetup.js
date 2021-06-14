import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {
  const pageHistory = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://meet-up-c935b-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      pageHistory.replace("/");
    });
  }
  return (
    <section>
      <h1>Create New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
