import styles from './Card.module.css'
export function Card({name, description, interest, links={}}) {
    // console.log(links);
    
    return <div className={styles.card}>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>Interests</h2>
        <ul>
            {interest.map((interest, idx) => <li key={idx}>{interest}</li>)}
        </ul>
        <div className={styles.button}>
            <a href={links.linkedIn}>LinkedIn</a>
            <a href={links.instagram}>Instagram</a>
        </div>

    </div>
}