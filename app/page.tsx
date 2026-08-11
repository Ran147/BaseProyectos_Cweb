import Image from "next/image";
import UserLists from "./features/userLists";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-10 py-16 px-6 bg-white dark:bg-black sm:items-start">
        <div className="w-full flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Lista de usuarios
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Agrega nuevos usuarios y elimínalos cuando quieras.
          </p>
        </div>

        <div className="w-full">
          <UserLists />
        </div>
      </main>
    </div>
  );
}
