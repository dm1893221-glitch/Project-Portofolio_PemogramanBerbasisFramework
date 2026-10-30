import type { ComponentProps } from "react";
import { Mail } from "lucide-react";

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
	{
		label: "Email",
		href: "mailto:martaniusdanis@gmail.com",
		icon: Mail,
	},
];

export default function Contact() {
	return (
		<section
			id="contact"
			aria-label="Kontak dan media sosial"
			className="theme-hero scroll-mt-28 my-16 rounded-3xl border px-6 py-10 sm:px-10"
		>
			<div className="flex justify-center gap-4">
				{contactLinks.map(({ label, href, icon: Icon }) => (
					<a
						key={label}
						href={href}
						target={label === "Email" ? undefined : "_blank"}
						rel={label === "Email" ? undefined : "noopener noreferrer"}
						aria-label={label}
						title={label}
						className="theme-panel-raised flex size-14 items-center justify-center rounded-2xl border border-blue-600/15 text-blue-700 transition hover:-translate-y-1 hover:border-blue-300/50 hover:bg-blue-500/15 hover:text-blue-900 dark:border-blue-300/15 dark:text-blue-200 dark:hover:text-white"
					>
						<Icon className="size-5" aria-hidden="true" />
					</a>
				))}
			</div>
		</section>
	);
}
