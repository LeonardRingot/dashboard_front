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
    if (!data) return <p>No candidates</p>
    return (
       <><Navbar></Navbar>
       <div className={styles.montab} > 
        <Link href="./employers/createemployer"><a className={styles.buttonCreate}>Crer un employeurs</a></Link>
    <table className={styles.table}>
        <thead className={styles.thead} >
            <tr className={styles.tr}>
                <th className={styles.th}>SIRET</th>
                <th className={styles.th}>structurename</th>
                <th className={styles.th}>UserId</th>
                <th className={styles.th}>email</th>
                <th className={styles.th}>phone</th>
                <th className={styles.th}>adresse</th>
                <th className={styles.th}>Code Postal</th>
                <th className={styles.th}>Ville</th>
                <th className={styles.th}>IsActive?</th>
                <th className={styles.th}>Modifier Profile</th>
                <th className={styles.th}>Supprimer</th>
            </tr>
        </thead>
        <tbody>
        {data.map((element) => {
      return (
            <tr>
                <td  className={styles.td}>
                    <h6 className={styles.nom}> {element.siret}</h6>
                </td>
                <td className={styles.td}>  
                    <h6 className={styles.nom}>{element.structurename}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{element.UserId}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{element.User.email}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{element.User.phone}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{element.User.Localisation.address}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{element.User.Localisation.zipCode}</h6>
                </td>
                <td className={styles.td}>  
                    <h6 className={styles.nom}>{element.User.Localisation.city}</h6>
                </td>
                <td className={styles.td}>  
                    <h6 className={styles.nom}>{element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td className={styles.td}>
                    <h6 className={styles.nom}>    <a onClick = {() =>modifData(element.UserId)} className={styles.buttonModif} href={`/dashboard/employers/updateemployer?id=${element.id}`}>Modifier Profile</a></h6>
                </td>
                <td className={styles.td}>
                <h6 className={styles.nom}>  <a className={styles.buttonSuppr} onClick={() => deleteData(element.id)}>Supprimer</a></h6>
                </td>
            </tr>)  
    })}
        </tbody>
    </table>
    </div>
       </>
    )
}
