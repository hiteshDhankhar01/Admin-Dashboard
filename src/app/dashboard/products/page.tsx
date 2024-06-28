import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashbord/products/products.module.css";
import Search from "@/app/ui/dashbord/search/search";
import Pagination from "@/app/ui/dashbord/pagination/pagination";
// import { fetchProducts } from "@/app/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    // const { count, products } = await fetchProducts(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {products.map((product) => ( */}
                        <tr >
                            <td>
                                <div className={styles.product}>
                                    <Image
                                        src="/noproduct.jpg"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.productImage}
                                    />
                                    Iphone
                                </div>
                            </td>
                            <td>Dese</td>
                            <td>$99</td>
                            <td>234234</td>
                            <td>43</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/products/product.id`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form 
                                    // action={deleteProduct}
                                    >
                                        <input type="hidden" name="id"
                                        //  value={product.id} 
                                        />
                                        <button className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                
                </tbody>
            </table>
            {/* <Pagination count={count} /> */}
        </div>
    );
};

export default ProductsPage;
