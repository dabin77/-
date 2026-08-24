import { navItems } from '../data/portfolio'

type SiteNavProps = {
  tone?: 'dark' | 'light'
}

export function SiteNav({ tone = 'dark' }: SiteNavProps) {
  return (
    <nav className={`site-nav site-nav--${tone}`} aria-label="주요 메뉴">
      <a className="site-nav__brand" href="#top" aria-label="페이지 맨 위로">
        SD
      </a>
      <div className="site-nav__links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
