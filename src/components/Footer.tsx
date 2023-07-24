export function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <footer className="bg-white border-t-4 border-t-green-500 flex-1">
      <div className="w-wrapper mx-auto p-8 text-center text-sm text-zinc-500">
        Blah! &copy; {fullYear}
      </div>
    </footer>
  )
}
