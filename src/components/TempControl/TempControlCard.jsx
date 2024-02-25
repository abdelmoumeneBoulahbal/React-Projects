import { useState } from 'react'
import styles from './TempCnt.module.css'

function TempCard (){
    const [temp, setTemp] = useState(0);
    let backgroundClass;

    function incrementTemp() {
        setTemp(prevTemp => prevTemp+1);
    }

    function decrementTemp() {
        setTemp(prevTemp => prevTemp-1);
    }
    

    if(temp < 0) {
        backgroundClass = styles.cold_temp;
    }else if(temp <= 10){
        backgroundClass = styles.medium_temp;
    }else if(temp <= 22){
        backgroundClass = styles.orange_temp;
    }else if(temp >= 23 ){
        backgroundClass = styles.hot_temp;
    }
    

    return(
        <>
            <div className={styles.div_temp}>
                <div className={styles.p_div}>
                    <p className={backgroundClass}>{temp}°C</p>
                </div>
               
                <div>
                    <button onClick={incrementTemp} >+</button>
                    <button onClick={decrementTemp}>-</button>
                </div>
            </div>
        </>
    );


}

export default TempCard