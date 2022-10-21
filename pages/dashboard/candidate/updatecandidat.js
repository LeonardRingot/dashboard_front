
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
        degrees:d
      },
      periods:p
    })
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
          [e.target.name]: value
        });
      //  console.log(updateProfile)//
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
        ServiceAPI.requeteUpdateProfil(id, updateProfile.firstname, updateProfile.lastname, updateProfile.birthday,updateProfile.User.email,updateProfile.User.phone,updateProfile.User.Localisation.address,updateProfile.User.Localisation.zipCode,
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
<div >
     <h1>Formulaire Modif </h1>
     <div >
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
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value='1' checked={(p.find((p) => p == '1'))? true: false}/>
            <label htmlFor="Vacances de février">Vacances de février</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value='2' checked={(p.find((p) => p == '2'))? true: false}/>
            <label htmlFor="Vacances d’avril">Vacances d’avril</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value='3' checked={(p.find((p) => p == '3'))? true: false}/>
            <label htmlFor="Vacances juillet">Vacances juillet</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value='4' checked={(p.find((p) => p == '4'))? true: false}/>
            <label htmlFor="Vacances Août">Vacances Août</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5" checked={(p.find((p) => p == '5'))? true: false}/>
            <label htmlFor="Vacances Octobre">Vacances Octobre</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6" checked={(p.find((p) => p == '6'))? true: false}/>
            <label htmlFor="Vacances Noël">Vacances Noël</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7" checked={(p.find((p) => p == '7'))? true: false}/>
            <label htmlFor="Mercredi">Mercredi</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8" checked={(p.find((p) => p == '8'))? true: false}/>
            <label htmlFor="Samedi">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplomes</legend>
          <div>
            <input onChange={handleChange} type="checkbox" id="1" name="degrees" value="1" checked={(d.find((d) => d == '1'))? true: false}/>
            <label htmlFor="BAFA">BAFA</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="2" name="degrees" value="2"checked={(d.find((d) => d == '2'))? true: false}/>
            <label htmlFor="BAFD en cours">BAFD en cours</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="3" name="degrees" value="3" checked={(d.find((d) => d == '3'))? true: false}/>
            <label htmlFor="stage pratique">stage pratique</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="4" name="degrees"value="4" checked={(d.find((d) => d == '4'))? true: false}/>
            <label htmlFor="BAFD">BAFD</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="5" name="degrees"value="5" checked={(d.find((d) => d == '5'))? true: false}/>
            <label htmlFor="BPJEPS">BPJEPS</label>
          </div>
          <div>
            <input  onChange={handleChange} type="checkbox" id="6" name="degrees"value="6"checked={(d.find((d) => d == '6'))? true: false}/>
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