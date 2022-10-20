import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
export default function createemployer() 
{
  const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const[p, setP] = useState([]);
    const [InscriptionForm, setInscriptionForm]= useState({
      siret:'',
      structurename:'',
      password:'',
      email:'',
      phone:'',
      address:'',
      zipCode:'',
      city:'',
      periods:p
    })
    const handleChange = (e) =>
    {
      const value = e.target.value;
      if (e.target.name == "periods"){
        let test = p.find((p) => p == value)
         if (test == null){
          p.push(value)
         } else {
          let tab = []
          p.map((p) => {
            p != value? tab.push(p): ''
          })
          setP(tab)
          console.log(tab)
         }
      }

      setInscriptionForm({
        ...InscriptionForm, [e.target.name]: value
      });
    }
    const ScriptForm = (e) =>
    {
      e.preventDefault()
      ServiceAPI.requetePostEmployers(InscriptionForm.siret, InscriptionForm.structurename,InscriptionForm.password, InscriptionForm.email, InscriptionForm.phone, InscriptionForm.address,InscriptionForm.zipCode, InscriptionForm.city, InscriptionForm.periods).then(response => {
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
          <label htmlFor='siret'>siret:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="siret" /><br></br>
          <label htmlFor='structurename'>structurename:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="structurename" /><br></br>
          <label htmlFor='password'>password:</label>
          <input onChange={handleChange} type="password" className={styles.inputconnect} name="password" /><br></br>
          <label htmlFor='email'>email:</label>
          <input onChange={handleChange} type="email" className={styles.inputconnect} name="email" /><br></br>
          <label htmlFor='phone'>phone:</label>
          <input onChange={handleChange} type="tel" className={styles.inputconnect} name="phone" /><br></br>
          <label htmlFor='address'>address:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="address" /><br></br>
          <label htmlFor='zipCode'>zipCode:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="zipCode" /><br></br>
          <label htmlFor='city'>city:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="city" /><br></br>
          <fieldset name="periods"id='periods'>
          <legend >periods</legend>
          <div>
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value="1"/>
            <label htmlFor="Vacances de février">Vacances de février</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value="2"/>
            <label htmlFor="Vacances d’avril">Vacances d’avril</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value="3"/>
            <label htmlFor="Vacances juillet">Vacances juillet</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value="4"/>
            <label htmlFor="Vacances Août">Vacances Août</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5"/>
            <label htmlFor="Vacances Octobre">Vacances Octobre</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6"/>
            <label htmlFor="Vacances Noël">Vacances Noël</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7"/>
            <label htmlFor="Mercredi">Mercredi</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8"/>
            <label htmlFor="Samedi">Samedi</label>
          </div>
      </fieldset>
          <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
);
}