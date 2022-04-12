# nnecstasy-frontend

nnecstasy のフロントエンドプロジェクトです。

この [README.md](./README.md) ではホスト側の開発手順を記載します。コンテナ内での操作等は[./app/README.md](./app/README.md)に記載します。

# 開発手順

- 必要なツール

  - docker-compose: 1.29.2
  - docker: 20.10.11

- 環境構築

```shell
$ git clone https://github.com/ky-hy/nnecstasy-frontend.git
$ cd nnecstasy-frontend
# サービスビルド
$ docker-compose build
# パッケージインストール(初回または、新たにパッケージが導入された時のみ)
$ docker-compose run --rm front yarn install --frozen-lockfile
# コンテナ起動
$ docker-compose up -d
```

[http://localhost:3001/](http://localhost:3001/)にアクセス

- コンテナ内に入る

```sh
$ docker-compose exec front sh
```

- ログを見る

```sh
$ dccker-compose logs -ft
```

# VSCode 利用者向け設定

以下の vscode 拡張機能を導入すると、保存と同時にリンター及びフォーマッターが実行され、リアルタイムでエラーを検出します。

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
