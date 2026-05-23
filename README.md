# HTTP 451 for Art. 175 JP

HTTP 451 "Unavailable For Legal Reasons" を題材にした静的ページです。

このプロジェクトは、表現の自由や検閲に対する問題意識を示すための抗議のアートです。特定の個人や団体への攻撃ではなく、法や制度によって表現が制限される状況そのものを可視化することを目的としています。

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

生成物は `dist/` に出力されます。

## Deployment

`main` ブランチへの push を契機に、GitHub Actions でビルドされ GitHub Pages にデプロイされます。
