import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'

export default function Register({  }) {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const [GetDataEmployers, setGetDataEmployers] = useState()
    let [data, setData] = useState(null)
    const [updateEmployer, setUpdateEmployer] = useState({
        userId: '',
        siret: '',
        structurename: ''
    })
    useEffect(() => {
        if(!id) {
          return;
        }
        const fetchSomethingById = async () => {
          ServiceAPI.requeteUpdateEmployers()
          .then(response => {
            if(response.status == 201){
                setGetDataEmployers(response.data.data);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])
    useEffect(() => { 
        setUpdateEmployer({
            userId: GetDataEmployers ? GetDataEmployers.userId : '',
            siret: GetDataEmployers ? GetDataEmployers.siret : '',
            structurename: GetDataEmployers ? GetDataEmployers.structurename : '',    
        })
    }, [GetDataEmployers]);

    const handleChange = (e) => {
        const value = e.target.value;
        setUpdateEmployer({
          ...updateEmployer,
          [e.target.name]: value
        });
    }
    const ModifierProfileSubmit = (e) => {
        
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(updateEmployer.userId, updateEmployer.siret, updateEmployer.structurename).then(response => {
            if(response.status == 201){
              //router.push('../profile/profile');
              setIsOk('User mis a jour');
            } else {
              setErreur('NoN');
            }
          }).catch(function(error){
          console.log(error);
        }); 
    }
    return (
<div >
     <h1>Formulaire Modif </h1>
     <div>
        <form className={styles.myform} onSubmit={ModifierProfileSubmit} action='' method="post">
          <label htmlFor='userId'>UserId:</label>
          <input className={styles.inputconnect} onChange={handleChange} type="text"  name="userId" /><br></br>
          <label htmlFor='siret'>siret:</label>
          <input  className={styles.inputconnect} onChange={handleChange} type="text"  name="siret" /><br></br>
          <label htmlFor='structurename'>structurename:</label>
          <input className={styles.inputconnect} onChange={handleChange} type="text"   name="structurename" /><br></br>
         </form>
         <input  value="Submit" className={styles.inputsubmit} type="submit"/> <br></br>
          
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
    );
}