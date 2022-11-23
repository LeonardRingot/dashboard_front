import React ,{ useEffect, useState } from 'react'
import * as ServiceAPI from '../../../services/ServiceAPI'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import { useCookies } from "react-cookie";

export default function createadministrateur()
{
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);
    const router = useRouter()
    const {id} = router.query
    const [erreur, setErreur] = useState('');
    const[IsOk, setIsOk] = useState('');

    const [AdminForm, setAdminForm] = useState({ 
        password:'',
        email:'',
        phone:'',
        user:''
    })
    const handleChange =(e) =>
    {
        const value = e.target.value;
        setAdminForm({
            ...AdminForm, [e.target.name]: value
          });
    }
  const setHeaders = (user) => {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${user}`);
    const options = {
      method: "GET",
      mode: "cors",
      headers,
    };
    return options;
  }
  
   const dashboardCreateAdmin = async() => 
  {
    if(cookies.user)
    {
      setUser(cookies.user);
      let continu;
      let options = setHeaders(cookies.user[0]);
      const res =  await fetch("http://localhost:5000/api/auth/loginAdmin", options);
      console.log("euh oui ?")
      if(res != null)
      {
        
        if (res.status == 401) {
            let options = setHeaders(cookies.user[1]);
    
            const res2 = await fetch("http://localhost:5000/api/auth/token", options);
            console.log
            console.log(res2)
            if (res2.status == 400) {
              console.log("pas marche");
            } else {
              continu = await res2.json();
              setCookie("user", [continu.token, cookies.user[1]], "/");
                console.log('c passé')
              let options = setHeaders(cookies.user[0]);
    
              const res = await fetch("http://localhost:5000/api/auth/loginAdmin", options);
              continu = await res.json();
            }
          } else {
            continu = await res.json();
          }
      }
    }
  }
  useEffect(() => {
    dashboardCreateAdmin()
}, [user])
    const ScriptFormAdmin = (e) =>
    {
        if (user != null)
        {
            e.preventDefault()
            ServiceAPI.requetePostAdmin(AdminForm.password, AdminForm.email, AdminForm.phone ).then (response =>{
                if(response.status == 200){
                    
                    //router.push('../profile/profile');
                    setIsOk('Compte crée');
                    router.push({pathname:'../consultadmin/', query:{user}})
                  } else {
                    setErreur('Adresse mail deja utilisée.');
                  }
            }).catch(function(error){
                console.log(error);
                console.log(user[1])
                
              });
              
        }else
        {
            
            console.log('non')
        }
        
    }
    return (
        <>
        {user != null ?
            (
            <div class="col py-3">
        <div class="container">
        <h1>Formulaire d'Inscription ADMIN</h1>
        <form class="row g-3"  id="register_form"  onSubmit={ScriptFormAdmin} action='' method="post">
       
            <div class="col-md-6">
                <label htmlFor='password'>password:</label>
                <input onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='email'>email:</label>
                <input onChange={handleChange} type="email"  class="form-control" name="email" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='phone'>phone:</label>
                <input onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form>
          </div>
          </div>
        ): (

            <h1>j'ai pas de token </h1>
        
        )}
        </>
    );
}