import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-gold flex flex-col items-center justify-center px-4">
      <Logo />
      <h1 className="text-4xl md:text-5xl font-bold mt-6 text-center drop-shadow-lg">
        Bem-vindo ao FutStatics
      </h1>
      <p className="text-lg text-center mt-4 max-w-xl">
        Seu sistema de estatísticas de futebol com a força de um dragão ⚽
      </p>
    </main>
  );
}
