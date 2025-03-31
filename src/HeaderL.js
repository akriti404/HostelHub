import styles from "./HeaderL.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './assets/logo/HostelHub.svg';

function Header() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const features = [
    { name: "Room Maintenance", path: "/room-maintenance" },
    { name: "Mess", path: "/mess-feedback" },
    { name: "Laundry", path: "/laundry" },
    { name: "Community Engagement", path: "/community-engagement" }
  ];

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          <img src={Logo} alt="Hostel Hub" />
        </a>

        {/* New flex container for proper spacing */}
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li><a href="#" className={styles.navLink}>Home</a></li>
              <li
                className={`${styles.navItem} ${styles.dropdownTrigger}`}
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                <span className={styles.navLink}>Features</span>
                {isFeaturesOpen && (
                  <ul className={styles.dropdownMenu}>
                    {features.map((feature) => (
                      <li key={feature.name} className={styles.dropdownItem}>
                        <Link to={feature.path} className={styles.dropdownLink}>
                          {feature.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><a href="#" className={styles.navLink}>About</a></li>
              <li><a href="#" className={styles.navLink}>Contact</a></li>
            </ul>
          </nav>

          <div className={styles.buttonDiv}>
            <button className={styles.btnh}>Login</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;