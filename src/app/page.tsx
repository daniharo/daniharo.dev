import { Inter } from "next/font/google";
import clsx from "clsx";
import { SocialButton } from "@/components/SocialButton";
import { Github, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={clsx(
        inter.className,
        "ml-8 flex h-screen flex-col items-start justify-center md:flex-row md:items-center"
      )}
    >
      <section className="flex flex-col">
        <span className="mb-3 text-5xl font-semibold">I&apos;m Dani.</span>
        <span>Full-stack dev.</span>
        <span>Creating awesome experiences at Appfluence.</span>
      </section>
      <section className="mt-8 flex justify-center gap-4 md:flex-1">
        <SocialButton href="https://github.com/daniharo/">
          <Github />
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/daniel-haro-contreras/">
          <Linkedin />
        </SocialButton>
      </section>
    </main>
  );
}
