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
          <h2 className={styles.cardTitle}>แจ้งเรื่องกล่าวหาหรือกล่าวโทษ</h2>
          <p className={styles.cardSubtitle}>สำหรับแจ้งเรื่องร้องเรียนกรณีพบเพ็นพฤติกรรมที่อาจไม่เหมาะสมของผู้ประกอบวิชาชีพ</p>
        </Link>
        <Link 
          href="" 
          className={styles.card}
          style={{ backgroundImage: `url('/images/public/service/inform.png')` }}
        >
          <h2 className={styles.cardTitle}>ติดตามสถานะเรื่องร้องเรียน<br></br>กล่าวหา/กล่าวโทษ</h2>
          <p className={styles.cardSubtitle}>ตรวจสอบสถานะปัจจุบันของเรื่องที่ท่านได้แจ้งไว้ หรือตรวจสอบสถานะในฐานะผู้ถูกร้องเรียน</p>
        </Link>

      
        <Link
          href=""
          className={styles.card}
          style={{ backgroundImage: `url('/images/public/service/report.png')` }}
        >
          <h2 className={styles.cardTitle}>แจ้งเบาะแสร้านยาแขวนป้าย</h2>
          <p className={styles.cardSubtitle}>สำหรับแจ้งเบาะแสร้านยาที่ไม่มีเภสัชกรอยู่ปฏิบัติหน้าที่ในเวลาทำการ</p>
        </Link>


      </div>
    </div>
  );
}