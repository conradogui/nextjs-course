import Link from "next/link.js";

import Header from "@/components/header.jsx"; //i can use this to refers to a root of my project

export default function Home() {
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
