import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import my_logo from "../public/Logo.png";

const users = [
  { username: "admin1", password: "admin123" },
  { username: "user2", password: "user123" }
];

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular delay de verificación
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      router.push("/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={styles.AdminLogin}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <img src={my_logo.src} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.loginContainer}>
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.labelWrapper}>
                <label htmlFor="password">Contraseña</label>
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.buttonWrapper}>
              <button 
                type="submit" 
                disabled={isLoading || !username || !password}
              >
                {isLoading ? "Verificando..." : "Ingresar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;