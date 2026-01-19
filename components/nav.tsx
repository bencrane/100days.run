import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold">
          100days.run
        </Link>
        <div className="flex items-center gap-6">
          {/* Navigation links will go here */}
        </div>
      </nav>
    </header>
  );
}
