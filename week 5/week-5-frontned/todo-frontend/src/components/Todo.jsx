import styles from '../css/common.module.css'
export function Todo(props){
    return(
        <div className={styles.card}>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <h2>{props.completed}</h2>
        </div>
    )
}