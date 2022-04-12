# コンテナ内の環境


- Web開発フレームワーク
   - [Next.js](https://nextjs.org/)
      - 環境構築 : [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- 言語 
   -[TypeScript(\*.ts）](https://www.typescriptlang.org/)
 - CSSフレームワーク
   - [TailwindCSS](https://tailwindcss.com/)

# 開発手順

- 利用環境
  - node 16.14.2
- ローカルサーバ起動

```sh
$ yarn dev
```

コンテナ内では[http://localhost:3000](http://localhost:3000)にローカルサーバアクセス可能(ホスト側では[http://localhost:3001](http://localhost:3001))

- リンター(ESlint)

```sh
$ yarn lint
```

- フォーマッター(Prettier)

```sh
$ yarn format
```

- ビルド

```sh
$ yarn build
```

ビルドを行うと`/app/.next/`にビルドファイル群が作成されます。
