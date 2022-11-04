import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';

export default function consultcandidat()
{
    const router = useRouter()
    let [data, setData] = useState(null)
    

    
    function deleteData(id){
        console.log(id);
        ServiceAPI.deleteCandidate(id).then(response => {
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
        ServiceAPI.requeteGetCandidatById(id).then(response =>{
            console.log(response)
            if(response.status == 200)
            {   console.log('aaaaa')
                response.push('./candidate/updatecandidat/' +id)
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
        ServiceAPI.requeteGetAllCandidats()
        .then(response => {
            console.log(response.data[0].User.Localisation)
          if(response.status == 200){
            if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
          }
        }
        )
    }, [])




    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No candidates</p>
    return (
       <Navbar>
<div className={styles.montab} > 
        <Link href="./candidate/createcandidat"><a className={styles.buttonCreate}>Creer un candidat</a></Link><br></br>
    <table class="table table-hover table-dark">
        <thead  >
            <tr >
                <th >Nom</th>
                <th >Prénom</th>
                <th >Date de naissance</th>
                <th >ID Utilisateur</th>
                <th >Email</th>
                <th >Numéro de téléphone</th>
                <th >Adresse</th>
                <th >Code postal</th>
                <th >Ville</th>
                <th >IsActive?</th>
                <th>Modifier Profile</th>
                <th >Supprimer</th>
            </tr>
        </thead>
        <tbody> 
        {data.map((element) => {
      return (
            <tr>
                <td  >
                    <h6 > {element.lastname}</h6>
                </td>
                <td >  
                    <h6 >{element.firstname}</h6>
                </td>
                <td  >
                      <h6  >{new Date(element.birthday).toLocaleDateString()}</h6>
                </td>
                <td >  
                    <h6 >{element.UserId}</h6>
                </td>
                <td >  
                    <h6 >{element.User.email}</h6>
                </td>
                <td >  
                    <h6 >{element.User.phone}</h6>
                </td>
                <td >
                     <h6 >  {element.User.Localisation.address}</h6>
                </td>
                <td >
                     <h6 >  {element.User.Localisation.zipCode}</h6>
                </td>
                <td >
                     <h6 > {element.User.Localisation.city}</h6>
                </td>
                <td >
                    <h6 >  {element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td>
                    <h6 > <a  onClick = {() =>modifData(element.UserId)}className={styles.buttonModif}
                    href={`/dashboard/candidate/updatecandidat?id=${element.id}`}
                    > Modifier Profile</a></h6>
                </td>
                <td >
                <h6 >  <a onClick={() => deleteData(element.id)} className={styles.buttonSuppr} >Supprimer</a></h6>
                </td>
            </tr>)  
    })}
        </tbody>
    </table>
    </div>
       </Navbar>
    )
}

/**
 * 
 */