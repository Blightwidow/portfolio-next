import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="container">
        Homepage
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
      </main>
    </>
  )
}
