import styles from "./profile.module.scss";
import { Robot } from "../../types";
import { ImageLoader } from "../imageLoader/image-loader.view";

type OptionalRobot = Partial<Robot>;

export const Profile = ({
    id,
    first_name,
    last_name,
    email,
    country,
    description,
    avatar
}: OptionalRobot) => {
    avatar = avatar?.replace("100x100", "300x300");

    return (
        <div className={styles.container}>
            <div className={styles["image-box"]}>
                <ImageLoader source={avatar as string} alt="avatar image" />
            </div>
            <div className={styles["details-box"]}>
                <h2>
                    {first_name} {last_name}
                </h2>
                <span className={styles.line} />
                <h5 className={styles.detail}>id: {id}</h5>
                <h5 className={styles.detail}>country: {country}</h5>
                <h5 className={styles.detail}>email: {email}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}; 