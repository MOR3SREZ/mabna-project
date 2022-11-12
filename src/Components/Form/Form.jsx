//styles
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <input type='text' placeholder='نوع کالا' />
      <input type='text' placeholder='وزن' />
      <input type='text' placeholder='نوع کالا' />
      <input type='text' placeholder='محل بارگیری' />
      <input type='text' placeholder='محل تخلیه ' />
      <input type='text' placeholder='تاریخ بارگیری' />
      <input type='text' placeholder='نام اعلام کننده بار' />
      <input type='text' placeholder='ساعت بارگیری' />
      <textarea type='text' placeholder='توضیحات' rows={4} />
    </form>
  );
};
export default Form;
