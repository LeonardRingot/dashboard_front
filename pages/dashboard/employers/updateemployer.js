import { useRouter } from 'next/router';
import Head from 'next/head'
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

export default function UpdateEmployer({  }) {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const[period, setPeriod] = useState([]);
    const [isActif, setIsActif] = useState([]);
    
    const [updateEmployer, setUpdateEmployer] = useState({
        siret: '',
        structurename: '',
        User:{
          Localisation: {
            address: '',
            city: '',
            zipCode: ''
          },
          password:'',
          passwordconf:'',
          email: '',
          phone: '',
          isActif:''
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
          }
        })
        .catch(error => console.log(error))
      }
      fetchSomethingById()
    }, [id])
    const ModifierProfileSubmit = (e) => {
        e.preventDefault()
        ServiceAPI.requeteUpdateEmployers(id, updateEmployer.siret, updateEmployer.structurename, updateEmployer.User.password , updateEmployer.User.passwordconf,updateEmployer.User.email, updateEmployer.User.phone, updateEmployer.User.isActif , updateEmployer.User.Localisation.address, updateEmployer.User.Localisation.zipCode,updateEmployer.User.Localisation.city,period, isActif).then(response => {
            if(response.status == 201){
              setIsOk('User mis a jour');
              
            } else {
              setIsOk('User mis a jour');
            }
          }).catch(function(error){
            console.log(error);
        }); 
    }
    return (
      <>
      <Head>
        <title>Mise à jour employeurs</title>
      </Head>
<div class="col py-3">
<div class="container">
<Link href="../consultemployeur"><a class="btn btn-primary"> Retour à la page consultation employeurs</a></Link>
     
<section>
  <div class="row g-3">
    <div class="mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Formulaire Mise à jour employers</h5>
        </div>
        <div class="card-body">
          <form id="register_form"  onSubmit={ModifierProfileSubmit} action='' method="post" >
          <h5 class="mb-4">Informations personnelles</h5>
          <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                <label htmlFor='siret'>Numéro de SIRET:</label>
          <input  defaultValue={updateEmployer.siret} onChange={handleChange} class="form-control"  type="text"  name="siret" /><br></br>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input defaultValue={updateEmployer.structurename}  onChange={handleChange} class="form-control" type="text"   name="structurename" /><br></br>
                </div>
              </div>
        </div>
          <div class="row mb-4">
                <div class="col"> 
                      <div class="form-outline">
                      <label htmlFor='password'>Mot de passe:</label>
          <input defaultValue={updateEmployer.User.password}  onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
                      </div>
                </div>
                <div class="col">
                      <div class="form-outline">
                      <label htmlFor='password'>Mot de passe:</label>
          <input defaultValue={updateEmployer.User.passwordconf}  onChange={handleChange} type="password"  class="form-control" name="passwordconf" /><br></br>
                      </div>
                </div>
          </div>  
          <hr class="my-4" />
          <h5 class="mb-4">Localisation</h5>
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                  <label htmlFor='email'>Email:</label>
          <input defaultValue={updateEmployer.User.email}  onChange={handleChange} class="form-control" type="email"   name="email" /><br></br>
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateEmployer.User.phone}  onChange={handleChange} class="form-control" type="tel"   name="phone" /><br></br>
                  </div>
              </div>
            </div>
            <fieldset name='isActif'>
            <div class="form-check"   >
                <input   class="form-check-input"   onChange={handleChange}  value="true"  defaultChecked={updateEmployer.User.isActif} type="radio" name="isActif" id="true"  />
                <label class="form-check-label" htmlFor="true">✅</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input"  onChange={handleChange} value="false" defaultChecked={!updateEmployer.User.isActif} type="radio" name="isActif" id="false"  />
                <label class="form-check-label" htmlFor="false">❌</label>
            </div>
            </fieldset>
            
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                  <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.address}  onChange={handleChange} class="form-control" type="text"   name="address" /><br></br>
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='city'>Ville:</label>
          <input defaultValue={updateEmployer.User.Localisation.city}  onChange={handleChange} class="form-control" type="text"   name="city" /><br></br>
                  </div>
              </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.zipCode}  onChange={handleChange} class="form-control" type="text"   name="zipCode" /><br></br>
                  </div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row mb-4">
              <div class="col">
              <h5 class="mb-4">Périodes disponibles</h5>
                <div class="form-outline">
                <div class="form-check">
                  <input class="form-check-input"  onChange={handleChange} type="checkbox"  checked={(period.find((period) => period == '1'))? true: false}  id="1" name="periods" value="1"/>
                  <label htmlFor="1">Vacances de Février</label>
              </div>
                <div class="form-check">
                  <input class="form-check-input" onChange={handleChange} type="checkbox"  checked={(period.find((period) => period == '2'))? true: false} id="2" name="periods" value="2"  />
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