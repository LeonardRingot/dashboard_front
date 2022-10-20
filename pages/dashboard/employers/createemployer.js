import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
export default function createemployer() 
{
  const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const [InscriptionForm, setInscriptionForm]= useState({
      userId:'',
      siret:'',
      structurename:''
    })
    const handleChange = (e) =>
    {
      const value = e.target.value;
      setInscriptionForm({
        ...InscriptionForm, [e.target.name]: value
      });
    }
    const ScriptForm = (e) =>
    {
      e.preventDefault()
      ServiceAPI.requetePost(InscriptionForm.userId, InscriptionForm.siret, InscriptionForm.structurename).then(response => {
          if(response.status == 201){
            //router.push('../profile/profile');
            setIsOk('Compte crée');
          } else {
            setErreur('Adresse mail deja utilisée.');
          }
        }).catch(function(error){
        console.log(error);
      });
    }
     return (
      <div className={styles.myContainer}>
     <h1>Formulaire d'Inscription employers</h1>
     <div>
        <form className={styles.myform}  onSubmit={ScriptForm} action='' method="post">
        <label htmlFor='UserId'>UserId:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="UserId" /><br></br>
          <label htmlFor='siret'>siret:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="siret" /><br></br>
          <label htmlFor='structurename'>structurename:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="structurename" /><br></br>
          <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
);
}