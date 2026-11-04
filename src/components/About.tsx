
export default function About() {
	return (
		<section
			id="about"
			className="theme-panel mt-12 flex min-h-[calc(100svh-4rem)] scroll-mt-10 items-center rounded-3xl border p-6 sm:p-10"
		>
			<div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
				<div>
					<div className="mb-5 space-y-2">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300 sm:text-sm">
							Perkenalan
						</p>

						<h2 className="theme-title text-3xl font-bold sm:text-4xl lg:text-5xl">
							Tentang Saya
						</h2>
					</div>

					<div className="theme-copy max-w-2xl space-y-3 text-base leading-7 sm:text-base sm:leading-7 lg:text-lg">
						<p>
							Saya Danis, Mahasiswa Teknik Informatika yang berdedikasi mendalami web development. 
							Berbekal rasa ingin tahu yang tinggi, saya selalu bersemangat memecahkan masalah melalui kode dan desain antarmuka.
						</p>

						<p>
							Belajar menguasai dasar-dasar web modern seperti HTML, CSS, JavaScript, hingga framework seperti Laravel, saya terus mengasah logic programming dan problem solving lewat proyek riil.
						</p>

						<p>
							Portofolio ini merupakan wujud dari dedikasi dan proses belajar saya dalam menghadirkan solusi digital yang kreatif.
						</p>
					</div>
				</div>

				<div className="theme-panel-raised relative min-h-64 overflow-hidden rounded-2xl border shadow-xl shadow-blue-950/10 sm:min-h-80 lg:h-[min(55svh,24rem)] lg:min-h-0">
					<img
						src="/about-illustration.jpeg"
						alt="Laptop dan ponsel dengan tampilan kode"
						className="absolute inset-0 size-full object-cover"
						loading="lazy"
						decoding="async"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#06162b]/45 via-transparent to-transparent" />
				</div>
			</div>
		</section>
	);
}
