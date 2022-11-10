import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'

export default function updateEmployer({  }) {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const[period, setPeriod] = useState([]);
    
    const [updateEmployer, setUpdateEmployer] = useState({
        siret: '',
        structurename: '',
        User:{
          Localisation: {
            address: '',
            city: '',
            zipCode: ''
          },
          email: '',
          phone: ''
        },
        periods:period
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
      setUpdateEmployer({
        ...updateEmployer,
        User:{
          ...updateEmployer.User,
              [e.target.name]: value,
              Localisation: {
                ...updateEmployer.User.Localisation,
                [e.target.name]: value,
              },
        },
        [e.target.name]: value
      });
    }
    useEffect(() => {
        const fetchSomethingById = async () => {
          ServiceAPI.requeteGetEmployerById(id)
          .then(response => {
            if(response.status == 200){
              setUpdateEmployer(response.data);
              let perioddata = [];
               response.data.User.Periods.map((period) => perioddata.push(period.id))
               setPeriod(perioddata)
               console.log(response.data.Periods)
               console.log(period);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])
    const ModifierProfileSubmit = (e) => {
        e.preventDefault()
        ServiceAPI.requeteUpdateEmployers(id, updateEmployer.siret, updateEmployer.structurename, updateEmployer.User.email, updateEmployer.User.phone, updateEmployer.User.Localisation.address, updateEmployer.User.Localisation.zipCode,updateEmployer.User.Localisation.city, period).then(response => {
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
     <h1>Formulaire de Modification Employers </h1>
     
     <form class="row g-3" onSubmit={ModifierProfileSubmit} action='' method="post">
     <div class="col-md-6">
          <label htmlFor='siret'>Numéro de SIRET:</label>
          <input  defaultValue={updateEmployer.siret} onChange={handleChange} class="form-control"  type="text"  name="siret" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input defaultValue={updateEmployer.structurename}  onChange={handleChange} class="form-control" type="text"   name="structurename" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input defaultValue={updateEmployer.User.email}  onChange={handleChange} class="form-control" type="email"   name="email" /><br></br>
          </div>
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateEmployer.User.phone}  onChange={handleChange} class="form-control" type="tel"   name="phone" /><br></br>
          <div class="col-12"> 
          <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.address}  onChange={handleChange} class="form-control" type="text"   name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.zipCode}  onChange={handleChange} class="form-control" type="text"   name="zipCode" /><br></br>
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input defaultValue={updateEmployer.User.Localisation.city}  onChange={handleChange} class="form-control" type="text"   name="city" /><br></br>
          </div>
          <fieldset name="periods"id='periods'> 
          
          <legend >Périodes de disponibilités</legend>
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
      <input  value="Envoyer" className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
    </div>
    );
}