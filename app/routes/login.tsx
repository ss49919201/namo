import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <title>ログイン</title>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="/login" method="post">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" class="sr-only">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="メールアドレス"
              />
            </div>
            <div>
              <label htmlFor="password" class="sr-only">
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="パスワード"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                class="ml-2 block text-sm text-gray-900"
              >
                ログイン状態を保持
              </label>
            </div>

            <div class="text-sm">
              <a
                href="/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                パスワードを忘れた方
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ログイン
            </button>
          </div>

          <div class="text-center">
            <span class="text-sm text-gray-600">
              アカウントをお持ちでない方は{" "}
              <a
                href="/register"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                新規登録
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
});
