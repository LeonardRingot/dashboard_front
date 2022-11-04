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
        firstname:'',
      lastname:'',
      birthday:'',
      password:'',
      email:'',
      phone:'',
      address:'',
      zipCode:'',
      city:'',
      role:'ADMIN'
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
        ServiceAPI.requetePostAdmin(AdminForm.firstname,
            AdminForm.lastname, 
            AdminForm.birthday,
            AdminForm.password,
            AdminForm.email, 
            AdminForm.phone,
            AdminForm.address,
            AdminForm.zipCode,
            AdminForm.city,
            AdminForm.role).then (response =>{
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
                <label htmlFor='firstname'>firstname:</label>
                <input onChange={handleChange} type="text" class="form-control" name="firstname" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='lastname'>lastname:</label>
                <input onChange={handleChange} type="text" class="form-control" name="lastname" /><br></br>
           </div>
            <div class="col-md-6"> 
                <label htmlFor='birthday'>birthday:</label>
                <input onChange={handleChange} type="date"  class="form-control" name="birthday" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='password'>password:</label>
                <input onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='email'>email:</label>
                <input onChange={handleChange} type="email"  class="form-control" name="email" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='phone'>phone:</label>
                <input onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <div class="col-12">
                <label htmlFor='address'>address:</label>
                <input onChange={handleChange} type="text"  class="form-control" name="address" /><br></br>
            </div>
            <div class="col-md-2">
                <label htmlFor='zipCode'>zipCode:</label>
                <input onChange={handleChange} type="text"  class="form-control" name="zipCode" /><br></br>
            </div>
            <div class="col-md-4">
                <label htmlFor='city'>city:</label>
                <input onChange={handleChange} type="text"  class="form-control" name="city" /><br></br>
            </div>
            <div class="col-md-4">
                <label htmlFor='role'>role:</label>
                <input onChange={handleChange} type="text" value={"ADMIN"} class="form-control" name="role" /><br></br>
            </div>
            <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
          </div>
          </div>
    );
}