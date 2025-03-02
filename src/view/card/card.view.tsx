import styles from "./card.module.scss";
import { Robot } from "../../types";
import { ImageLoader } from "../imageLoader/image-loader.view";

export function Card({ country, description, first_name, avatar }: Robot) {
  return (
    <div className={styles.wrapper}>
      <ImageLoader source={avatar} alt="avatar image" />
      <div className={styles["texts-box"]}>
        <h1>
          {first_name} from {country}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
} 