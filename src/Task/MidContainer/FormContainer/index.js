import styles from './styles.module.css';
import arrow from '../../icons8-right-arrow-30 (1).png';

const FormContainer = ()=>{
    return (
        <div>
            <div className={styles.form}>
                <div className={styles.header}>
                    Fill out the form.
                </div>

                <div className={styles.sub_header}>
                    Our eam will touch base with you within 24 hours
                </div>

                <div>
                    <div className={styles.one_block}>
                        <div style={{width:'50%'}} className={styles.line}>
                            Full Name*
                        </div>
                        <div  style={{width:'50%'}} className={styles.line}>
                            Email Id*
                        </div>
                    </div>

                    <div className={styles.one_block}>
                        <div style={{width:'50%'}} className={styles.line}>
                            Country
                        </div>
                        <div  style={{width:'50%'}} className={styles.line}>
                            Country number
                        </div>
                    </div>

                    <div  style={{width:'96%'}} className={styles.line}>
                        Tell Usur your requirements*
                    </div> 
                </div>

                <div className={styles.end_section}>
                    <div className={styles.submit}>
                        Submit
                    </div>

                    <div className={styles.right_arrow}>
                        <img src = {arrow} alt='loading' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FormContainer