import "@typespec/http";
import "@typespec/rest";

using TypeSpec.Http;

@service(#{ title: "Namo API", version: "1.0.0" })
namespace NamoAPI {
  // モデル定義
  model User {
    id: int64;
    name: string;
  }

  // エラーレスポンス
  model ErrorResponse {
    message: string;
    code: int32;
  }

  @route("/users")
  interface UserOperations {
    @get
    listUsers(): User[] | ErrorResponse;

    @post
    createUser(
      @body user: {
        name: string;
      },
    ): User;

    @get
    @route("{id}")
    getUser(@path id: int64): User | ErrorResponse;
  }
}
