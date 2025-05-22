# プロジェクト基盤構築

## 目的

門徒情報管理システムの開発基盤を整備し、効率的な開発環境を構築する。

## タスク内容

### 1.1 プロジェクト初期設定

- [x] HonoX + TypeScript プロジェクトのセットアップ
  - [x] 必要なパッケージのインストール
    - [x] `honox`
    - [x] `@hono/node-server`
    - [x] `drizzle-orm`
    - [x] `drizzle-kit`
    - [x] `zod`
  - [x] プロジェクト構造の設計
    ```
    app/
    ├── components/    # UIコンポーネント
    ├── lib/          # ユーティリティ
    ├── models/       # データモデル
    ├── routes/       # ルート定義
    ├── styles/       # スタイル定義
    └── utils/        # ヘルパー関数
    ```
  - [x] 設定ファイルの作成
- [x] データベース環境の構築
  - [x] PostgreSQL のセットアップ
  - [x] Drizzle の設定
  - [x] マイグレーションツールの導入
- [x] 開発環境の整備
  - [x] ESLint 設定
  - [x] Prettier 設定
  - [x] Git 設定
  - [x] 開発用スクリプトの作成
  - [x] ホットリロード設定

### 1.2 データベーススキーマ設計

- [x] 門徒テーブル設計
- [x] 家族構成テーブル設計
- [x] 故人情報テーブル設計
- [x] ユーザー管理テーブル設計
- [x] 法要管理テーブル設計

## 関連ファイル

- `package.json`
- `tsconfig.json`
- `app/index.tsx`
- `app/routes/index.tsx`
- `drizzle.config.ts`
- `drizzle/schema.ts`
- `.eslintrc.js`
- `.prettierrc`
- `.gitignore`
- `README.md`
