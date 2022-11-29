import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link';
export default function createemployer() {
  const [erreur, setErreur] = useState('');
  const [IsOk, setIsOk] = useState('');
  const[period, setPeriod] = useState([]);
  const [InscriptionForm, setInscriptionForm] = useState({
    siret: '',
    structurename: '',
    password: '',
    passwordconf:'',
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
      }
    }
    setInscriptionForm({
      ...InscriptionForm, [e.target.name]: value
    });
  }
  const ScriptForm = (e) => {
    e.preventDefault()
    ServiceAPI.requetePostEmployers(InscriptionForm.siret, InscriptionForm.structurename, InscriptionForm.password,InscriptionForm.passwordconf, InscriptionForm.email, InscriptionForm.phone, InscriptionForm.address, InscriptionForm.zipCode, InscriptionForm.city, period).then(response => {
      if (response.status == 201) {
        
        setIsOk('Compte crée');
      } else {
        setIsOk('Compte crée');
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
    <Head>
      <title>Création d'employeurs</title>
    </Head>
    <div class="col py-3">
            <div class="container">
            <Link href="../consultemployeur"><a class="btn btn-primary" >Retour à la page consultation employeurs</a></Link>
            <section>
  <div class="row g-3">
    <div class=" mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Formulaire d'Inscriptions employeurs</h5>
        </div>
        <div class="card-body">
          <form id="register_form"  onSubmit={ScriptForm} action='' method="post" >
          <h5 class="mb-4">Informations de l'entreprise</h5>
          <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                <label htmlFor='siret'>Numéro de SIRET:</label>
          <input onChange={handleChange} type="text" class="form-control" name="siret" /><br></br>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="structurename" /><br></br>
                </div>
              </div>
        </div>
          <div class="row mb-4">
                <div class="col"> 
                      <div class="form-outline">
                        <label htmlFor='password'>Mot de passe:</label>
                        <input onChange={handleChange} type="password"  class="form-control" name="password" />
                      </div>
                </div>
                <div class="col">
                      <div class="form-outline">
                          <label htmlFor='passwordconf'>Mot de passe conf:</label>
                          <input onChange={handleChange} type="password"  class="form-control" name="passwordconf" />
                      </div>
                </div>
          </div>  
          <hr class="my-4" />
          <h5 class="mb-4">Localisation</h5>
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                    <label htmlFor='email'>Email:</label>
                    <input  type="email" onChange={handleChange}  class="form-control" name="email" />
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                <label htmlFor='phone'>Numéro de téléphone:</label>
                <input  type="tel"onChange={handleChange} maxLength={9} placeholder='ex: 782361188'  class="form-control" name="phone" />
                  </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col"> 
                  <div class="form-outline">
                  <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="address" /><br></br>
                  </div>
                </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="zipCode" /><br></br>
                  </div>
              </div>
              <div class="col">
                  <div class="form-outline">
                  <label htmlFor='city'>Ville:</label>
          <input onChange={handleChange} type="text" class="form-control" name="city" /><br></br>
                  </div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row mb-4">
              <div class="col">
              <h5 class="mb-4">Périodes disponibles</h5>
                <div class="form-outline">
                <div class="form-check">
                  <input class="form-check-input"  onChange={handleChange} type="checkbox" id="1" name="periods" value="1"/>
                  <label htmlFor="1">Vacances de Février</label>
              </div>
                <div class="form-check">
                  <input class="form-check-input" onChange={handleChange} type="checkbox" id="2" name="periods" value="2"/>
                  <label htmlFor="2">Vacances d’avril</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange} type="checkbox" id="3" name="periods" value="3"/>
                <label htmlFor="3">Vacances juillet</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange} type="checkbox" id="4" name="periods" value="4"/>
                <label htmlFor="4">Vacances Août</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" id="5" name="periods" value="5"/>
                <label htmlFor="5">Vacances Octobre</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" onChange={handleChange}  type="checkbox" id="6" name="periods" value="6"/>
                <label htmlFor="6">Vacances Noël</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" id="7" name="periods" value="7"/>
                <label htmlFor="7">Mercredi</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" onChange={handleChange} type="checkbox" id="8" name="periods" value="8"/>
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