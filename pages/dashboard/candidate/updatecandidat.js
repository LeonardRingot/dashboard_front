
import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'

export default function Register({  }) {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const [GetDataProfile, setGetDataProfile] = useState()
    const[p, setP] = useState([]);
    const [updateProfile, setUpdateProfile] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        password:'',
        email:'',
        phone:'',
        address:'',
        zipCode:'',
        city:'',
        periods:p,
        degrees:[]
    })

    useEffect(() => {
      console.log(id);
        const fetchSomethingById = async () => {
          ServiceAPI.requeteGetCandidatById(id)
          .then(response => {
            if(response.status == 201){
              console.log(response.data)
                setGetDataProfile(response.data);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])
    useEffect(() => { 
        setUpdateProfile({
            userId: GetDataProfile ? GetDataProfile.userId : '',
            firstname: GetDataProfile ? GetDataProfile.firstname : '',
            lastname: GetDataProfile ? GetDataProfile.lastname : '',
            birthday: GetDataProfile ? GetDataProfile.birthday : ''
             
        })
    }, [GetDataProfile]);

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
          console.log(tab)
         }
      }
        
        
        setUpdateProfile({
          ...updateProfile,
          [e.target.name]: value
        });
    }

    const ModifierProfileSubmit = (e) => {
        
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(updateProfile.userId, updateProfile.firstname, updateProfile.lastname, updateProfile.birthday,updateProfile.password,updateProfile.email,updateProfile.phone,updateProfile.zipCode,updateProfile.city,updateProfile.periods,updateProfile.degrees  ).then(response => {
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
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="firstname" /><br></br>
          <label htmlFor='lastname'>lastname:</label>
          <input onChange={handleChange} type="text" className={styles.inputconnect} name="lastname" /><br></br>
          <label htmlFor='birthday'>birthday:</label>
          <input onChange={handleChange} type="date"  className={styles.inputconnect} name="birthday" /><br></br>
          <label htmlFor='password'>password:</label>
          <input onChange={handleChange} type="password"  className={styles.inputconnect} name="password" /><br></br>
          <label htmlFor='email'>email:</label>
          <input onChange={handleChange} type="email"  className={styles.inputconnect} name="email" /><br></br>
          <label htmlFor='phone'>phone:</label>
          <input onChange={handleChange} type="tel"  className={styles.inputconnect} name="phone" /><br></br>
          <label htmlFor='address'>address:</label>
          <input onChange={handleChange} type="text"  className={styles.inputconnect} name="address" /><br></br>
          <label htmlFor='zipCode'>zipCode:</label>
          <input onChange={handleChange} type="text"  className={styles.inputconnect} name="zipCode" /><br></br>
          <label htmlFor='city'>city:</label>
          <input onChange={handleChange} type="text"  className={styles.inputconnect} name="city" /><br></br>
          
          <fieldset name="periods"id='periods'>
          <legend >periods</legend>
          <div>
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value="1"/>
            <label htmlFor="Vacances de février">Vacances de février</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value="2"/>
            <label htmlFor="Vacances d’avril">Vacances d’avril</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value="3"/>
            <label htmlFor="Vacances juillet">Vacances juillet</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value="4"/>
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
            <input  onChange={handleChange} type="checkbox" id="3" name="BAFA" />
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