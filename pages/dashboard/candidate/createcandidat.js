import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
export default function createcandidat() 
{
  const router = useRouter()
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const[p, setP] = useState([]);
    const[d, setD] = useState([]);
    const [InscriptionForm, setInscriptionForm]= useState({
      firstname:'',
      lastname:'',
      birthday:'',
      password:'',
      email:'',
      phone:'',
      address:'',
      zipCode:'',
      city:'',
      periods:p,
      degrees:d
    })
    const handleChange = (e) =>
    {
      const value = e.target.value;
      if (e.target.name == "periods"){
        let test = p.find((p) => p == value)
         if (test == null){
          p.push(value)
         } else {
          let tab = []
          p.map((p) => {
            p != value? tab.push(p): ''
          })
          setP(tab)
          console.log(tab)
         }
      }
      if (e.target.name == "degrees")
      {
        let testDegree = d.find((d) => d == value)
         if (testDegree == null){
          d.push(value)
         } else {
          let tabDegree = []
          d.map((d) => {
            d != value? tabDegree.push(d): ''
          })
          setD(tabDegree)
          console.log(tab)
         }
      }
      setInscriptionForm({
        ...InscriptionForm, [e.target.name]: value
      });
    }
    const ScriptForm = (e) =>
    {
      e.preventDefault()
      ServiceAPI.requetePost(InscriptionForm.firstname, InscriptionForm.lastname, InscriptionForm.birthday,InscriptionForm.password,InscriptionForm.email,InscriptionForm.phone,InscriptionForm.address,InscriptionForm.zipCode,InscriptionForm.city,p,d ).then(response => {
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
      
      <div className={styles.myContainer}>
        

     <h1>Formulaire d'Inscription</h1>
     <div className={styles.widthcinq}>
        <form  id="register_form"  onSubmit={ScriptForm} action='' method="post">
          <div class="form-group">
          <label htmlFor='firstname'>firstname:</label>
          <input onChange={handleChange} type="text" class="form-control" name="firstname" /><br></br>
        </div>
        <div class="form-group">
          <label htmlFor='lastname'>lastname:</label>
          <input onChange={handleChange} type="text" class="form-control" name="lastname" /><br></br>
        </div>

        <div class="form-group">  
          <label htmlFor='birthday'>birthday:</label>
          <input onChange={handleChange} type="date"  class="form-control" name="birthday" /><br></br>
        </div>
          <label htmlFor='password'>password:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
          <div class="form-group">
          <label htmlFor='email'>email:</label>
          <input onChange={handleChange} type="email"  class="form-control" name="email" /><br></br>
          </div>
          <div class="form-group">
          <label htmlFor='phone'>phone:</label>
          <input onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
          </div>
          <div class="form-group">
          <label htmlFor='address'>address:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="address" /><br></br>
          </div>
          <div class="form-group">
          <label htmlFor='zipCode'>zipCode:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="zipCode" /><br></br>
          </div>
          <div class="form-group">
          <label htmlFor='city'>city:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="city" /><br></br>
          </div>
          <fieldset name="periods"id='periods'>
          <legend >periods</legend>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="1" name="periods" value="1"/>
            <label htmlFor="Vacances de février">Vacances de février</label>
          </div>
          <div>
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="2" name="periods" value="2"/>
            <label htmlFor="Vacances d’avril">Vacances d’avril</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="3" name="periods" value="3"/>
            <label htmlFor="Vacances juillet">Vacances juillet</label>
          </div>
          <div>
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="4" name="periods" value="4"/>
            <label htmlFor="Vacances Août">Vacances Août</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="5" name="periods" value="5"/>
            <label htmlFor="Vacances Octobre">Vacances Octobre</label>
          </div>
          <div>
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="6" name="periods" value="6"/>
            <label htmlFor="Vacances Noël">Vacances Noël</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="7" name="periods" value="7"/>
            <label htmlFor="Mercredi">Mercredi</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="8" name="periods" value="8"/>
            <label htmlFor="Samedi">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplomes</legend>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="1" name="degrees" value="1" />
            <label htmlFor="BAFA">BAFA</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="2" name="degrees" value="2"/>
            <label htmlFor="BAFD en cours">BAFD en cours</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="3" name="degrees" value="3"/>
            <label htmlFor="stage pratique">stage pratique</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="4" name="degrees" value="4"/>
            <label htmlFor="BAFD">BAFD</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="5" name="degrees"value="5"/>
            <label htmlFor="BPJEPS">BPJEPS</label>
          </div>
          <div>
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="6" name="degrees" value="6"/>
            <label htmlFor="Non diplome">Non diplome</label>
          </div>
      </fieldset>

          <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
          
         </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
);
}

