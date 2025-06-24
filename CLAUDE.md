# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code（claude.ai/code）へのガイダンスを提供します。

## 開発コマンド

- `npm install` - 依存関係をインストール
- `npm run dev` - ViteとHonoXを使用して開発サーバーを起動
- `npm run build` - 本番用にビルド（クライアント + サーバー）
- `npm run preview` - Wranglerで本番ビルドをプレビュー
- `npm run deploy` - ビルドしてCloudflare Workersにデプロイ

### データベースコマンド

- `npm run drizzle:generate` - スキーマからデータベースマイグレーションを生成
- `npm run migrate:local` - ローカルD1データベースにマイグレーションを適用
- `npm run migrate` - リモートD1データベースにマイグレーションを適用

## プロジェクトアーキテクチャ

これは**門徒情報管理システム**で、HonoXとCloudflare Workersで構築されています。

### 技術スタック
- **フレームワーク**: HonoX (Hono + ファイルベースルーティング)
- **ランタイム**: Cloudflare Workers
- **データベース**: Cloudflare D1 (SQLite) with Drizzle ORM
- **スタイリング**: Tailwind CSS
- **ビルド**: Vite

### アーキテクチャパターン
コードベースは**レイヤードアーキテクチャ**に従います：

1. **ルート** (`app/routes/`) - HonoXファイルベースルーティングとJSXコンポーネント
2. **ユースケース** (`usecase/`) - ビジネスロジック層（createMonto, updateMonto, deleteMonto）
3. **クエリサービス** (`queryService/`) - 読み取り専用操作（findMontos, findMontoById）
4. **データベース** (`infra/db/`) - Drizzle ORMを使用したデータアクセス層
5. **結果型** (`result/`) - Result<T>パターンによる標準化されたエラーハンドリング

### データベーススキーマ
`infra/db/d1/schema.ts`の主要エンティティ：
- **montos** - 門徒（headName、address、phone）
- **montoFamilies** - montosに紐づく家族構成員
- **deceasedPerson** - 法名（homyo）、命日（meinichi）を持つ故人情報
- **hoyo** - 法要スケジューリング
- **users** - ロールベースアクセスを持つシステムユーザー

### 重要なパターン
- **Resultパターン**: すべてのユースケースは一貫したエラーハンドリングのため`Result<T>`を返す
- **データベース接続**: Cloudflare envバインディングを受け取る`getDatabase(env)`関数を使用
- **型安全性**: 入力/出力の包括的なTypeScript型
- **ファイルベースルーティング**: `app/routes/`のルートは自動的にURLパスにマッピング

### 重要なファイル
- `app/server.ts` - HonoXアプリのエントリーポイント
- `infra/db/connection.ts` - データベース接続ファクトリ
- `wrangler.jsonc` - Cloudflare Workers設定
- `vite.config.ts` - HonoX、Tailwind、Cloudflare Workersアダプターを含むビルド設定

このシステムは、仏教寺院の管理のために、家族詳細、故人情報、法要スケジューリングを含む門徒情報を管理します。