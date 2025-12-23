// components/navbar.tsx
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-border px-4 py-2 bg-background">
        <div className="mx-auto flex justify-between w-full max-w-5xl">
            <Link
                    href="/"
                    >
                <div className="flex h-14 max-w-5xl items-center justify-between px-4 gap-4 hover:text-muted-foreground">
                
                    <div className="flex items-center gap-2">
                    P2S
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                        photo2splat
                    </span>
                </div>
            </Link>
            <div className="flex items-center gap-3">
                <Link
                    href="/upload"
                    className="text-xs text-muted-foreground hover:text-foreground"
                    >
                    Upload
                </Link>
                <Link
                    href="/manage-projects"
                    className="text-xs text-muted-foreground hover:text-foreground"
                >
                    Manage Projects
                </Link>
                <Link
                    href="/install"
                    className="text-xs font-semibold text-blue-500 hover:text-blue-600"
                >
                    📱 Install
                </Link>
                <ThemeToggle />
            </div>
        </div>
    </nav>
  );
}
