import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
// import { middleware } from "../../middleware"
import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';

export default function consultcandidat()
{
    const router = useRouter()
    let [data, setData] = useState(null)

    function deleteData(id){
       if (confirm("Etes vous sure de  vouloir supprimer" ) == true)
       {
        ServiceAPI.deleteCandidate(id).then(response => {
          if(response.status == 200)
          {
            if(response.data.length > 0)
            {
                
                setData(response.data)
                setLoading(false)
                
            }
            }
          })
       } else
       {
        event.preventDefault();
       }
        
    }
    function modifData(id){
        ServiceAPI.requeteGetCandidatById(id).then(response =>{
            if(response.status == 200)
            {
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
        <>
        <Head>
        <title>Consultations candidats</title>
        </Head>
       <Navbar  >
        <div  > 
        <Link href="./candidate/createcandidat"><a class="btn btn-primary">Creer un candidat</a></Link><br></br>
        
    <table class="table table-hover table-dark">
        <thead  >
            <tr >
                <th >Nom</th>
                <th >Prénom</th>
                <th >Date de naissance</th>
                <th >wantToBe</th>
                <th >ID Utilisateur</th>
                <th >Email</th>
                <th >Numéro de téléphone</th>
                <th >Adresse</th>
                <th >Code postal</th>
                <th >Ville</th>
                <th >Activé/Désactivé</th>
                <th>Modifier Profil</th>
                <th >Supprimer</th>
            </tr>
        </thead>
        <tbody> 
        {data.map((element) => {
      return (
            <tr key={element.UserId}>
                <td>
                    <h6>{element.lastname}</h6>
                </td>
                <td>  
                    <h6>{element.firstname}</h6>
                </td>
                <td>
                    <h6>{new Date(element.birthday).toLocaleDateString()}</h6>
                </td>
                <td>  
                    <h6>{element.wantToBe}</h6>
                </td>
                <td>  
                    <h6>{element.UserId}</h6>
                </td>
                <td>  
                    <h6>{element.User.email}</h6>
                </td>
                <td>  
                    <h6>0{element.User.phone}</h6>
                </td>
                <td>
                     <h6>{element.User.Localisation.address}</h6>
                </td>
                <td>
                     <h6>{element.User.Localisation.zipCode}</h6>
                </td>
                <td>
                     <h6>{element.User.Localisation.city}</h6>
                </td>
                <td>
                    <h6>{element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td>
                    <h6><a  onClick = {() =>modifData(element.UserId)}class="btn btn-secondary"
                    href={`/dashboard/candidate/updatecandidat?id=${element.id}`}
                    > Modifier Profil</a></h6>
                </td>
                <td>
                <h6> <a onClick={() => deleteData(element.id)  } class="btn btn-danger" >Supprimer</a></h6>
                </td>
            </tr>)  
    })}
        </tbody>
    </table>
    
    </div>
       </Navbar>
       </>
    )
}