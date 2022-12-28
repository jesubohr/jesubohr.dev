import { useEffect } from "react"

export interface IHeaderLinkProps {
  href: string
  children: React.ReactNode
}

export const HeaderLink = ({ href, children }: IHeaderLinkProps) => {
  useEffect(() => {
    const path = window.location.href.split("/").pop()
    const link = document.querySelector(`a[href="/${path}"]`)
    if (link) link.classList.add("bg-[#199400]")
  }, [href])

  return (
    <a
      href={href}
      className="p-2 w-full hover:bg-[#116600] text-center text-[2rem] leading-none uppercase last-of-type:border-none"
    >
      {children}
    </a>
  )
}
