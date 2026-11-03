import type { ComponentProps } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

type SocialIconProps = ComponentProps<"svg">;

function GitHubIcon(props: SocialIconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.23 3.26.94.1-.73.39-1.23.71-1.51-2.48-.28-5.09-1.27-5.09-5.52 0-1.22.43-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.72.78 1.15 1.77 1.15 2.99 0 4.26-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
		</svg>
	);
}

function InstagramIcon(props: SocialIconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<rect x="3" y="3" width="18" height="18" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

function LinkedInIcon(props: SocialIconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.1H5.67v8.23h2.67V10.1ZM7 5.67a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm5.92 4.43h-2.66v8.23h2.66v-4.07c0-1.07.2-2.11 1.54-2.11 1.32 0 1.34 1.23 1.34 2.18v4h2.66v-4.52c0-2.22-.48-3.93-3.07-3.93-1.24 0-2.07.68-2.41 1.32h-.04v-1.1h-.02Z" />
		</svg>
	);
}

const contactLinks = [
	{
		label: "GitHub",
		href: "https://github.com/dm1893221-glitch",
		icon: GitHubIcon,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/",
		icon: InstagramIcon,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/danis-martanius-bb8781446/?isSelfProfile=true",
		icon: LinkedInIcon,
	},
];

export default function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-title"
			className="theme-hero flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center justify-center rounded-3xl border px-6 py-10 sm:px-10"
		>
			<div className="theme-panel relative w-full max-w-3xl overflow-hidden rounded-3xl border px-6 py-10 text-center shadow-xl shadow-blue-950/10 sm:px-12 sm:py-14">
				<div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />

				<div className="relative">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
						Hubungi Saya
					</p>
					<h2
						id="contact-title"
						className="theme-title text-3xl font-bold sm:text-4xl"
					>
						Mari Terhubung
					</h2>
					<p className="theme-subtle mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base">
						Punya pertanyaan atau ingin berdiskusi tentang proyek?
						Silakan hubungi saya melalui email atau kunjungi media sosial.
					</p>

					<a
						href="mailto:martaniusdanis@gmail.com"
						className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
					>
						<Mail className="size-4" aria-hidden="true" />
						Kirim Email
						<ArrowUpRight className="size-4" aria-hidden="true" />
					</a>

					<div className="mt-9 grid gap-3 sm:grid-cols-3">
						{contactLinks.map(({ label, href, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="theme-panel-raised group flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/5"
							>
								<span className="flex items-center gap-3">
									<Icon
										className="size-5 shrink-0 text-blue-700 dark:text-blue-300"
										aria-hidden="true"
									/>
									<span className="theme-title text-sm font-semibold">
										{label}
									</span>
								</span>
								<ArrowUpRight
									className="size-4 text-slate-400 transition group-hover:text-blue-500"
									aria-hidden="true"
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
