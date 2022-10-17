import {  useState } from 'react'
import { useRouter } from 'next/router'
import * as ServiceAPI from '../services/ServiceAPI'
import styles from '../styles/Home.module.css'



export default function connexion() {

    const router = useRouter()
  
  const [ConnexionForm, setConnexionform]= useState({
   email:'',
    password:''
  })
  const handleChange = (e) =>
  {
    const value = e.target.value;
    setConnexionform({
      ...ConnexionForm, [e.target.name]: value
    });
  }
  
  const ScriptFormConnexion = (e) =>
  {
    
    e.preventDefault()
    ServiceAPI.requetePostConnexion( ConnexionForm.email, ConnexionForm.password).then(response => {
        if(response.status == 200){
          
          router.push({pathname: '../dashboard/dashboard', query: {id: response.data.data}});
          
        } else {
          
          return res.status(400).send('Super-Administrateur ou administrateur introuvable')
        }
      }).catch(function(error){
        console.log(error);
      });
  }
return(
    <div className={styles.mycontainer}>
    <h1>Formulaire de connexion Administrateur</h1>
    <form className={styles.myform} action="" onSubmit={ScriptFormConnexion} method="post">

      <label htmlFor='email'>Email:</label>
      <input className={styles.inputconnect} onChange={handleChange} type="email"  name="email" /><br></br>

      <label htmlFor='password'>Mot de passe:</label>
      <input className={styles.inputconnect} onChange={handleChange} type="password"  name="password" /><br></br>

      <input className={styles.inputsubmit} value="Submit" type="submit"/> <br></br>
    </form>
  </div>
)
}