'use client'


export default function Products() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        type="text"
        placeholder="Digite o nome do produto"
        className="border p-2"
        id="search"
      />
      <div className="filtered-results">

      </div>
    </div>
  )
}