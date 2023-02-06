import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import Application from "./Application";

function Applications() {
  let { currentUser } = useContext(UserContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`/my_applications/${currentUser.id}`).then((r) => {
      if (r.ok) {
        r.json().then((apps) => setApplications(apps));
      }
    });
  }, []);

  function handleDeleteApp(deletedApp) {
    const updatedApps = applications.filter((app) => app.id !== deletedApp.id);
    setApplications(updatedApps);
  }

  const allApps = applications.map((app) => (
    <Application key={app.id} app={app} handleDeleteApp={handleDeleteApp} />
  ));

  if (allApps.length === 0)
    return <p>Start browsing our listings to find your new home!</p>;

  return <div>{allApps}</div>;
}

export default Applications;
