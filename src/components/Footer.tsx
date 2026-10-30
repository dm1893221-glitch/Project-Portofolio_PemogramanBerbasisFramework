
export default function Footer() {
	return (
		<footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
			<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
				<p className="theme-subtle text-sm">
					© {new Date().getFullYear()} Danis. Dibuat
					dengan Next.js dan Tailwind CSS.
				</p>

				<a
					href="#home"
					className="text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
				>
					Kembali ke atas ↑
				</a>
			</div>
		</footer>
	);
}
