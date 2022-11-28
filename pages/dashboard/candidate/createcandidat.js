import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link';
import CardInfoPerso from '../../../components/CardInfoPerso';
export default function createcandidat() 
{
  const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const[period, setPeriod] = useState([]);
    const[degree, setDegree] = useState([]);
    const [InscriptionForm, setInscriptionForm]= useState({
      firstname:'',
      lastname:'',
      birthday:'',
      wantToBe:'',
      password:'',
      passwordconf:'',
      email:'',
      phone:'',
      address:'',
      zipCode:'',
      city:'',
      periods:period,
      degrees:degree
    })
    const handleChange = (e) =>
    {
      const value = e.target.value;
      if (e.target.name == "periods"){
        let myperiod = period.find((period) => period == value)
         if (myperiod == null){
          period.push(value)
         } else {
          let tabPeriod = []
          period.map((period) => {
            period != value? tabPeriod.push(period): ''
          })
          setPeriod(tabPeriod)
         }
      }
      if (e.target.name == "degrees")
      {
        let mydegree = degree.find((degree) => degree == value)
         if (mydegree == null){
          degree.push(value)
         } else {
          let tabDegree = []
          degree.map((degree) => {
            degree != value? tabDegree.push(degree): ''
          })
          setDegree(tabDegree)
         }
      }
      setInscriptionForm({
        ...InscriptionForm, [e.target.name]: value
      });
    }
    const ScriptForm = (e) =>
    {
      e.preventDefault()
      ServiceAPI.requetePost(InscriptionForm.firstname, InscriptionForm.lastname, InscriptionForm.birthday, InscriptionForm.wantToBe,InscriptionForm.password, InscriptionForm.passwordconf,InscriptionForm.email,InscriptionForm.phone,InscriptionForm.address,InscriptionForm.zipCode,InscriptionForm.city,period,degree ).then(response => {
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
      <>
          <div class="col py-3">
            <div class="container">
              <Link href="../consultcandidat"><a class="btn btn-primary" >Retour à la page consultation candidats</a></Link>
              <h1>Formulaire d'Inscription</h1>
        <form class="row g-3"  id="register_form"  onSubmit={ScriptForm} action='' method="post">
        <div class="col-md-6">
             <label htmlFor='firstname'>Prénom:</label>
             <input onChange={handleChange} type="text" class="form-control" name="firstname" />
          </div>
          <div class="col-md-6">
             <label htmlFor='lastname'>Nom:</label>
             <input onChange={handleChange} type="text" class="form-control" name="lastname" />
           </div>
        <div class="col-md-6"> 
          <label htmlFor='birthday'>Date de naissance:</label>
          <input onChange={handleChange} type="date"  class="form-control" name="birthday" />
        </div>
        <div class="col-md-6">
             <label htmlFor='wantToBe'>wantToBe:</label>
             <select onChange={handleChange}  class="form-control" name="wantToBe" >
             <option value="">--Please choose an option--</option>
             <option value="animateur">animateur</option>
             <option value="directeur">directeur</option>
             </select>
           </div>
        <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="password" />
          </div>
          <div class="col-md-6">
          <label htmlFor='passwordconf'>Mot de passe conf:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="passwordconf" />
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input onChange={handleChange} type="email"  class="form-control" name="email" />
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input onChange={handleChange} type="tel"  class="form-control" name="phone" />
          </div>
          <div class="col-12">
          <label htmlFor='address'>Adresse:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="address" />
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code Postal:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="zipCode" />
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="city" />
          </div>
          <fieldset name="periods"id='periods'>
          <legend >Périodes disponibles</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="1" name="periods" value="1"/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="2" name="periods" value="2"/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="3" name="periods" value="3"/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="4" name="periods" value="4"/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="5" name="periods" value="5"/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="6" name="periods" value="6"/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="7" name="periods" value="7"/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="8" name="periods" value="8"/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplômes</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="9" name="degrees" value="1" />
            <label htmlFor="9">BAFD</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="10" name="degrees" value="2"/>
            <label htmlFor="10">BAFD en cours</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="11" name="degrees" value="3"/>
            <label htmlFor="11">BAFA</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="12" name="degrees" value="4"/>
            <label htmlFor="12">stage pratique</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="13" name="degrees"value="5"/>
            <label htmlFor="13">Non diplome</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="14" name="degrees" value="6"/>
            <label htmlFor="14">BPJEPS</label>
          </div>
      </fieldset>
          <input  value="Envoyer" class="btn btn-success" type="submit"/> 
       </form>
       </div>
          </div>
          
<CardInfoPerso></CardInfoPerso>
          
          </>
            
       

     
);
}




      

        

        
   