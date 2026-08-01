import { createContext, useContext, useEffect, useState } from "react";

import { fetchProfile, login as loginRequest } from "../api/auth.js";
import { clearTokens, readTokens, saveTokens } from "../api/client.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function restoreSession() {
      if (!readTokens().access) {
        setIsReady(true);
        return;
      }

      try {
        const profile = await fetchProfile();

        if (!cancelled) {
          setUser(profile);
        }
      } catch (err) {
        clearTokens();
      } finally {
        if (!cancelled) {
          setIsReady(true);
        }
      }
    }

    restoreSession();

    return () => {
      cancelled = true;
    };
  }, []);

  async function login(email, password) {
    const data = await loginRequest(email, password);

    saveTokens(data.access, data.refresh);
    setUser(data.user);
  }

  function logout() {
    clearTokens();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isReady, login, logout }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return ctx;
}
