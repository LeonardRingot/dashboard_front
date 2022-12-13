
import { useRouter } from 'next/router';
import Head from 'next/head'
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
         if (myperiod == null)
         {
          period.push(value)
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
         if (mydegree == null)
         {
          degree.push(value)
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
              setIsOk('Utilisateur mis a jour');
            } else {
              setIsOk('Utilisateur mis a jour');
            }
          }).catch(function(error){
            console.log(error);
        });
    }
    return (
      <>
      <Head>
        <title>Mise à jour candidats</title>
      </Head>
<div class="col py-3">
            <div class="container">
            <Link href="../consultcandidat"><a class="btn btn-primary" >Retour à la page consultation candidats</a></Link>
            <section>
  <div class="row g-3">
    <div class=" mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Formulaire Mise à jour candidats</h5>
        </div>
        <div class="card-body">
          <form id="register_form"  onSubmit={ModifierProfileSubmit} action='' method="post" >
          <h5 class="mb-4">Informations personnelles</h5>
          <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="form6Example1">Prenom</label>
                  <input type="text" defaultValue={updateProfile.firstname} onChange={handleChange} id="form6Example1" name="firstname" class="form-control" />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="form6Example2">Nom</label>
                  <input type="text" defaultValue={updateProfile.lastname} onChange={handleChange} id="form6Example2" name="lastname" class="form-control" />
                </div>
              </div>
        </div>
          <div class="row mb-4">
                <div class="col"> 
                      <div class="form-outline">
                        <label htmlFor='password'>Mot de passe:</label>
                        <input onChange={handleChange} defaultValue={updateProfile.User.password} type="password"  class="form-control" name="password" />
                      </div>
                </div>
                <div class="col">
                      <div class="form-outline">
                          <label htmlFor='passwordconf'>Mot de passe conf:</label>
                          <input onChange={handleChange} defaultValue={updateProfile.User.passwordconf} type="password"  class="form-control" name="passwordconf" />
                      </div>
                </div>
          </div>  
          <hr class="my-4" />
          <h5 class="mb-4">Localisation</h5>
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                    <label htmlFor='email'>Email:</label>
                    <input  type="email" onChange={handleChange} defaultValue={updateProfile.User.email}  class="form-control" name="email" />
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                <label htmlFor='phone'>Numéro de téléphone:</label>
                <input  type="tel"onChange={handleChange} defaultValue={updateProfile.User.phone} maxLength={9} placeholder='ex: 782361188'  class="form-control" name="phone" />
                  </div>
              </div>
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
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                  <label htmlFor='address'>Adresse:</label>
                  <input  type="text" onChange={handleChange} defaultValue={updateProfile.User.Localisation.address} class="form-control" name="address" maxLength={50} />
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='city'>Ville:</label>
                  <input type="text" onChange={handleChange} defaultValue={updateProfile.User.Localisation.city} class="form-control" name="city" maxLength={50}/>
                  </div>
              </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='zipCode'>Code Postal:</label>
          <input  type="text"  onChange={handleChange} class="form-control"  defaultValue={updateProfile.User.Localisation.zipCode} name="zipCode" maxLength={5}/>
                  </div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row mb-4">
              <div class="col">
              <h5 class="mb-4">Périodes disponibles</h5>
                <div class="form-outline">
                <div class="form-check">
                  <input class="form-check-input"  onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '1'))? true: false} id="1" name="periods" value="1"/>
                  <label htmlFor="1">Vacances de Février</label>
              </div>
                <div class="form-check">
                  <input class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '2'))? true: false} id="2" name="periods" value="2"/>
                  <label htmlFor="2">Vacances d’avril</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '3'))? true: false} id="3" name="periods" value="3"/>
                <label htmlFor="3">Vacances juillet</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '4'))? true: false} id="4" name="periods" value="4"/>
                <label htmlFor="4">Vacances Août</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '5'))? true: false}  id="5" name="periods" value="5"/>
                <label htmlFor="5">Vacances Octobre</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange}  type="checkbox" checked={(period.find((period) => period == '6'))? true: false} id="6" name="periods" value="6"/>
                <label htmlFor="6">Vacances Noël</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '7'))? true: false} id="7" name="periods" value="7"/>
                <label htmlFor="7">Mercredi</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(period.find((period) => period == '8'))? true: false} id="8" name="periods" value="8"/>
                <label htmlFor="8">Samedi</label>
              </div>
                </div>
              </div>
              <div class="col">
              <h5 class="mb-4">Diplômes</h5>
                <div class="form-outline">
                <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '1'))? true: false} id="9" name="degrees" value="1" />
            <label htmlFor="9">BAFD</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input"  onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '2'))? true: false} id="10" name="degrees" value="2"/>
            <label htmlFor="10">BAFD en cours</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '3'))? true: false} id="11" name="degrees" value="3"/>
            <label htmlFor="11">BAFA</label>
              </div>
              <div class="form-check">
              <input  class="form-check-input" onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '4'))? true: false} id="12" name="degrees" value="4"/>
            <label htmlFor="12">stage pratique</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input" onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '5'))? true: false} id="13" name="degrees"value="5"/>
            <label htmlFor="13">Non diplome</label>
              </div>
              <div class="form-check">
              <input  class="form-check-input" onChange={handleChange} type="checkbox" checked={(degree.find((degree) => degree == '6'))? true: false} id="14" name="degrees" value="6"/>
                <label htmlFor="14">BPJEPS</label>
              </div>
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
        
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
   </>
    );
}