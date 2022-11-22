
import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

export default function Register() {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const[period, setPeriod] = useState([]);
    const[degree, setDegree] = useState([]);
    const [isActif, setIsActif] = useState([]);
    
    const [updateProfile, setUpdateProfile] = useState({
      firstname: '',
        lastname: '',
      User:{
        Localisation:{
          address: '',
          zipCode: '', 
          city: ''
         },
         password:'',
         passwordconf:'',
         email: '',
        phone: '',
        isActif:'',
        degrees:degree
      },
      periods:period,
    })
    const handleChange = (e) => 
    {
      const value = e.target.value;
      if (e.target.name == "periods")
      {
        let myperiod = period.find((period) => period == value)
        console.log(myperiod);
         if (myperiod == null)
         {
          period.push(value)
          console.log(period);
          console.log(value);
         } else 
         {
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
        console.log(mydegree);
         if (mydegree == null)
         {
          degree.push(value)
          console.log(degree);
          console.log(value);
         } else 
         {
          let tabDegree = []
          degree.map((degree) => {
            degree != value? tabDegree.push(degree): ''
          })
          setDegree(tabDegree)
          
         }
      }
      if(e.target.name == "isActif")
      {
        console.log(updateProfile.User.isActif)
      }
        setUpdateProfile({
          ...updateProfile,
            User:
            {
              ...updateProfile.User,
              [e.target.name]: value,

                Localisation: {
                  ...updateProfile.User.Localisation,
                  [e.target.name]: value,
                },
            },
          [e.target.name]: value
        });
    }
    useEffect(() => {
        const fetchSomethingById = async () => {
          ServiceAPI.requeteGetCandidatById(id)
          .then(response => {
            if(response.status == 200){
              setUpdateProfile(response.data);
              let perioddata = [];
               response.data.User.Periods.map((period) => perioddata.push(period.id))
               let degreedata = [];
               response.data.User.Degrees.map((degree) => degreedata.push(degree.id))

              setPeriod(perioddata)
              setDegree(degreedata)
              
              console.log(response.data.Periods)
              console.log(period);
              console.log(response.data.User.Degrees)
              console.log(degree);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])
    const ModifierProfileSubmit = (e) => {
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(id, updateProfile.firstname, updateProfile.lastname,updateProfile.User.password,updateProfile.User.passwordconf,updateProfile.User.email,updateProfile.User.phone,updateProfile.User.isActif, updateProfile.User.Localisation.address,updateProfile.User.Localisation.zipCode,
          updateProfile.User.Localisation.city,period,degree, isActif).then(response => {
            if(response.status == 201){
              //router.push('../profile/profile');
              setIsOk('User mis a jour');
            } else {
              setIsOk('User mis a jour');
            }
          }).catch(function(error){
          console.log(error);
          console.log(updateProfile.User.password)
              console.log(updateProfile.User.passwordconf)
        });
    }
    console.log(updateProfile.User.isActif);
    return (
<div class="col py-3">
            <div class="container">
            <Link href="../consultcandidat"><a class="btn btn-primary" >Retour à la page consultation candidats</a></Link>
     <h1>Formulaire de Modification Candidats </h1>
        <form class="row g-3" onSubmit={ModifierProfileSubmit} action='' method="post"> 
        <div class="col-md-6">
            <label htmlFor='firstname'>Prénom:</label>
            <input defaultValue={updateProfile.firstname} onChange={handleChange} type="text" class="form-control" name="firstname" /><br></br>
          </div>
          <div class="col-md-6">
            <label htmlFor='lastname'>Nom:</label>
            <input defaultValue={updateProfile.lastname} onChange={handleChange} type="text" class="form-control" name="lastname" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input defaultValue={updateProfile.User.password} onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='password'>Mot de passe conf:</label>
          <input defaultValue={updateProfile.User.passwordconf} onChange={handleChange} type="password"  class="form-control" name="passwordconf" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input defaultValue={updateProfile.User.email} onChange={handleChange}type="email"  class="form-control" name="email" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateProfile.User.phone} onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <fieldset name='isActif'>
            <div class="form-check"   >
                <input   class="form-check-input"   onChange={handleChange}  value="true"  defaultChecked={updateProfile.User.isActif} type="radio" name="isActif" id="true"  />
                <label class="form-check-label" htmlFor="true">✅</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input"  onChange={handleChange} value="false" defaultChecked={!updateProfile.User.isActif} type="radio" name="isActif" id="false"  />
                <label class="form-check-label" htmlFor="false">❌</label>
            </div>
            </fieldset>
            <div class="col-12"> 
          <label htmlFor='address'>Adresse:</label>
          <input  defaultValue={updateProfile.User.Localisation.address} onChange={handleChange} type="text"  class="form-control" name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code Postal:</label>
          <input defaultValue={updateProfile.User.Localisation.zipCode} onChange={handleChange} type="text"  class="form-control" name="zipCode" /><br></br>
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input defaultValue={updateProfile.User.Localisation.city} onChange={handleChange} type="text"  class="form-control" name="city" /><br></br>
          </div>
          <fieldset name="periods"id='periods'> 
          <legend >Périodes disponibles</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value='1' checked={(period.find((period) => period == '1'))? true: false}/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value='2' checked={(period.find((period) => period == '2'))? true: false}/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value='3' checked={(period.find((period) => period == '3'))? true: false}/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value='4' checked={(period.find((period) => period == '4'))? true: false}/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5" checked={(period.find((period) => period == '5'))? true: false}/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6" checked={(period.find((period) => period == '6'))? true: false}/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7" checked={(period.find((period) => period == '7'))? true: false}/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8" checked={(period.find((period) => period == '8'))? true: false}/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplômes</legend>
          <div class="form-check form-check-inline">
            <input onChange={handleChange} type="checkbox" id="9" name="degrees" value="1" checked={(degree.find((degree) => degree == '1'))? true: false}/>
            <label htmlFor="9">BAFD</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="10" name="degrees" value="2"checked={(degree.find((degree) => degree == '2'))? true: false}/>
            <label htmlFor="10">BAFD en cours</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="11" name="degrees" value="3" checked={(degree.find((degree) => degree == '3'))? true: false}/>
            <label htmlFor="11">BAFA</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="12" name="degrees"value="4" checked={(degree.find((degree) => degree == '4'))? true: false}/>
            <label htmlFor="12">stage pratique</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="13" name="degrees"value="5" checked={(degree.find((degree) => degree == '5'))? true: false}/>
            <label htmlFor="13">Non diplome</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="14" name="degrees"value="6"checked={(degree.find((degree) => degree == '6'))? true: false}/>
            <label htmlFor="14">BPJEPS</label>
          </div>
      </fieldset>
         <input  value="Envoyer" className={styles.inputsubmit} type="submit"/> <br></br>
          </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
    );
}