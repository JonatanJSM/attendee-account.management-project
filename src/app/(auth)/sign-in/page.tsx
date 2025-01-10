"use client";

import SignIn from "@/components/authetication/SingInForm";
import { Tabs } from "@/components/authetication/tabs2";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-lg p-6 bg-slate-700 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">
          Welcome Back!
        </h1>
        <p className="text-sm text-center mb-8 text-white">
          Sign in to your account or create a new one to get started.
        </p>
        <Tabs
          tabs={[
            {
              title: "Sign In",
              value: "sign-in",
              content: <SignIn />,
            },
          ]}
          containerClassName="tabs-boxed bg-base-100"
          activeTabClassName="tab-active bg-primary text-white"
          tabClassName="tab text-neutral"
          contentClassName="mt-6"
        />
      </div>
    </div>
  );
}
