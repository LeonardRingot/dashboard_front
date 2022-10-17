import styles from '../../styles/Home.module.css'
export default function consultcandidat()
{

    /* 
    CODE ( on va recuperer tous les candidats pour les affichers dans ce tableau)

    
    */
    return (
        <>
        <h1>Listes des candidats</h1>
        <div className={styles.mytable}>
        <table>
            <tr className={styles.tr}>
                <td className={styles.td}>Nom</td>
                <td className={styles.td}>Prenom</td>
                <td className={styles.td}>Date de naissance</td>
                <td className={styles.td}>Adresse</td>
                <td className={styles.td}>Code postal</td>
                <td className={styles.td}>Ville</td>
                <td className={styles.td}>Email</td>
            </tr>
            <tr className={styles.tr}>
                <td className={styles.td}>*Nom*</td>
                <td className={styles.td}>*Prenom*</td>
                <td className={styles.td}>*Date de naissance*</td>
                <td className={styles.td}>*Adresse*</td>
                <td className={styles.td}>*Code postal*</td>
                <td className={styles.td}>*Ville*</td>
                <td className={styles.td}>*Email*</td>
            </tr>
        </table>
        </div>
        
        </>
        
    )
}