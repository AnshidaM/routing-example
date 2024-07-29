import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
  const route = useRouter();
  console.log("ClientProjectsPage", route.query);
  const loadProjectHandler = () => {
    //load the data ...
    // route.push("/clients/max/projetcta");
    // or
    route.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projecta",
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
