import { useEffect, useState } from "react";
import { List } from "../list/list.view";
import { Robot } from "../../types";
import { Filter } from "../filter/filter.view";
import { Profile } from "../profile/profile.view";
import { TopBar } from "../top-bar/top-bar.view";
import styles from './app.module.scss';
import { getRobotsList } from "../../api/robots.api";

export function App() {
  const [robotsList, setRobotsList] = useState<Robot[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Robot>();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      const result = await getRobotsList();
      setRobotsList(result);
      setSelectedProfile(result[0]);
      setIsLoading(false);
    })().catch((error: unknown) => setErrorMsg(`fetch operation failed: ${(error as Error).message}`));
  }, []);

  return (
    <div className={styles.container}>
      <TopBar><h1>Pick a Bot</h1></TopBar>
      {errorMsg ? (
        <h1 className={styles["error-msg"]}>{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <>
          <Filter listData={robotsList} onFilter={setRobotsList} />
          <div className={styles["content-box"]}>
            <Profile {...selectedProfile} />
            <List listData={robotsList} selectItem={setSelectedProfile} />
          </div>
        </>
      )}
    </div>
  );
} 