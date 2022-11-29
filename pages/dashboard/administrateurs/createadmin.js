import React ,{ useEffect, useState } from 'react'
import Head from 'next/head'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'


export default function createadministrateur()
{
    
  const [user, setUser] = useState(null);
    const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const [AdminForm, setAdminForm] = useState({ 
      password:'',
      email:'',
      phone:''
  })
    
    const handleChange =(e) =>
    {
        const value = e.target.value;
        setAdminForm({
            ...AdminForm, [e.target.name]: value
          });
    }
    const ScriptFormAdmin = (e) =>
    {
            e.preventDefault()
            ServiceAPI.requetePostAdmin(AdminForm.password, AdminForm.email, AdminForm.phone ).then (response =>{
                if(response.status == 200){
                    
                    //router.push('../profile/profile');
                    setIsOk('Compte crée');
                    router.push({pathname:'../consultadmin/'})
                  } else {
                    setErreur('Adresse mail deja utilisée.');
                  }
            }).catch(function(error){
                console.log(error);
              }); 
    }
    return (
      <>
      <Head><title>Créations administrateurs</title></Head>
      <div class="col py-3">
      <div class="container">
        <Link href="../consultadmin"><a class="btn btn-primary" >Retour à la page consultation Administrateurs</a></Link>
        <section>
        <div class="row g-3">
            <div class=" mb-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                       <h5 class="mb-0">Formulaire d'Inscriptions Administrateurs</h5>
                 </div>
                 <div class="card-body">
          <form id="register_form"  onSubmit={ScriptFormAdmin} action='' method="post" >
          <h5 class="mb-4">Informations de l'Administrateurs</h5>
          <div class="row mb-4">
              <div class="col">
              <div class="form-outline">
                        <label htmlFor='password'>Mot de passe:</label>
                        <input onChange={handleChange} type="password"  class="form-control" name="password" />
                      </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
              <div class="form-outline">
                        <label htmlFor='password'>Email:</label>
                        <input onChange={handleChange} type="email"  class="form-control" name="email" />
                      </div>
              </div>
              
            </div>
            <div class="row mb-4">
              <div class="col">
              <div class="form-outline">
                        <label htmlFor='phone'>Numéro de téléphone:</label>
                        <input onChange={handleChange} type="tel" maxLength={9} placeholder='ex: 782361188' class="form-control" name="phone" />
                      </div>
              </div>
              
            </div>
                <input  value="Envoyer" class="btn btn-success" type="submit"/>
              </form>
              </div>
               </div>
            </div>
          </div>
        </section>
     </div>
      </div>
          </>
    );
}