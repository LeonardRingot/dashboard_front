import Link  from "next/link";
import styles from '../styles/Home.module.css'
export default function Header() 
{
return (
    <div>
        <h1>Cliquez sur le bouton connexion afin de vous connecter en tant que Administrateur</h1>
        <Link href="/connexion">
          <button className={styles.btnconnect}>Connexion</button>
        </Link>
        <Link href="/dashboard/dashboard">
          <button className={styles.btnconnect}> TEMPORAIRE dashboard</button>
        </Link>
    </div>
);
}