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

## Next.js v13 の App Dir (Experimental) 考察

- /app でも /src/app でも OK
- 使いたいが・・・
  - Server Component 関連のエラーが頻発する
  - コンポーネントで Vanilla Extract のスタイルを読み込むとエラーが起きるので、とりあえず使用中止。実験的機能だしナ・・・。
    - 気が向いたら原因調査してみる

## React + CSS 考察 (WIP)

### 1. CSS Modules

- アリ
- コード補完も [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) でばっちり
- 当然 PostCSS Preset Env を入れて Nesting とか Custom Media とかも入れる
- SCSS でもいい

### 2. Vanilla Extract

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

### 備考

- パフォーマンスを考慮して StyledComponents 系の CSS in JS は避けている（チリツモ案件）

## PostCSS を使う

Next.js はビルトインで PostCSS が使える。ただし、デフォルトの `postcss.config.json` をカスタムする場合、デフォルトの設定が完全に無効になる。つまり上書きすることになる。

デフォルトの設定に入っている `postcss-preset-env` や `postcss-flex-bugs-fixes` のパッケージもインストールし直す必要があるので注意。

[Customizing Plugins | PostCSS | Next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins)
