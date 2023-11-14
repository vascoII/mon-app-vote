// components/Layout.tsx
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
