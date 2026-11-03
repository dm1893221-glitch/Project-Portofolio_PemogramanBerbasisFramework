
import Image from "next/image";

export default function About() {
	return (
		<section
			id="about"
			className="theme-panel mt-12 flex min-h-[calc(100svh-4rem)] scroll-mt-10 items-center rounded-3xl border p-6 sm:p-10"
		>
			<div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
				<div>
					<div className="mb-5 space-y-2">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
							Perkenalan
						</p>

						<h2 className="theme-title text-3xl font-bold sm:text-4xl">
							Tentang Saya
						</h2>
					</div>

					<div className="theme-copy max-w-2xl space-y-3 text-sm leading-6 sm:text-base sm:leading-7 lg:text-sm lg:leading-6">
						<p>
							Halo! Saya Danis, mahasiswa Teknik Informatika yang
							memiliki ketertarikan dalam bidang teknologi informasi,
							pengembangan website, dan desain antarmuka pengguna.
							Saya senang mempelajari hal-hal baru dan mengembangkan
							keterampilan di bidang teknologi.
						</p>

						<p>
							Saya terus belajar menggunakan HTML, CSS, JavaScript,
							PHP, Laravel, dan teknologi pengembangan web lainnya.
							Melalui tugas kuliah dan proyek pribadi, saya berusaha
							meningkatkan kemampuan pemrograman, berpikir logis,
							dan pemecahan masalah.
						</p>

						<p>
							Portofolio ini menjadi tempat untuk menampilkan hasil
							proyek, keterampilan, dan proses belajar saya dalam
							mengembangkan solusi digital yang kreatif dan bermanfaat.
						</p>
					</div>
				</div>

				<div className="theme-panel-raised relative min-h-64 overflow-hidden rounded-2xl border shadow-xl shadow-blue-950/10 sm:min-h-80 lg:h-[min(55svh,24rem)] lg:min-h-0">
					<Image
						src="/about-illustration.jpeg"
						alt="Laptop dan ponsel dengan tampilan kode"
						fill
						sizes="(max-width: 1024px) 100vw, 45vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#06162b]/45 via-transparent to-transparent" />
				</div>
			</div>
		</section>
	);
}
