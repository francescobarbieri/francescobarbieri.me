import styles from '../styles/Newsletter.module.css';
import {robotoSlab} from '../components/fonts';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const Newsletter = () => {
    const [terms, setTerms] = useState(true);

    return (
        <div className={styles.newsletter}>
            <div className={styles.newsletterContent}>
                <img className={styles.img} src=""/>
                <p className={[styles.slogan, robotoSlab.className].join(" ")}>Big ideas, once a week.</p>
                <p className={styles.subslogan}>Sign up for the newsletter so you don't miss a thing! It's free 😉</p>
                <form className={styles.form}>
                    <label className={styles.label}>Your e-mail</label><br/>
                    <input className={styles.input} type="email" placeholder="Write your e-mail here" />
                    <div className={styles.buttonsContainer}>
                        <FormControlLabel control={
                                <Checkbox sx={{color: "rgb(83, 90, 96)"}} defaultChecked onChange={() => setTerms(!terms)}/>
                            }
                            label="Agree to terms"
                            disableTypography={true}
                        />
                        <button className={styles.button}>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Newsletter;