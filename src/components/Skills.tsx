const skills = [
	{ name: "Python", icon: "python" },
	{ name: "HTML & CSS", icon: "html" },
	{ name: "JavaScript", icon: "javascript" },
	{ name: "React", icon: "react" },
	{ name: "Git & GitHub", icon: "git" },
	{ name: "MySQL", icon: "mysql" },
] as const;

function SkillIcon({ icon }: { icon: (typeof skills)[number]["icon"] }) {
	switch (icon) {
		case "python":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<path
						fill="#3776AB"
						d="M31 7c-12 0-11 5-11 5v8h12v3H15s-8-1-8 12 7 12 7 12h5v-7s0-8 8-8h13s7 0 7-7V14s1-7-16-7Zm-7 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
					/>
					<path
						fill="#FFD43B"
						d="M33 57c12 0 11-5 11-5v-8H32v-3h17s8 1 8-12-7-12-7-12h-5v7s0 8-8 8H24s-7 0-7 7v11s-1 7 16 7Zm7-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
					/>
				</svg>
			);
		case "html":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<path fill="#E34F26" d="M10 5h44l-4 48-18 6-18-6L10 5Z" />
					<path fill="#EF652A" d="M32 9h18l-3 40-15 5V9Z" />
					<path
						fill="#fff"
						d="M20 16h25l-1 6H27l1 6h15l-2 16-9 3-9-3-1-9h6l1 4 4 1 4-1 1-6H23l-3-17Z"
					/>
				</svg>
			);
		case "javascript":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<rect x="5" y="5" width="54" height="54" fill="#F7DF1E" />
					<text
						x="17"
						y="47"
						fill="#323330"
						fontSize="27"
						fontWeight="700"
						fontFamily="Arial, sans-serif"
					>
						JS
					</text>
				</svg>
			);
		case "react":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<g
						fill="none"
						stroke="#61DAFB"
						strokeWidth="3"
					>
						<ellipse cx="32" cy="32" rx="25" ry="10" />
						<ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)" />
						<ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)" />
					</g>
					<circle cx="32" cy="32" r="4" fill="#61DAFB" />
				</svg>
			);
		case "git":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<path
						fill="#F05032"
						d="M59 29 35 5a4 4 0 0 0-6 0L5 29a4 4 0 0 0 0 6l24 24a4 4 0 0 0 6 0l24-24a4 4 0 0 0 0-6Z"
					/>
					<path
						d="M21 19v26m0-17h12a6 6 0 0 1 6 6v11m-6-26v9"
						fill="none"
						stroke="#fff"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="21" cy="19" r="3" fill="#fff" />
					<circle cx="33" cy="19" r="3" fill="#fff" />
					<circle cx="39" cy="45" r="3" fill="#fff" />
				</svg>
			);
		case "mysql":
			return (
				<svg viewBox="0 0 64 64" className="size-12" aria-hidden="true">
					<path
						d="M13 39c8-2 10-9 14-17 3-6 8-8 12-5 3 2 3 6 7 7 2 1 4 0 6-1-1 4-4 7-9 7-4 0-6-3-8-6-2 8-7 15-15 18-3 1-6 0-7-3Zm31-12c4 3 7 7 8 12"
						fill="none"
						stroke="#00758F"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<text
						x="10"
						y="53"
						fill="#00618A"
						fontSize="12"
						fontWeight="700"
						fontFamily="Arial, sans-serif"
					>
						MySQL
					</text>
				</svg>
			);
	}
}

export default function Skills() {
	return (
		<section id="skills" className="scroll-mt-28 py-8">
			<h2 className="theme-title mb-7 text-3xl font-bold sm:text-4xl">
				My Skills
			</h2>

			<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
				{skills.map((skill) => (
					<li
						key={skill.name}
						className="theme-panel flex min-h-40 flex-col items-center justify-center gap-4 rounded-2xl border p-4 text-center transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-blue-50 dark:hover:bg-[#0b2342]"
					>
						<div className="theme-panel-raised flex size-16 items-center justify-center rounded-xl border shadow-inner shadow-black/10">
							<SkillIcon icon={skill.icon} />
						</div>
						<span className="theme-copy text-sm font-medium">
							{skill.name}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}
