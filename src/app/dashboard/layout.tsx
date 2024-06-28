import Navbar from "../ui/dashbord/navbar/navbar"
import Sidebar from "../ui/dashbord/sidebar/sidebar"
import styles from "../ui/dashbord/dashboard.module.css"
import Footer from "../ui/dashbord/footer/footer"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout

// import Sidebar from "../ui/dashbord/sidebar/sidebar"
// import Navbar from "../ui/dashbord/navbar/navbar"

// export default function layout({ children }) {
//     return (
//         <div>
//             <div>
//                 <Sidebar />
//             </div>
//             <div>
//                 <Navbar />
//                 {children}
//             </div>
//         </div>
//     )
// }