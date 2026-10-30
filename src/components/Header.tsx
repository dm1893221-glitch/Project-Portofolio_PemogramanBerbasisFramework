import Image from "next/image";
import { ArrowDown, Download, Sparkles, Zap } from "lucide-react";

export default function Header() {
	return (
		<section
			id="home"
			className="theme-hero relative isolate scroll-mt-28 overflow-hidden rounded
			-3xl border px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-10 sm:py-16 lg:px-14"
		>
			<div className="absolute -right-20 -top-24 -z-10 size-80 rounded-full bg-blue-600/20 blur-3xl" />
			<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="max-w-2xl">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-200 sm:text-sm">
						<Zap className="size-4 text-blue-700 dark:text-blue-300" />
						<span>Mahasiswa Teknik Informatika</span>
					</div>

					<h1 className="theme-title mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
						Halo, saya{" "}
						<span className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-indigo-400">
							Danis.
						</span>
					</h1>

					<p className="theme-title mb-5 text-lg font-medium sm:text-2xl">
						Spesialisasi di{" "}
						<span className="text-blue-700 dark:text-blue-300">Web Development|</span>
					</p>

					<p className="theme-copy mb-8 max-w-xl text-sm leading-7 sm:text-base">
						Saya tertarik pada pengembangan website, teknologi informasi, dan desain antarmuka. 
						Saya senang belajar, mencoba hal baru, serta membangun solusi digital yang bermanfaat.
					</p>

					<div className="mb-8 flex flex-wrap gap-3">
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
						<a
							href="/CV-Danis.pdf"
							download="CV-Danis.pdf"
							className="inline-flex items-center gap-2 rounded-xl border border-blue-300/20 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-400/20 dark:text-blue-200"
						>
							<Download className="size-4" aria-hidden="true" />
							Unduh CV
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

				<div className="relative mx-auto w-full max-w-md lg:max-w-none">
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
