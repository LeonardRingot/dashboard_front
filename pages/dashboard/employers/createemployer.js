import React, { useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
export default function createemployer() {
  const router = useRouter()
  const [erreur, setErreur] = useState('');
  const [IsOk, setIsOk] = useState('');
  const[period, setPeriod] = useState([]);
  const [InscriptionForm, setInscriptionForm] = useState({
    siret: '',
    structurename: '',
    password: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    periods: period
  })
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name == "periods") {
      let myperiod = period.find((period) => period == value)
      if (myperiod == null) {
        period.push(value)
      } else {
        let tabPeriod = []
        period.map((period) => {
          period != value ? tabPeriod.push(period) : ''
        })
        setPeriod(tabPeriod)
        console.log(tabPeriod)
      }
    }
    setInscriptionForm({
      ...InscriptionForm, [e.target.name]: value
    });
  }
  const ScriptForm = (e) => {
    e.preventDefault()
    ServiceAPI.requetePostEmployers(InscriptionForm.siret, InscriptionForm.structurename, InscriptionForm.password, InscriptionForm.email, InscriptionForm.phone, InscriptionForm.address, InscriptionForm.zipCode, InscriptionForm.city, period).then(response => {
      if (response.status == 201) {
        //router.push('../profile/profile');
        setIsOk('Compte crée');
      } else {
        setIsOk('Compte crée');
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div class="col py-3">
            <div class="container">
      <h1>Formulaire d'Inscription employers</h1>
      <form class="row g-3" onSubmit={ScriptForm} action='' method="post">
      <div class="col-md-6">  
          <label htmlFor='siret'>Numéro de SIRET:</label>
          <input onChange={handleChange} type="text" class="form-control" name="siret" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="structurename" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input onChange={handleChange} type="password" class="form-control" name="password" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input onChange={handleChange} type="email" class="form-control" name="email" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input onChange={handleChange} type="tel" class="form-control" name="phone" /><br></br>
          </div>
          <div class="col-12"> 
          <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="zipCode" /><br></br>
            </div>
            <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input onChange={handleChange} type="text" class="form-control" name="city" /><br></br>
            </div>
          <fieldset name="periods" id='periods'>
            <legend >Périodes de disponibilités</legend>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox"  id="1" name="periods" value="1" />
              <label htmlFor="1">Vacances de février</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="2" name="periods" value="2" />
              <label htmlFor="2">Vacances d’avril</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="3" name="periods" value="3" />
              <label htmlFor="3">Vacances juillet</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="4" name="periods" value="4" />
              <label htmlFor="4">Vacances Août</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="5" name="periods" value="5" />
              <label htmlFor="5">Vacances Octobre</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="6" name="periods" value="6" />
              <label htmlFor="6">Vacances Noël</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="7" name="periods" value="7" />
              <label htmlFor="7">Mercredi</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="8" name="periods" value="8" />
              <label htmlFor="8">Samedi</label>
            </div>
          </fieldset>
          <input value="Envoyer" className={styles.inputsubmit} type="submit" /> <br></br>
        </form>
        <p>{erreur}</p>
        <p>{IsOk}</p>
      </div>
    </div>
  );
}