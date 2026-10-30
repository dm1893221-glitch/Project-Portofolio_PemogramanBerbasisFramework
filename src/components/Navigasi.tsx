import {
	House,
	Layers3,
	Mail,
	SquareCode,
	UserRound,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const menuItems = [
	{ label: "Home", href: "#home", icon: House, active: true },
	{ label: "About", href: "#about", icon: UserRound },
	{ label: "Skills", href: "#skills", icon: Layers3 },
	{ label: "Projects", href: "#projects", icon: SquareCode },
	{ label: "Contact", href: "#contact", icon: Mail },
];

export default function Navigasi() {
	return (
		<nav
			aria-label="Navigasi utama"
			className="theme-nav sticky top-0 z-50 border-b px-5 py-3 backdrop-blur-xl"
		>
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
				<a
					href="#home"
					className="theme-title flex shrink-0 items-center gap-2.5 text-base font-bold tracking-tight sm:text-lg"
				>
					<span className="flex items-center gap-1" aria-hidden="true">
						<span className="size-2 rounded-full bg-blue-300" />
						<span className="size-2 rounded-full bg-blue-500" />
						<span className="size-2 rounded-full bg-indigo-400" />
					</span>
					<span>
						Danis<span className="text-blue-700 dark:text-blue-400">.dev</span>
					</span>
				</a>

				<div className="theme-title flex min-w-0 items-center gap-2 sm:gap-3">
					<div className="flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2">
						{menuItems.map(({ label, href, icon: Icon, active }) => (
							<a
								key={href}
								href={href}
								aria-current={active ? "page" : undefined}
								className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-wide transition-colors sm:gap-2 sm:px-3.5 sm:text-xs ${
									active
										? "bg-blue-600 text-white shadow-sm shadow-blue-950/30"
										: "theme-copy hover:bg-slate-900/5 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
								}`}
							>
								<Icon className="size-4" aria-hidden="true" />
								<span>{label}</span>
							</a>
						))}
					</div>

					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
}
