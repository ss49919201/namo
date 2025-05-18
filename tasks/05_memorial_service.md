# 法要管理機能

## 目的

法要予定の効率的な管理と、年忌法要の自動計算機能を実現する。

## タスク内容

### 5.1 法要管理システム

- [ ] 年忌法要自動計算機能
  - 一周忌計算
  - 三回忌計算
  - 七回忌計算
  - その他年忌計算
- [ ] 法要予定カレンダー表示
  - 月間カレンダー
  - 週間カレンダー
  - 日別表示
  - 法要種別表示
- [ ] 法要予定登録/編集
  - 予定登録フォーム
  - 予定編集機能
  - 予定削除機能
  - 繰り返し予定設定
- [ ] 法要通知機能
  - 通知設定
  - 通知送信
  - 通知履歴管理

## 関連ファイル

- `app/memorial/page.tsx`
- `app/memorial/calendar/page.tsx`
- `app/memorial/[id]/page.tsx`
- `components/memorial/Calendar.tsx`
- `components/memorial/ServiceForm.tsx`
- `components/memorial/ServiceList.tsx`
- `lib/memorial.ts`
- `lib/notification.ts`
- `types/memorial.ts`

## 完了条件

- [ ] 年忌法要の計算が正確であること
- [ ] カレンダー表示が適切に機能すること
- [ ] 法要予定の CRUD 操作が正常に動作すること
- [ ] 通知機能が確実に動作すること
- [ ] UI/UX が使いやすいこと
- [ ] パフォーマンスが良好であること

## 注意事項

- 年忌計算の正確性確保
- カレンダー表示の最適化
- 通知タイミングの適切な管理
- データの整合性維持
- ユーザーフレンドリーなインターフェース
- エラーハンドリングの徹底
- アクセス権限の適切な管理
