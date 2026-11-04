
import { Eye } from "lucide-react";

type Project = {
	title: string;
	category: string;
	description: string;
	image?: string;
	technologies: string[];
};

const projects: Project[] = [
	{
		title: "D-SQRA Attendance",
		category: "Web Application",
		description:
			"Aplikasi presensi karyawan berbasis web menggunakan QR Code untuk membantu pencatatan dan pengelolaan kehadiran.",
		image: "/d-sqra-attendance.png",
		technologies: ["Laravel", "TypeScript", "Supabase"],
	},
	{
		title: "SIM Mahasiswa",
		category: "Information System",
		description:
			"Dashboard administrasi akademik untuk mengelola data mahasiswa, program studi, status keaktifan, dan statistik mahasiswa.",
		image: "/sim-mahasiswa.png",
		technologies: ["Python", "Tkinter", "MySQL"],
	},
	{
		title: "Website Form Mahasiswa",
		category: "Student Registration Form",
		description:
			"Website formulir data mahasiswa untuk mengisi NIM, nama, alamat, jenis kelamin, tanggal lahir, dan password, serta menampilkan data mahasiswa dalam tabel.",
		image: "/website-form-mahasiswa.png",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col justify-center space-y-6 py-8 sm:space-y-8 sm:py-10"
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

			<div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<article
						key={project.title}
						className="theme-panel group flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-xl hover:shadow-blue-950/20"
					>
						<div
							className={`relative flex items-end overflow-hidden ${
								project.image
									? "aspect-video bg-[#586a6f]"
									: "h-36 bg-gradient-to-br from-blue-200 via-indigo-100 to-slate-100 p-5 dark:from-blue-600/40 dark:via-indigo-500/25 dark:to-[#071a32]"
							}`}
						>
							{project.image ? (
								<>
									<img
										src={project.image}
										alt={`Tampilan aplikasi ${project.title}`}
										className="absolute inset-0 size-full object-contain"
										loading="lazy"
										decoding="async"
									/>
									<p className="relative z-10 m-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
										{project.category}
									</p>
								</>
							) : (
								<>
									<div className="absolute -right-4 -top-10 size-36 rounded-full border border-blue-200/10 bg-blue-300/5 transition duration-500 group-hover:scale-110" />
									<div className="absolute right-8 top-8 size-20 rounded-2xl border border-blue-100/20 bg-[#071a32]/60 shadow-xl shadow-blue-950/30" />
									<p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-blue-900 dark:text-blue-200">
								{project.category}
									</p>
								</>
							)}
						</div>
						<div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-4">
							<h3 className="theme-title text-lg font-bold sm:text-xl lg:text-lg">
								{project.title}
							</h3>

							<p className="theme-subtle mt-2 flex-1 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7 lg:mt-2 lg:text-sm lg:leading-6">
								{project.description}
							</p>

							<div className="mt-4 flex flex-wrap gap-2 sm:mt-5 lg:mt-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="rounded-full border border-blue-600/15 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:border-blue-300/10 dark:bg-blue-400/10 dark:text-blue-100"
									>
										{tech}
									</span>
								))}
							</div>

							{project.image && (
								<a
									href={project.image}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
								>
									<Eye className="size-4" aria-hidden="true" />
									View
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
