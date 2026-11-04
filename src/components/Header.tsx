import Image from "next/image";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

export default function Header() {
	return (
		<section
			id="home"
			className="theme-hero relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-28 items-center overflow-hidden rounded-3xl border px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-10 sm:py-10 lg:px-14"
		>
			<div className="absolute -right-20 -top-24 -z-10 size-80 rounded-full bg-blue-600/20 blur-3xl" />
			<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="max-w-2xl">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-200 sm:text-sm">
						<Zap className="size-4 text-blue-700 dark:text-blue-300" />
						<span>Mahasiswa Teknik Informatika</span>
					</div>

					<h1 className="theme-title mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
						Halo, saya{" "}
						<span className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-indigo-400">
							Danis.
						</span>
					</h1>

					<p className="theme-title mb-3 text-lg font-medium sm:text-2xl">
						Web Development in{" "}
						<span className="text-blue-700 dark:text-blue-300">Training & Informatics Student</span>
					</p>

					<p className="theme-copy mb-5 max-w-xl text-sm leading-7 sm:text-base">
						Mahasiswa Teknik Informatika yang fokus mempelajari web development. Saya berdedikasi menciptakan solusi digital yang fungsional, responsif, dan memberikan pengalaman pengguna terbaik.
					</p>

					<div className="mb-5 flex flex-wrap gap-3">
						<a
							href="#projects"
							className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"
						>
							Lihat Proyek
						</a>
						<a
							href="#contact"
							className="theme-title rounded-xl border border-slate-500/40 bg-white/50 px-5 py-3 text-sm font-semibold transition hover:border-blue-300/50 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
						>
							Hubungi Saya
						</a>
					</div>

					<a
						href="#about"
						className="inline-flex size-10 items-center justify-center rounded-full border border-blue-300/20 bg-white/50 text-blue-700 transition hover:border-blue-300/50 hover:bg-blue-400/10 dark:bg-white/5 dark:text-blue-200"
						aria-label="Scroll ke About"
					>
						<ArrowDown className="size-5" />
					</a>
				</div>

				<div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-xs">
					<div className="absolute inset-8 rounded-full bg-blue-500/30 blur-3xl" />
					<div className="relative mx-auto aspect-[4/4.2] w-full max-w-sm overflow-hidden rounded-[2rem] border border-blue-200/20 bg-[#0b2442] shadow-2xl shadow-blue-950/50">
						<Image
							src="/profile.jpg"
							alt="Danis"
							fill
							sizes="(max-width: 768px) 80vw, 40vw"
							className="object-cover object-[center_10%]"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#06162b]/75 via-transparent to-transparent" />
						<div className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full border border-blue-200/30 bg-[#071a32]/90 text-blue-200 shadow-lg">
							<Sparkles className="size-5" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
