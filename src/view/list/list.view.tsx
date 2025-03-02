import styles from "./list.module.scss";
import { Card } from "../card/card.view";
import { Robot } from "../../types";

interface ListProps {
  listData: Robot[];
  selectItem: (item: Robot) => void;
}

export function List({ listData, selectItem }: ListProps) {
  return (
    <div className={styles.container}>
      <ul>
        {listData
          .filter((item) => item.show)
          .map((item) => (
            <li key={item.id} onClick={()=> selectItem(item)}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
} 