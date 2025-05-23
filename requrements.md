# 門徒情報管理システム要件定義書

## 1. システム概要

本システムはお寺の門徒情報を管理するための WEB アプリケーションである。門徒の基本情報、家族構成、先祖・故人情報を一元管理し、検索や法要予定の確認を可能にする。

## 2. 利用者

- 住職
- 事務担当者

## 3. 機能要件

### 3.1 基本情報管理

#### 3.1.1 門徒基本情報

- 門徒番号（ID）
- 世帯主氏名（漢字、フリガナ）
- 住所
- 電話番号（固定・携帯）
- メールアドレス
- 門徒登録日
- 備考欄

#### 3.1.2 家族構成情報

- 家族構成員の氏名
- 続柄
- 生年月日
- 備考欄

#### 3.1.3 先祖・故人情報

- 故人氏名
- 法名
- 命日
- 享年
- 埋葬場所（墓石番号など）
- 備考欄

### 3.2 門徒検索機能

- 氏名検索（部分一致）
- 住所検索（地域別）
- 命日検索（月別など）

### 3.3 法要・年忌管理

- 年忌法要の自動計算（一周忌、三回忌、七回忌など）
- 月別の法要予定表示

### 3.4 データ管理機能

- データ修正履歴の記録

### 3.5 ユーザー管理

- ユーザーアカウント作成（10 名程度）
- ユーザー権限設定（閲覧のみ、編集可能など）
- ログイン履歴

### 3.6 セキュリティ

- パスワード認証
- セッション管理
- 個人情報保護対策

## 4. 画面構成

1. ログイン画面
2. ダッシュボード（今日の命日、近日の年忌法要など）
3. 門徒一覧画面
4. 門徒詳細画面（基本情報、家族情報、故人情報タブ付き）
5. 門徒登録/編集画面
6. 検索画面
7. 月間カレンダー（法要予定）
8. 管理者設定画面

## 5. 非機能要件

### 5.1 拡張性

- 将来的な機能追加が可能な設計
