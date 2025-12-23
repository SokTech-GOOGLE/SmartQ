import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">SmartQ</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/ask">Ask</Link>
        <Link href="/ai">AI</Link>
      </div>
    </nav>
  );
}
