import Image from "next/image";
import FormRaffle from "./Components/FormRaffle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Rifa para tratamento&nbsp;
          <span className="font-mono font-bold">oncológico!</span>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Por{" "}
            <Image
              src="/aeternum.svg"
              alt="Techbology in Aeternum Logo"
              className="dark rounded"
              width={80}
              height={24}
              priority
            />
          </a>
        </div>
      </section>
      <section className="h-screen"> 
        <div className="flex font-sans rounded-md border drop-shadow-md">
          <div className="flex-none w-48 relative">
            < Image
              src="/wine.svg"
              alt="Taças de vinho"
              width={48}
              height={100}
              className="absolute inset-0 w-full h-full object-cover rounded-l"
              loading="lazy"
            />
          </div>
          <div className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                Rifa beneficente
              </h1>
              <div className="text-lg font-semibold text-slate-500">R$10.00</div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                <p className="py-1">1º prêmio cesta com vinho e chocolates.</p>
                <p className="py-1">2º prêmio cesta com cerveja e petiscos.</p>
              </div>
            </div>
            <div className="py-5"></div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <a
                  className="h-10 px-6 pt-2 font-semibold rounded-md bg-black text-white"
                  href="#formRaffle"
                >
                  Compra agora
                </a>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">
              Imagem ilustrativa.
            </p>
          </div>
        </div>
      </section>

      <section className="flex font-sans w-[40rem] rounded-md border drop-shadow-md">
        <FormRaffle />
      </section>
    </main>
  );
}
