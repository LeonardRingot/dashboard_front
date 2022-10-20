
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

    function periodExits(period) {
      if(updateProfile.User.Periods != null){
        return updateProfile.User.Periods.some(function(el) {
          return el.periodname === period;
        }); 
      }
      return false;
    }

    function degreeExits(degree) {
      if(updateProfile.User.Periods != null){
        return updateProfile.User.degrees.some(function(el) {
          return el.degreename === degree;
        }); 
      }
      return false;
    }

    const [updateProfile, setUpdateProfile] = useState({
      birthday: '',
      firstname: '',
      lastname: '',
      User:{
        Localisation: {
          address: '',
          city: '',
          zipCode: ''
        },
        email: '',
        phone: '',
        degrees:[]
      },
      periods:p
    })
    const handleChange = (e) => {
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
         }
      }
        setUpdateProfile({
          ...updateProfile,
          [e.target.name]: value
        });
       console.log(updateProfile)
    }

    useEffect(() => {
        const fetchSomethingById = async () => {
          ServiceAPI.requeteGetCandidatById(id)
          .then(response => {
            if(response.status == 200){
              setUpdateProfile(response.data);
              setP(response.data.User.Periods)
              console.log(response.data)
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])

    const ModifierProfileSubmit = (e) => {
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(id, updateProfile.firstname, updateProfile.lastname, updateProfile.birthday,updateProfile.User.email,updateProfile.User.phone,updateProfile.User.Localisation.zipCode,
          updateProfile.User.Localisation.city,updateProfile.periods,updateProfile.User.degrees).then(response => {
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
<div >
     <h1>Formulaire Modif </h1>
     <div>
        <form className={styles.myform} onSubmit={ModifierProfileSubmit} action='' method="post">
        <label htmlFor='firstname'>firstname:</label>
          <input value={updateProfile.firstname} onChange={handleChange} type="text" className={styles.inputconnect} name="firstname" /><br></br>
          <label htmlFor='lastname'>lastname:</label>
          <input value={updateProfile.lastname} onChange={handleChange} type="text" className={styles.inputconnect} name="lastname" /><br></br>
          <label htmlFor='birthday'>birthday:</label>
          <input value={updateProfile.birthday} onChange={handleChange} type="date"  className={styles.inputconnect} name="birthday" /><br></br>
          <label htmlFor='email'>email:</label>
          <input value={updateProfile.User.email} onChange={handleChange} type="email"  className={styles.inputconnect} name="email" /><br></br>
          <label htmlFor='phone'>phone:</label>
          <input value={updateProfile.User.phone} onChange={handleChange} type="tel"  className={styles.inputconnect} name="phone" /><br></br>
          <label htmlFor='address'>address:</label>
          <input value={updateProfile.User.Localisation.address} onChange={handleChange} type="text"  className={styles.inputconnect} name="address" /><br></br>
          <label htmlFor='zipCode'>zipCode:</label>
          <input value={updateProfile.User.Localisation.zipCode} onChange={handleChange} type="text"  className={styles.inputconnect} name="zipCode" /><br></br>
          <label htmlFor='city'>city:</label>
          <input value={updateProfile.User.Localisation.city} onChange={handleChange} type="text"  className={styles.inputconnect} name="city" /><br></br>
          
          <fieldset name="periods"id='periods'>
          <legend >periods</legend>
          <div>
            {periodExits('Vacances de février') ? <input checked onChange={handleChange} type="checkbox" id="1" name="periods"/> : <input onChange={handleChange} type="checkbox" id="1" name="periods"/>}
            <label htmlFor="Vacances de février">Vacances de février</label>
          </div>
          <div>
          {periodExits('Vacances d’avril') ? <input checked onChange={handleChange} type="checkbox" id="2" name="periods"/> : <input onChange={handleChange} type="checkbox" id="2" name="periods"/>}
            <label htmlFor="Vacances d’avril">Vacances d’avril</label>
          </div>
          <div>
          <input onChange={handleChange} checked={periodExits('Vacances juillet')} type="checkbox" id="3" name="periods"/>
            <label htmlFor="Vacances juillet">Vacances juillet</label>
          </div>
          <div>
          {periodExits('Vacances Août') ? <input checked onChange={handleChange} type="checkbox" id="4" name="periods"/> : <input onChange={handleChange} type="checkbox" id="4" name="periods"/>}
            <label htmlFor="Vacances Août">Vacances Août</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5"/>
            <label htmlFor="Vacances Octobre">Vacances Octobre</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6"/>
            <label htmlFor="Vacances Noël">Vacances Noël</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7"/>
            <label htmlFor="Mercredi">Mercredi</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8"/>
            <label htmlFor="Samedi">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplomes</legend>
          <div>
            <input onChange={handleChange} type="checkbox" id="3" name="BAFA" />
            <label htmlFor="BAFA">BAFA</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="2" name="BAFD en cours"/>
            <label htmlFor="BAFD en cours">BAFD en cours</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="4" name="stage pratique"/>
            <label htmlFor="stage pratique">stage pratique</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="1" name="BAFD"/>
            <label htmlFor="BAFD">BAFD</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="6" name="BPJEPS"/>
            <label htmlFor="BPJEPS">BPJEPS</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="5" name="Non diplome"/>
            <label htmlFor="Non diplome">Non diplome</label>
          </div>
      </fieldset>
         
         <input  value="Submit" className={styles.inputsubmit} type="submit"/> <br></br>
          </form>
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
    );
    
}