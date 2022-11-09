import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';

export default function consultemployeur()
{
    const router = useRouter()
    const {id} = router.query
    let [data, setData] = useState(null)

    function deleteData(id){
        console.log(id);
        ServiceAPI.deleteEmployer(id).then(response => {
            console.log(response)
          if(response.status == 200)
          {
            if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
            }
          })
    }
    
    function modifData(id){
        console.log(id);
        ServiceAPI.requeteGetEmployerById(id).then(response =>{
            console.log(response)
            if(response.status == 200)
            {   console.log('aaaaa')
                response.push('./employers/updateemployer/' +id)
                if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
            }
        })
    }


    let [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        ServiceAPI.requeteGetAllEmployeurs()
        .then(response => {
            console.log(response)
          if(response.status == 200){
            if(response.data.length > 0){
                setData(response.data)
                setLoading(false)
            }
          }
        })
        
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No employees</p>
    return (
       <Navbar>
               <div className={styles.montab} > 
        <Link href="./employers/createemployer"><a className={styles.buttonCreate}>Creer un employeur</a></Link>
        <Link href="./administrateurs/verifemployers"><a className={styles.buttonVerif}>Vérification employers</a></Link>
    <table class="table table-hover table-dark">
        <thead  >
            <tr >
                <th >Numéro de SIRET</th>
                <th >Nom de l'entreprise</th>
                <th >ID de l'Utilisateur</th>
                <th >Email</th>
                <th >Numéro de téléphone</th>
                <th >Adresse</th>
                <th >Code Postal</th>
                <th >Ville</th>
                <th >IsActive?</th>
                <th >Modifier Profile</th>
                <th >Supprimer</th>
            </tr>
        </thead>
        <tbody>
        {data.map((element) => {
      return (
            <tr>
                <td  >
                    <h6 > {element.siret}</h6>
                </td>
                <td >  
                    <h6 >{element.structurename}</h6>
                </td>
                <td >
                      <h6  >{element.UserId}</h6>
                </td>
                <td  >
                      <h6  >{element.User.email}</h6>
                </td>
                <td  >
                      <h6  >{element.User.phone}</h6>
                </td>
                <td  >
                      <h6  >{element.User.Localisation.address}</h6>
                </td>
                <td  >
                      <h6  >{element.User.Localisation.zipCode}</h6>
                </td>
                <td>  
                    <h6 >{element.User.Localisation.city}</h6>
                </td>
                <td >  
                    <h6 >{element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td >
                    <h6 >    <a onClick = {() =>modifData(element.UserId)} className={styles.buttonModif} href={`/dashboard/employers/updateemployer?id=${element.id}`}>Modifier Profile</a></h6>
                </td>
                <td >
                <h6 >  <a className={styles.buttonSuppr} onClick={() => deleteData(element.id)}>Supprimer</a></h6>
                </td>
            </tr>)  
    })}
        </tbody>
    </table>
    </div>
       </Navbar>

    )
}
