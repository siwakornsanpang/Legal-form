import Link from "next/link";
import styles from "./Service.module.css";

export default function Service() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>บริการประชาชน</h1>
      <div className={styles.grid}>
        <Link 
          href=""  
          className={styles.card}
          style={{ backgroundImage: `url('/images/public/service/appeal.png')` }}
        >
          <h2 className={styles.cardTitle}>ร้องเรียนเภสัชกร/ตรวจสอบคำร้อง</h2>
          <p className={styles.cardSubtitle}>แจ้งปัญหาการให้บริการไม่เหมาะสม</p>
        </Link>
        <Link 
          href=""  
          className={styles.card}
          style={{ backgroundImage: `url('/images/public/service/inform.png')` }}
        >
          <h2 className={styles.cardTitle}>แจ้งเรื่องกล่าวหาหรือกล่าวโทษ</h2>
          <p className={styles.cardSubtitle}>รายงานร้านยาที่อาจไม่ปฏิบัติตาม<br/>มาตรฐาน</p>
        </Link>
        <div 
          
          className={styles.card}
          
        >
          <h2 className={styles.cardTitle}></h2>
          <p className={styles.cardSubtitle}><br/></p>
        </div>
      </div>
    </div>
  );
}