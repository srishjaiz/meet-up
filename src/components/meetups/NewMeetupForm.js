import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  const titleInputRef = useRef(); // creating Ref object
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); // to prevent the automatic http request sending to server on submitting

    const inputTitle = titleInputRef.current.value; // retriving user input from DOM on submit
    const inputImageURL = imageInputRef.current.value;
    const inputAddress = addressInputRef.current.value;
    const inputDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: inputTitle,
      image: inputImageURL,
      address: inputAddress,
      description: inputDescription,
    };
    props.addMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
