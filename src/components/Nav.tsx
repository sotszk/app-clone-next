import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">ホーム</Link></li>
        <li><Link href="/communities">コミュニティ</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
