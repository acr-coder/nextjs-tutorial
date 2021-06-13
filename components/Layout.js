import styles from '../styles/Layout.module.css';

function Layout({children}) {
    return (
        <div className={styles.container}>
            <h1>Merhaba Next js</h1>
            {children}
        </div>
    )
}

export default Layout
