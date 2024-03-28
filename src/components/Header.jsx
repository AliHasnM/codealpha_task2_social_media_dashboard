import { useState } from "react";

export default function Header() {
  return (
    <>
      <header className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-800 dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold dark:text-slate-400">
            Total Followers: 23,004
          </p>
        </div>
      </header>
    </>
  );
}
