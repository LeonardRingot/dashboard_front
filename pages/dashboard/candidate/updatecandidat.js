
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
    let [data, setData] = useState(null)
    const [updateProfile, setUpdateProfile] = useState({
        userId: '',
        firstname: '',
        lastname: '',
        birthday: ''
    })

    useEffect(() => {
        if(!id) {
          return;
        }
        const fetchSomethingById = async () => {
          API.requeteUpdateProfil()
          .then(response => {
            if(response.status == 201){
                setGetDataProfile(response.data.data);
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
        setUpdateProfile({
          ...updateProfile,
          [e.target.name]: value
        });
    }

    const ModifierProfileSubmit = (e) => {
        
        e.preventDefault()
        ServiceAPI.requeteUpdateProfil(updateProfile.userId, updateProfile.firstname, updateProfile.lastname, updateProfile.birthday).then(response => {
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
          <label htmlFor='userId'>UserId:</label>
          <input className={styles.inputconnect} onChange={handleChange} type="text"  name="userId" /><br></br>
          <label htmlFor='firstname'>firstname:</label>
          <input  className={styles.inputconnect} onChange={handleChange} type="text"  name="firstname" /><br></br>
          <label htmlFor='lastname'>lastname:</label>
          <input className={styles.inputconnect} onChange={handleChange} type="text"   name="lastname" /><br></br>
          <label htmlFor='birthday'>birthday:</label>
          <input className={styles.inputconnect}  onChange={handleChange} type="date"  name="birthday" /><br></br>
         </form>
         <input  value="Submit" className={styles.inputsubmit} type="submit"/> <br></br>
          
         <p>{erreur}</p>
         <p>{IsOk}</p>
     </div> 
   </div>
    );
    
}