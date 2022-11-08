import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'

export default function createadministrateur()
{
    const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');

    const [AdminForm, setAdminForm] = useState({
        password:'qqq',
      email:'tesdxxxx@free.fr',
      phone:'01',
      roleId:1
    })
    const handleChange =(e) =>
    {
        const value = e.target.name;
        setAdminForm({
            ...AdminForm, [e.target.name]: value
          });
    }
    const ScriptFormAdmin = (e) =>
    {
        e.preventDefault()
        ServiceAPI.requetePostAdmin(
            AdminForm.password,
            AdminForm.phone, 
            AdminForm.phone,
            AdminForm.roleId).then (response =>{
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
        <div class="col py-3">
        <div class="container">
        <h1>Formulaire d'Inscription ADMIN</h1>
        <form class="row g-3"  id="register_form"  onSubmit={ScriptFormAdmin} action='' method="post">
       
        <div class="col-md-6">
                <label htmlFor='email'>email:</label>
                <input onChange={handleChange} type="email"  class="form-control" name="email" /><br></br>
            </div>

            <div class="col-md-6">
                <label htmlFor='password'>password:</label>
                <input onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
            </div>
           
            <div class="col-md-6">
                <label htmlFor='phone'>phone:</label>
                <input onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            
            <div class="col-md-4">
                <label htmlFor='role'>roleId:</label>
                <input onChange={handleChange} type="text"  value={"1"} class="form-control" name="roleId" /><br></br>
            </div>
            <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
          </div>
          </div>
    );
}