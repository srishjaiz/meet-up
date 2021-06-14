import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Card from "../ui/Card";

import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoriteContext = useContext(FavoriteContext);

  const isItemFavorite = favoriteContext.isItemFavorite(props.id);

  function toggleFavoriteHandler() {
    if (isItemFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isItemFavorite ? "Remove Favorite" : "Mark Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
