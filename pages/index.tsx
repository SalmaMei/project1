import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUser === "user" && inputPass === "123") {
      setLoggedIn(true);
      setUsername(inputUser);
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          padding: "1rem",
          background: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <b>LINDA SALON</b>
        </div>
        <div>
          <Link href="/">Dashboard</Link>
          <Link href="/produk">Produk</Link>
          <Link href="/paket">Paket Nikah</Link>
          {!loggedIn ? (
            <span style={{ color: "#fff" }}>Login</span>
          ) : (
            <span
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </span>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Selamat Datang di Linda Salon</h1>
        <p>Silakan memilih produk atau paket pernikahan.</p>
        <img
          src="/dekorasi.jpg"
          alt="Dekorasi Pelaminan"
          style={{
            width: "80%",
            maxWidth: "600px",
            marginTop: "2rem",
            borderRadius: "8px",
          }}
        />

        {loggedIn && (
          <div style={{ marginTop: "2rem" }}>
            <p>
              Halo, <strong>{username}</strong>!
            </p>
            <button
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => alert("Booking berhasil!")}
            >
              Booking Sekarang
            </button>
          </div>
        )}

        {!loggedIn && (
          <form
            onSubmit={handleLogin}
            style={{
              marginTop: "2rem",
              display: "inline-block",
              textAlign: "left",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h3>Login User</h3>
            <div style={{ marginBottom: "0.5rem" }}>
              <label>Username: </label>
              <input
                type="text"
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
                style={{ padding: "0.5rem", width: "200px" }}
              />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <label>Password: </label>
              <input
                type="password"
                value={inputPass}
                onChange={(e) => setInputPass(e.target.value)}
                style={{ padding: "0.5rem", width: "200px" }}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        )}
      </main>
    </div>
  );
}