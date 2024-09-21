import Link from "next/link";
import style from "../app/style.module.css";

export default function Footer() {
  return (
    <footer className={style.colorThree + " text-white p-3 "}>
      <div className=" text-center flex justify-center sm:justify-between items-center mx-5">
        <p>&copy; 2024 UDCPR Calc. All rights reserved.</p>
        <div className="sm:flex hidden">
          <Link href="privacy" className="px-3">
            Privacy Policy
          </Link>
          <Link href="terms" className="px-3">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
