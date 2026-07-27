const BASE_URL = "http://localhost:8000/api";
const ACCESS_KEY = "weeb-access";
const REFRESH_KEY = "weeb-refresh";

export function readTokens() {
  return {
    access: localStorage.getItem(ACCESS_KEY),
    refresh: localStorage.getItem(REFRESH_KEY),
  };
}

export function saveTokens(access, refresh) {
  localStorage.setItem(ACCESS_KEY, access);
  localStorage.setItem(REFRESH_KEY, refresh);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export function extractErrorMessage(data, fallback) {
  if (typeof data === "string") {
    return data;
  }

  if (!data) {
    return fallback;
  }

  if (data.detail) {
    return data.detail;
  }

  const firstValue = Object.values(data)[0];

  if (Array.isArray(firstValue)) {
    return firstValue[0];
  }

  return typeof firstValue === "string" ? firstValue : fallback;
}

function send(path, options, access) {
  const headers = { ...options.headers };

  if (options.body) {
    headers["Content-Type"] = "application/json";
  }

  if (access) {
    headers.Authorization = `Bearer ${access}`;
  }

  return fetch(`${BASE_URL}${path}`, { ...options, headers });
}

async function refreshAccess() {
  const { refresh } = readTokens();

  const response = await fetch(`${BASE_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!response.ok) {
    clearTokens();
    return null;
  }

  const data = await response.json();

  localStorage.setItem(ACCESS_KEY, data.access);

  return data.access;
}

export async function request(path, options = {}) {
  let response = await send(path, options, readTokens().access);

  // Une seule tentative: si le jeton court a expire, on le renouvelle et on rejoue la requete.
  if (response.status === 401 && readTokens().refresh) {
    const access = await refreshAccess();

    if (access) {
      response = await send(path, options, access);
    }
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(extractErrorMessage(data, "Une erreur est survenue."));
  }

  return data;
}
