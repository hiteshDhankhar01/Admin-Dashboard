import Card from "../ui/dashbord/card/card"
import styles from "../ui/dashbord/dashboard.module.css"
import Rightbar from "../ui/dashbord/rightbar/rightbar"
import Transactions from "../ui/transactions/transactions"
import Charts from "../ui/dashbord/chart/chart"

export default function dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Charts />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )
}