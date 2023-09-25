import styles from './styles.module.css';
import frame from './Frame 1073714022.png';
import arrow from './icons8-right-arrow-30 (1).png';
import MidContainer from './MidContainer';


const Task  = ()=>{
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div>
                    <img src = {frame} alt='loading' />
                </div>

                <div className={styles.mid_header}>
                    <div style={{paddingRight:20}}>
                        Solutions
                    </div>
                    <div style={{paddingRight:20}}>
                        Service
                    </div>
                    <div style={{paddingRight:20}}>
                        About
                    </div>
                    <div>
                        Culture
                    </div>
                </div>

                <div className={styles.end_header}>
                    <div className={styles.contact_me}>
                        Contact Us
                    </div>

                    <div className={styles.right_arrow}>
                        <img src = {arrow} alt='loading' />
                    </div>
                </div>
            </div>

            <div className={styles.tech}>
                TECH
            </div>

            <MidContainer/>

            <div className={styles.last}>
                Leading the chanage for industries!
            </div>
        </div>
    )
}

export default Task