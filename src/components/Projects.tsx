
import { Code2, ExternalLink } from "lucide-react";

type Project = {
	title: string;
	category: string;
	description: string;
	technologies: string[];
	repositoryUrl: string | null;
	demoUrl: string | null;
};

const projects: Project[] = [
	{
		title: "D-SQRA Attendance",
		category: "Web Application",
		description:
			"Aplikasi presensi karyawan berbasis web menggunakan QR Code untuk membantu pencatatan dan pengelolaan kehadiran.",
		technologies: ["Laravel", "TypeScript", "Supabase"],
		repositoryUrl: null,
		demoUrl: null,
	},
	{
		title: "Sistem Informasi Perpustakaan",
		category: "Information System",
		description:
			"Aplikasi pengelolaan data buku dan anggota perpustakaan untuk mempermudah pencatatan peminjaman.",
		technologies: ["Python", "Tkinter", "MySQL"],
		repositoryUrl: null,
		demoUrl: null,
	},
	{
		title: "Website Portofolio",
		category: "Personal Website",
		description:
			"Website pribadi untuk menampilkan profil, keterampilan, proyek, dan informasi kontak.",
		technologies: ["Next.js", "React", "Tailwind CSS"],
		repositoryUrl: null,
		demoUrl: null,
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="scroll-mt-28 space-y-8 py-16"
		>
			<div className="space-y-2">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
					Karya Saya
				</p>

				<h2 className="theme-title text-3xl font-bold sm:text-4xl">
					Proyek Pilihan
				</h2>

				<p className="theme-subtle max-w-2xl leading-7">
					Beberapa contoh proyek yang dapat ditampilkan
					dalam portofolio saya.
				</p>
			</div>

			<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<article
						key={project.title}
						className="theme-panel group flex flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-xl hover:shadow-blue-950/20"
					>
						<div className="relative flex h-36 items-end overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-100 to-slate-100 p-5 dark:from-blue-600/40 dark:via-indigo-500/25 dark:to-[#071a32]">
							<div className="absolute -right-4 -top-10 size-36 rounded-full border border-blue-200/10 bg-blue-300/5 transition duration-500 group-hover:scale-110" />
							<div className="absolute right-8 top-8 size-20 rounded-2xl border border-blue-100/20 bg-[#071a32]/60 shadow-xl shadow-blue-950/30" />
							<p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-blue-900 dark:text-blue-200">
								{project.category}
							</p>
						</div>
						<div className="flex flex-1 flex-col p-5">
							<h3 className="theme-title text-xl font-bold">
								{project.title}
							</h3>

							<p className="theme-subtle mt-3 flex-1 leading-7">
								{project.description}
							</p>

							<div className="mt-5 flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="rounded-full border border-blue-600/15 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:border-blue-300/10 dark:bg-blue-400/10 dark:text-blue-100"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="mt-6 flex flex-wrap gap-3">
							{project.demoUrl && (
								<a
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
								>
									<ExternalLink className="size-4" aria-hidden="true" />
									Live Demo
								</a>
							)}

							{project.repositoryUrl ? (
								<a
									href={project.repositoryUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="theme-copy inline-flex items-center gap-2 rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold transition hover:border-blue-300/50 hover:bg-slate-900/5 dark:border-slate-600 dark:hover:bg-white/5"
								>
									<Code2 className="size-4" aria-hidden="true" />
									GitHub Repository
								</a>
							) : (
								<button
									type="button"
									disabled
									title="Tautan repository belum tersedia"
									className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-500"
								>
									<Code2 className="size-4" aria-hidden="true" />
									GitHub Repository
								</button>
							)}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
