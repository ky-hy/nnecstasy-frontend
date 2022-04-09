# コンテナ内の環境

このプロジェクトではフレームワーク[Next.js](https://nextjs.org/)を利用.環境構築は[create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)を利用。

言語は、TypeScript(\*.ts）で記述。css フレームワークは[TailwindCSS](https://tailwindcss.com/)を利用。

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

`/app/.next/`にビルドファイル群が作成。
