"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = resolvedTheme === "dark";
	const Icon = mounted && isDark ? Sun : Moon;

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			disabled={!mounted}
			aria-label={
				mounted
					? `Ganti ke mode ${isDark ? "terang" : "gelap"}`
					: "Memuat pilihan tema"
			}
			title={mounted ? `Ganti ke mode ${isDark ? "terang" : "gelap"}` : undefined}
			className="theme-toggle flex size-10 shrink-0 items-center justify-center rounded-full border text-amber-500 transition hover:border-blue-400 hover:bg-blue-50 disabled:cursor-default dark:hover:bg-blue-950"
		>
			<Icon className="size-5" />
		</button>
	);
}
