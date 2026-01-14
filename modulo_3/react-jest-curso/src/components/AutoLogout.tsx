import React, { useEffect, useState } from "react";

export default function AutoLogout() {
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoggedOut(true);
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  return (
     <>
      {loggedOut ? "Sesión cerrada" : "Sesión activa"}
     </>
  );
}