type SectionTitleProps = {
  children: string
  id?: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  children,
  id,
  tone = 'dark',
  align = 'left',
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`section-title section-title--${tone} section-title--${align} ${className}`}
      id={id}
    >
      {children}
    </h2>
  )
}
