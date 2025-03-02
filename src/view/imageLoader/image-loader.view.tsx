import { useEffect, useState } from "react";
import styles from "./image-loader.module.scss";
import classNames from "classnames";

interface Props {
    source: string;
    alt?: string;
}

export function ImageLoader({ source: src, alt }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [source, setSource] = useState(src);
    const [count, setCount] = useState(0);

    useEffect(() => setSource(src), [src]);

    const onImageLoad = () => {
        setIsLoading(false);
    };
    
    const onImageError = () => {
        if (count <= 5) {
            console.log("reloading ,", count);
            setCount(count + 1);
            setSource(`${src}?r=${Math.random()}`);
        }
    };

    const wrapperClass = classNames(
        styles.wrapper,
        isLoading ? styles['show-icon'] : styles['hide-icon'],
        !isLoading ? styles['show-image'] : styles['hide-image']
    );

    return (
        <div className={wrapperClass}>
            <span className={styles.icon} role="img" aria-label="robot emoji">
                🤖
            </span>
            <img 
                src={source}
                alt={alt}
                className={styles.thumb}
                onLoad={onImageLoad}
                onError={onImageError} 
            />
        </div>
    );
} 