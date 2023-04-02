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
        "flex h-screen flex-col items-center justify-center md:flex-row"
      )}
    >
      <section className="ml-8 flex flex-col">
        <span className="mb-3 text-5xl font-semibold">I&apos;m Dani.</span>
        <span>Full-stack dev.</span>
        <span>Creating awesome experiences at Appfluence.</span>
      </section>
      <section className="flex flex-1 justify-center gap-4">
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
