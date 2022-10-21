import { useRouter } from 'next/router';
import React, { useState , useEffect } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import styles from '../../../styles/Home.module.css'

export default function updateEmployer({  }) {
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');
    const router = useRouter()
    const {id} = router.query
    const[p, setP] = useState([]);
    

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
      setUpdateEmployer({
        ...updateEmployer,
        [e.target.name]: value
      });
    }

    useEffect(() => {
        const fetchSomethingById = async () => {
          ServiceAPI.requeteGetEmployerById(id)
          .then(response => {
            if(response.status == 200){
              setUpdateEmployer(response.data);
              let a = [];
               response.data.User.Periods.map((p) => a.push(p.id))
               setP(a)
               console.log(response.data.Periods)
               console.log(p);
            }
          })
          .catch(error => console.log(error))
        }
        fetchSomethingById()
      }, [id])

    const ModifierProfileSubmit = (e) => {
        
        e.preventDefault()
        ServiceAPI.requeteUpdateEmployers(id, updateEmployer.siret, updateEmployer.structurename, updateEmployer.User.email, updateEmployer.User.phone, updateEmployer.User.Localisation.address, updateEmployer.User.Localisation.zipCode,updateEmployer.User.Localisation.city, p).then(response => {
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
          <label htmlFor='siret'>siret:</label>
          <input  value={updateEmployer.siret} onChange={handleChange} className={styles.inputconnect}  type="text"  name="siret" /><br></br>
          
          <label htmlFor='structurename'>structurename:</label>
          <input value={updateEmployer.structurename}  onChange={handleChange} className={styles.inputconnect} type="text"   name="structurename" /><br></br>
          
          <label htmlFor='email'>email:</label>
          <input value={updateEmployer.User.email}  onChange={handleChange} className={styles.inputconnect} type="email"   name="email" /><br></br>
          
          <label htmlFor='phone'>phone:</label>
          <input value={updateEmployer.User.phone}  onChange={handleChange} className={styles.inputconnect} type="tel"   name="phone" /><br></br>
          
          <label htmlFor='address'>address:</label>
          <input value={updateEmployer.User.Localisation.address}  onChange={handleChange} className={styles.inputconnect} type="text"   name="address" /><br></br>
          
          <label htmlFor='zipCode'>zipCode:</label>
          <input value={updateEmployer.User.Localisation.zipCode}  onChange={handleChange} className={styles.inputconnect} type="text"   name="zipCode" /><br></br>

          <label htmlFor='city'>city:</label>
          <input value={updateEmployer.User.Localisation.city}  onChange={handleChange} className={styles.inputconnect} type="text"   name="city" /><br></br>
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
      <input  value="Submit" className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
         
          
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
    );
}