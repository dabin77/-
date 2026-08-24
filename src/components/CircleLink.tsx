import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

type CircleLinkProps = {
  href: string
  label: string
  external?: boolean
  className?: string
}

export function CircleLink({ href, label, external = false, className = '' }: CircleLinkProps) {
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noreferrer' }
    : undefined
  const Icon = external ? ArrowUpRight : ArrowDownRight

  return (
    <a className={`circle-link ${className}`} href={href} {...externalProps}>
      <span>{label}</span>
      <Icon aria-hidden="true" strokeWidth={1.6} />
    </a>
  )
}
