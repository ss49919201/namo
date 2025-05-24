import { createRoute } from "honox/factory";

export default createRoute((c) => {
  // URLパラメータからユーザーIDを取得
  const userId = c.req.param("id");

  // サンプルユーザーデータ（実際の場合はデータベースから取得）
  const user = {
    id: userId,
    username: "yamada_taro",
    email: "yamada@example.com",
    firstName: "山田",
    lastName: "太郎",
    phone: "090-1234-5678",
    department: "engineering",
    role: "editor",
    status: "active",
    registeredAt: "2024-01-15",
    lastLogin: "2024-05-24",
    emailVerified: true,
    twoFactorEnabled: false,
  };

  return c.render(
    <div class="min-h-screen bg-gray-50">
      <title>ユーザー編集 - {user.username}</title>

      {/* ヘッダー */}
      <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div class="flex items-center space-x-4">
              <a href="/users" class="text-gray-400 hover:text-gray-600">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
              <div>
                <h1 class="text-3xl font-bold text-gray-900">ユーザー編集</h1>
                <p class="text-sm text-gray-500">
                  ID: {user.id} | 最終ログイン: {user.lastLogin}
                </p>
              </div>
            </div>
            <div class="flex space-x-3">
              <button class="bg-red-600 border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                アカウント削除
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ユーザー情報サマリー */}
        <div class="bg-white shadow rounded-lg mb-8">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 h-16 w-16">
                <div class="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span class="text-xl font-medium text-indigo-700">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-medium text-gray-900">
                  {user.firstName} {user.lastName}
                </h3>
                <p class="text-sm text-gray-500">@{user.username}</p>
                <div class="mt-2 flex space-x-4">
                  <span
                    class={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-800"
                        : user.role === "editor"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {user.role === "admin"
                      ? "管理者"
                      : user.role === "editor"
                      ? "編集者"
                      : "一般ユーザー"}
                  </span>
                  <span
                    class={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status === "active" ? "アクティブ" : "停止中"}
                  </span>
                  {user.emailVerified && (
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      メール認証済み
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          action={`/users/${userId}/update`}
          method="post"
          class="space-y-8"
        >
          {/* 基本情報 */}
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                基本情報
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                ユーザーの基本的な情報を編集します。
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="username"
                    class="block text-sm font-medium text-gray-700"
                  >
                    ユーザー名 <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={user.username}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <p class="mt-1 text-sm text-gray-500">
                    半角英数字とアンダースコアのみ使用可能
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    メールアドレス <span class="text-red-500">*</span>
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={user.email}
                      class="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {!user.emailVerified && (
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm"
                      >
                        認証送信
                      </button>
                    )}
                  </div>
                  {!user.emailVerified && (
                    <p class="mt-1 text-sm text-red-600">
                      メールアドレスが未認証です
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="first_name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    姓
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={user.firstName}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="last_name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    名
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={user.lastName}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    class="block text-sm font-medium text-gray-700"
                  >
                    部署
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={user.department}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">選択してください</option>
                    <option value="engineering">エンジニアリング</option>
                    <option value="design">デザイン</option>
                    <option value="marketing">マーケティング</option>
                    <option value="sales">営業</option>
                    <option value="hr">人事</option>
                    <option value="finance">経理</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* アカウント設定 */}
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                アカウント設定
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                権限とアクセス設定を変更します。
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="role"
                    class="block text-sm font-medium text-gray-700"
                  >
                    権限 <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={user.role}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="admin">管理者</option>
                    <option value="editor">編集者</option>
                    <option value="user">一般ユーザー</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="status"
                    class="block text-sm font-medium text-gray-700"
                  >
                    アカウント状態 <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="status"
                    name="status"
                    required
                    value={user.status}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="active">アクティブ</option>
                    <option value="inactive">非アクティブ</option>
                    <option value="suspended">停止中</option>
                  </select>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="text-sm font-medium text-gray-900 mb-4">
                  セキュリティ設定
                </h4>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h5 class="text-sm font-medium text-gray-700">
                        二要素認証
                      </h5>
                      <p class="text-sm text-gray-500">
                        アカウントのセキュリティを強化します
                      </p>
                    </div>
                    <button
                      type="button"
                      class={`${
                        user.twoFactorEnabled ? "bg-indigo-600" : "bg-gray-200"
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                      <span
                        class={`${
                          user.twoFactorEnabled
                            ? "translate-x-5"
                            : "translate-x-0"
                        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </button>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <h5 class="text-sm font-medium text-gray-700">
                        パスワードリセット
                      </h5>
                      <p class="text-sm text-gray-500">
                        新しいパスワードをメールで送信
                      </p>
                    </div>
                    <button
                      type="button"
                      class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      リセット送信
                    </button>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <h5 class="text-sm font-medium text-gray-700">
                        ログインセッション
                      </h5>
                      <p class="text-sm text-gray-500">
                        すべてのデバイスからログアウト
                      </p>
                    </div>
                    <button
                      type="button"
                      class="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      セッション終了
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* アクティビティログ */}
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                最近のアクティビティ
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                ユーザーの最近の活動履歴です。
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">
              <div class="flow-root">
                <ul class="-mb-8">
                  <li class="relative pb-8">
                    <div class="relative flex space-x-3">
                      <div>
                        <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <svg
                            class="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p class="text-sm text-gray-500">ログインしました</p>
                        </div>
                        <div class="text-right text-sm whitespace-nowrap text-gray-500">
                          <time>2024/05/24 14:30</time>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="relative pb-8">
                    <div class="relative flex space-x-3">
                      <div>
                        <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <svg
                            class="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p class="text-sm text-gray-500">
                            プロフィールを更新しました
                          </p>
                        </div>
                        <div class="text-right text-sm whitespace-nowrap text-gray-500">
                          <time>2024/05/23 16:45</time>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="relative">
                    <div class="relative flex space-x-3">
                      <div>
                        <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                          <svg
                            class="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p class="text-sm text-gray-500">
                            アカウントが作成されました
                          </p>
                        </div>
                        <div class="text-right text-sm whitespace-nowrap text-gray-500">
                          <time>2024/01/15 10:20</time>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* アクションボタン */}
          <div class="flex justify-between">
            <div>
              <button
                type="button"
                class="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg
                  class="w-4 h-4 mr-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                アカウント削除
              </button>
            </div>
            <div class="flex space-x-3">
              <a
                href="/users"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                キャンセル
              </a>
              <button
                type="submit"
                class="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  class="w-4 h-4 mr-2 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                変更を保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});
