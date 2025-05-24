import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class="min-h-screen bg-gray-50">
      <title>新規ユーザー追加</title>

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
              <h1 class="text-3xl font-bold text-gray-900">新規ユーザー追加</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form action="/users/create" method="post" class="space-y-8">
          {/* 基本情報 */}
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                基本情報
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                ユーザーの基本的な情報を入力してください。
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="yamada_taro"
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
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="yamada@example.com"
                  />
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="山田"
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="太郎"
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="090-1234-5678"
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
                権限とアクセス設定を行います。
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">権限を選択</option>
                    <option value="admin">管理者</option>
                    <option value="editor">編集者</option>
                    <option value="user">一般ユーザー</option>
                  </select>
                  <div class="mt-2 text-sm text-gray-500">
                    <ul class="list-disc pl-5 space-y-1">
                      <li>
                        <strong>管理者:</strong> すべての機能にアクセス可能
                      </li>
                      <li>
                        <strong>編集者:</strong> コンテンツの作成・編集が可能
                      </li>
                      <li>
                        <strong>一般ユーザー:</strong> 閲覧のみ
                      </li>
                    </ul>
                  </div>
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
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="active">アクティブ</option>
                    <option value="inactive">非アクティブ</option>
                    <option value="suspended">停止中</option>
                  </select>
                </div>
              </div>

              <div class="mt-6">
                <fieldset>
                  <legend class="block text-sm font-medium text-gray-700 mb-3">
                    パスワード設定
                  </legend>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="generate_password"
                          name="password_option"
                          type="radio"
                          value="generate"
                          checked
                          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                      </div>
                      <div class="ml-3">
                        <label
                          htmlFor="generate_password"
                          class="text-sm font-medium text-gray-700"
                        >
                          自動生成したパスワードをメールで送信
                        </label>
                        <p class="text-sm text-gray-500">
                          ランダムなパスワードを生成し、ユーザーにメールで通知します。
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="manual_password"
                          name="password_option"
                          type="radio"
                          value="manual"
                          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                      </div>
                      <div class="ml-3">
                        <label
                          htmlFor="manual_password"
                          class="text-sm font-medium text-gray-700"
                        >
                          パスワードを手動で設定
                        </label>
                        <div class="mt-2 space-y-2">
                          <input
                            type="password"
                            name="password"
                            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="パスワード（8文字以上）"
                            minLength={8}
                          />
                          <input
                            type="password"
                            name="password_confirm"
                            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="パスワード確認"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* 通知設定 */}
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                通知設定
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                ユーザーへの通知設定を行います。
              </p>
            </div>
            <div class="px-4 py-5 sm:p-6">
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="send_welcome_email"
                      name="send_welcome_email"
                      type="checkbox"
                      checked
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3">
                    <label
                      htmlFor="send_welcome_email"
                      class="text-sm font-medium text-gray-700"
                    >
                      ウェルカムメールを送信
                    </label>
                    <p class="text-sm text-gray-500">
                      アカウント作成完了をユーザーにメールで通知します。
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="require_email_verification"
                      name="require_email_verification"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3">
                    <label
                      htmlFor="require_email_verification"
                      class="text-sm font-medium text-gray-700"
                    >
                      メールアドレス認証を必須にする
                    </label>
                    <p class="text-sm text-gray-500">
                      ユーザーがログインする前にメールアドレスの認証を求めます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* アクションボタン */}
          <div class="flex justify-end space-x-3">
            <a
              href="/users"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              キャンセル
            </a>
            <button
              type="button"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              下書き保存
            </button>
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              ユーザーを追加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
