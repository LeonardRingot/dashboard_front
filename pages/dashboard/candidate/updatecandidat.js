
import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'

export default function Register() {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const[p, setP] = useState([]);
    const[d, setD] = useState([]);
    const[r, setR] = useState([]);

    const [updateProfile, setUpdateProfile] = useState({
      firstname: '',
        lastname: '',
      User:{
        Localisation:{
          address: '',
          zipCode: '', 
          city: ''
         },
         email: '',
        phone: '',
        isActif:false,
        degrees:d
      },
      periods:p,
      
      
    })
    
    // console.log(updateProfile.firstname)
    // console.log(updateProfile.User.email)
    // console.log(updateProfile.Localisation.address)
    const handleChange = (e) => 
    {
      const value = e.target.value;
      if (e.target.name == "periods")
      {
        let test = p.find((p) => p == value)
        console.log(test);
         if (test == null)
         {
          p.push(value)
          console.log(p);
          console.log(value);
         } else 
         {
          let tab = []
          p.map((p) => {
            p != value? tab.push(p): ''
          })
          setP(tab)
         }
      }
      if (e.target.name == "degrees")
      {
        let testDegree = d.find((d) => d == value)
        console.log(testDegree);
         if (testDegree == null)
         {
          d.push(value)
          console.log(d);
          console.log(value);
         } else 
         {
          let tabDegree = []
          d.map((d) => {
            d != value? tabDegree.push(d): ''
          })
          setD(tabDegree)
          
         }
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
              let a = [];
               response.data.User.Periods.map((p) => a.push(p.id))
               let b = [];
               response.data.User.Degrees.map((d) => b.push(d.id))
              setP(a)
              setD(b)
              console.log(response.data.Periods)
              console.log(p);
              console.log(response.data.User.Degrees)
              console.log(d);
            }
          })
          .catch(error => console.log(error))
        }
        
        fetchSomethingById()
      }, [id])

    const ModifierProfileSubmit = (e) => {
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(id, updateProfile.firstname, updateProfile.lastname,updateProfile.User.email,updateProfile.User.phone,updateProfile.User.isActif, updateProfile.User.Localisation.address,updateProfile.User.Localisation.zipCode,
          updateProfile.User.Localisation.city,p,d).then(response => {
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
<div class="col py-3">
            <div class="container">
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
          <label htmlFor='email'>Email:</label>
          <input defaultValue={updateProfile.User.email} onChange={handleChange}type="email"  class="form-control" name="email" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateProfile.User.phone} onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <div class="form-check"  defaultValue={updateProfile.User.isActif} onChange={handleChange} >
                <input   class="form-check-input"  defaultValue={updateProfile.User.isActif} onChange={handleChange} value={true}  type="radio" name="radio" id="true"  />
                <label class="form-check-label" for="true">
                ✅
                </label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" defaultValue={updateProfile.User.isActif} onChange={handleChange} value={false}  type="radio" name="radio" id="false"  />
                <label class="form-check-label" for="false">
                ❌
                </label>
            </div>
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
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value='1' checked={(p.find((p) => p == '1'))? true: false}/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value='2' checked={(p.find((p) => p == '2'))? true: false}/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value='3' checked={(p.find((p) => p == '3'))? true: false}/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value='4' checked={(p.find((p) => p == '4'))? true: false}/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5" checked={(p.find((p) => p == '5'))? true: false}/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6" checked={(p.find((p) => p == '6'))? true: false}/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7" checked={(p.find((p) => p == '7'))? true: false}/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8" checked={(p.find((p) => p == '8'))? true: false}/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplômes</legend>
          <div class="form-check form-check-inline">
            <input onChange={handleChange} type="checkbox" id="9" name="degrees" value="1" checked={(d.find((d) => d == '1'))? true: false}/>
            <label htmlFor="9">BAFD</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="10" name="degrees" value="2"checked={(d.find((d) => d == '2'))? true: false}/>
            <label htmlFor="10">BAFD en cours</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="11" name="degrees" value="3" checked={(d.find((d) => d == '3'))? true: false}/>
            <label htmlFor="11">BAFA</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="12" name="degrees"value="4" checked={(d.find((d) => d == '4'))? true: false}/>
            <label htmlFor="12">stage pratique</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="13" name="degrees"value="5" checked={(d.find((d) => d == '5'))? true: false}/>
            <label htmlFor="13">Non diplome</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="14" name="degrees"value="6"checked={(d.find((d) => d == '6'))? true: false}/>
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