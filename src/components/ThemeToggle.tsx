"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const initialTheme =
			savedTheme === "light" || savedTheme === "dark"
				? savedTheme
				: window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";

		setTheme(initialTheme);
		document.documentElement.classList.toggle("dark", initialTheme === "dark");
	}, []);

	const isDark = theme === "dark";
	const Icon = isDark ? Sun : Moon;

	function toggleTheme() {
		const nextTheme = isDark ? "light" : "dark";
		setTheme(nextTheme);
		document.documentElement.classList.toggle("dark", nextTheme === "dark");
		localStorage.setItem("theme", nextTheme);
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Ganti ke mode ${isDark ? "terang" : "gelap"}`}
			title={`Ganti ke mode ${isDark ? "terang" : "gelap"}`}
			className="theme-toggle flex size-10 shrink-0 items-center justify-center rounded-full border text-amber-500 transition hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
		>
			<Icon className="size-5" />
		</button>
	);
}
