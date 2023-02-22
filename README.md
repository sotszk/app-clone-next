# APP CLONE NEXT

最近（2023 年初旬）のフロントエンド事情を、実運用を想定した Next.js + React アプリを開発しながらキャッチアップといいますか、ベストプラクティスを探っていく用に作ったリポジトリです。

## 使用技術

- [Next.js v13](https://nextjs.org/blog/next-13)
- TypeScript
- [Prisma](https://www.prisma.io)
- [Vanilla Extract](https://vanilla-extract.style/)

## Getting started (for 自分)

### Planet Scale の DB と接続

```sh
$ pscale connect my_database main --port 3309
# Secure connection to database my_database and branch main is established!
```

### ローカル環境で開発

```sh
yarn dev
# next
# started server on port 3000
```

Then, access <http://localhost:3000>

### React + CSS 考察 (WIP)

#### 1. CSS Modules

- アリ
- コード補完も [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) でばっちり
- 当然 PostCSS Preset Env を入れて Nesting とか Custom Media とかも入れる
- SCSS でもいい

#### 2. Vanilla Extract

- アリ。ゼロランタイム最高。
- `nanka-style.css.ts` というファイル接尾辞は少し違和感あり
- CSS Modules とほぼ感覚は一緒（少しだけ学習コストはあるが）

こんな感じにすればかなり CSS Modules ライクに書ける。

```ts:nav.css.ts
import { style } from "@vanilla-extract/css";

export const nav = style({
  padding: "16px 0",
});
```

```tsx:Nav.tsx
import * as styles from './nav.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {/* ... */}
    </nav>
  )
}
```

#### 備考

- パフォーマンスを考慮して StyledComponents 系の CSS in JS は避けている（チリツモ案件）
