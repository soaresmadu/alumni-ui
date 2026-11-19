"use client";

import { useState } from "react";
import styles from "../styles/LoginPage.module.css";

type PasswordFieldProps = {
  id: string;
  name: string;
  label: string;
  autoComplete: "current-password" | "new-password";
  placeholder: string;
};

export function PasswordField({ id, name, label, autoComplete, placeholder }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.password}>
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required
        />
        <button
          type="button"
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          aria-controls={id}
          onClick={() => setVisible((current) => !current)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" />
            <circle cx="12" cy="12" r="2.5" />
            {visible && <path d="m3 3 18 18" />}
          </svg>
        </button>
      </div>
    </div>
  );
}
