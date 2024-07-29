import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(router.asPath);

  const projectId = searchParams.get("projectid");
  return (
    <div>
      <h1>The Portfolio Project Page {projectId}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
