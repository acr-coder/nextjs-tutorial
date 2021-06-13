import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar'
function Layout({children}) {
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
            
            {children}
        </div>
        </>
    )
}

export default Layout
