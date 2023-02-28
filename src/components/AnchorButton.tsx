interface AnchorButtonProps {
  href: string
  text: string
  className?: string
}

export function AnchorButton({ href, text }: AnchorButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="relative inline-block px-5 py-2 border-2 border-primary text-2xl overflow-hidden cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary before:scale-x-100 before:scale-y-0 before:-z-[1] before:transition-transform before:duration-200 before:ease-in-out hover:before:scale-y-100 focus:before:scale-y-100"
    >
      {text}
    </a>
  )
}
