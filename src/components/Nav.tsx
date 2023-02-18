import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/products">製品一覧</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
