import React from "react";
import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const route = useRouter();
  console.log("SelectedClientProjectPage", route.query);
  return (
    <div>
      <h1>Selected Client Project Page</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
