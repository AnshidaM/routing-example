import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Maxmilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          //normal way
          //   <li key={client.id}>
          //     <Link href={`/clients/${client.id}`}>{client.name}</Link>
          //   </li>
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
