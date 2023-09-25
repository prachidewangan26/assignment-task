import FormContainer from './FormContainer';
import styles from './styles.module.css';

const MidContainer=()=>{
    return (
        <div className={styles.main}>
            <div style={{width:'50%'}}>
                <div className={styles.top_content}>
                    Searching for {' '}
                    <span style={{fontWeight:600}}> 
                        Augmented Development
                    </span> 
                    {' '}
                    Teams to steer your product towards triumph?"
                </div>

                <div div className={styles.bottom_content}>
                    <div className={styles.single_block} style={{paddingRight:70}}>
                        <div className={styles.block_header}> 
                            50+
                        </div>

                        <div>
                            Clients
                        </div>
                    </div>

                    <div className={styles.single_block}>
                        <div className={styles.block_header}> 
                            80+
                        </div>

                        <div>
                            Projects sucessfully completed
                        </div>
                    </div>

                    <div className={styles.single_block}>
                        <div className={styles.block_header}> 
                            60%
                        </div>

                        <div>
                            of the clients converted into long term engagement partners
                        </div>
                    </div>
                </div> 
            </div>

            <div style={{marginLeft:60, width:'40%'}}>
                <FormContainer/>
            </div>


        </div>
    )
}

export default MidContainer