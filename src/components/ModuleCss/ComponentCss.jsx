import styles from './ComponentCss.module.css';
import './another-stylesheet.css';
export default function ComponentCss() {

    return (
        <>
            <div className={styles.root}>
                <div>
                    First
                </div>
                <div>
                    Second
                </div>
                <div>
                    Third
                </div>
            </div>

        </>
    )

}