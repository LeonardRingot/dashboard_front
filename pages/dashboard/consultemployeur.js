import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'

import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';
const getFilteredItems = (query, items) =>{
    if(!query){
        return items;
    }
    return items.filter(items =>items.User.email.includes(query))
}
export default function Consultemployeur()
{
    
    let [data, setData] = useState(null)
    let [query, setQuery]= useState(null);
    let  tracks = data;
    let items = tracks;
    const filteredItems = getFilteredItems(query, items);
    function deleteData(id){
        if(confirm("Etes vous sure de  vouloir supprimer" ) == true)
        {
            ServiceAPI.deleteEmployer(id).then(response => {
                if(response.status == 200)
                {
                  if(response.data.length > 0)
                  {
                      setData(response.data)
                      setLoading(false)
                  }
                  }
                })
        }else
        {
            event.preventDefault();
        }
        
    }
    function modifData(id){
        ServiceAPI.requeteGetEmployerById(id).then(response =>{
            if(response.status == 200)
            {
                response.push('./employers/updateemployer/' +id)
                if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
            }
        })
    }
    function VerifEmpoyees(id){
        ServiceAPI.requeteGetEmployerById(id).then(response =>{
            if(response.status == 200)
            {
                response.push('./employers/verifemployers/' +id)
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
        <>
        <Head>
            <title>Consultations employeurs</title>
        </Head>
       <Navbar>
               <div  > 
        <Link href="./employers/createemployer"><a class="btn btn-primary">Creer un employeur</a></Link><br></br>
        <label>Rechercher par Adresse Mail:</label> <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
    <table class="table table-hover table-dark">
        <thead  >
            <tr >
                <th>Numéro de SIRET</th>
                <th>Nom de l'entreprise</th>
                <th>ID de l'Utilisateur</th>
                <th>Email</th>
                <th>Numéro de téléphone</th>
                <th>Adresse</th>
                <th>Code Postal</th>
                <th>Ville</th>
                <th>Activé/Désactivé</th>
                <th>Modifier Profil</th>
                <th>Supprimer</th>
                <th>Vérifier un employeur</th>
            </tr>
        </thead>
        <tbody>
        {filteredItems.map((element) => {
      return (
            <tr key={element.UserId}>
                <td>
                    <h6>{element.siret}</h6>
                </td>
                <td>  
                    <h6>{element.structurename}</h6>
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
                <td >  
                    <h6>{element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td >
                    <h6><a onClick = {() =>modifData(element.UserId)} class="btn btn-secondary" href={`/dashboard/employers/updateemployer?id=${element.id}`}>Modifier Profil</a></h6>
                </td>
                <td >
                    <h6 ><a class="btn btn-danger" onClick={() => deleteData(element.id)}>Supprimer</a></h6>
                </td>
                <td >
                    <h6><a onClick = {() =>VerifEmpoyees(element.UserId)} class="btn btn-warning" href={`/dashboard/employers/verifemployers?id=${element.id}`}>Vérifier employeur</a></h6>
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
