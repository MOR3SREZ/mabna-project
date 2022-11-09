//styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-components']}>
        <span className={styles['header-arrow-icon']}>h</span>
        <span className={styles['header-title']}>پروفایل</span>
        <span className={styles['header-home-icon']}>g</span>
      </div>
    </header>
  );
};
export default Header;
