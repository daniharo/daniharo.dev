import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={clsx(inter.className, "flex h-screen flex-col justify-center")}
    >
      <section className="ml-8 flex flex-col">
        <span className="mb-3 text-5xl font-semibold">I&apos;m Dani.</span>
        <span>Full-stack dev.</span>
        <span>Developing awesome things at Appfluence.</span>
      </section>
    </main>
  );
}
