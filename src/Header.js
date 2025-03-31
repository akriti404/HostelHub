import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
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
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Hostel Hub" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li
              className={styles.dropdownTrigger}
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
            <li>
              <Link to="/about" className={styles.navLink}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;