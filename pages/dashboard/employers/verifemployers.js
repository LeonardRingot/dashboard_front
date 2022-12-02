import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'
export default function Verifemployers(){
    const router = useRouter()
const {id} = router.query
const [isActif, setIsActif] = useState([]);

const [verifEmployers, setverifEmployers] = useState({
    siret: '',
    structurename: '',
    User:{
        Localisation: {
              address: '',
              city: '',
              zipCode: ''
        },
      email: '',
      phone: '',
      isActif:'',
    },
    periods:'',
})
 const handleChange = (e) => 
 {

 if(e.target.name == "isActif")
 {
   console.log(verifEmployers.User.isActif)
 }
 setverifEmployers({
     ...verifEmployers,
       User:
       {
         ...verifEmployers.User,
         [e.target.name]: value,

           Localisation: {
             ...verifEmployers.User.Localisation,
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
                setverifEmployers(response.data);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])

      const ModifierStatutEmployeur = (e) => {
        e.preventDefault()
        ServiceAPI.requeteVerifEmployeur(id, isActif).then(response => {
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
        <title>Verif employees employeurs</title>
      </Head>
      <h1>Employeur récupérer:</h1>
      <ul>
        <li>
            siret: {verifEmployers.siret}
        </li>
        <li> Adresse mail: {verifEmployers.User.email}</li>
        <li> Numéro de téléphone:{verifEmployers.User.phone}</li>
        <li> Adresse:{verifEmployers.User.Localisation.address}</li>
        <li> Ville:{verifEmployers.User.Localisation.city}</li>
        <li> zipCode:{verifEmployers.User.Localisation.zipCode}</li>
        {/* <li> Périodes:{verifEmployers.periods}</li> */}
       
      </ul>
      <form id="register_form"  onSubmit={ModifierStatutEmployeur} action='' method="post" >
      <fieldset name='isActif'>
            <div class="form-check"   >
                <input   class="form-check-input"   onChange={handleChange}  value="true"  defaultChecked={verifEmployers.User.isActif} type="radio" name="isActif" id="true"  />
                <label class="form-check-label" htmlFor="true">✅</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input"  onChange={handleChange} value="false" defaultChecked={!verifEmployers.User.isActif} type="radio" name="isActif" id="false"  />
                <label class="form-check-label" htmlFor="false">❌</label>
            </div>
            </fieldset>
            <input  value="Envoyer" class="btn btn-success" type="submit"/>
      </form>
      
    </>
    )
}

