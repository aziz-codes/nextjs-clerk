import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/sign-in" />;
    </div>
  );
}

export default page;
