package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	api "github.com/ss499291092/namo/backend/generated"
	"github.com/syumai/workers"
)

// APIServer implements the ServerInterface
type APIServer struct{}

// UserOperationsListUsers implements the list users endpoint
func (s *APIServer) UserOperationsListUsers(ctx echo.Context) error {
	// ここではダミーデータを返します
	users := []api.User{
		{Id: 1, Name: "user1"},
		{Id: 2, Name: "user2"},
	}

	return ctx.JSON(http.StatusOK, users)
}

// UserOperationsCreateUser implements the create user endpoint
func (s *APIServer) UserOperationsCreateUser(ctx echo.Context) error {
	var user api.User
	if err := ctx.Bind(&user); err != nil {
		return err
	}

	// ここでは単純にリクエストされたユーザーをそのまま返します
	return ctx.JSON(http.StatusOK, user)
}

// UserOperationsGetUser implements the get user endpoint
func (s *APIServer) UserOperationsGetUser(ctx echo.Context, id int64) error {
	// ここでは単純に指定された名前のユーザーを返します
	user := api.User{
		Id:   id,
		Name: "name",
	}

	return ctx.JSON(http.StatusOK, user)
}

func main() {
	// Echoインスタンスを作成
	e := echo.New()

	// APIサーバーを作成
	server := &APIServer{}

	// ハンドラを登録
	api.RegisterHandlers(e, server)

	// Cloudflare Workersと統合
	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		e.ServeHTTP(w, req)
	})

	workers.Serve(nil) // use http.DefaultServeMux
}
