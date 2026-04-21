import Image from "next/image"

export function BukIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/buk-logo.webp"
      alt="Buk"
      width={40}
      height={40}
      className={className}
    />
  )
}
