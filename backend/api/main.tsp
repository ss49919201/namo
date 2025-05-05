import "@typespec/http";
import "@typespec/rest";

using TypeSpec.Http;
using TypeSpec.Rest;

@service(#{
  title: "Namo API",
  version: "1.0.0"
})
namespace NamoAPI {

  // モデル定義
  model User {
    name: string;
  }

  // レスポンスモデル
  model HelloResponse {
    message: string;
  }

  model EchoResponse {
    content: string;
  }

  // エラーレスポンス
  model ErrorResponse {
    message: string;
    code: int32;
  }

  // APIエンドポイント
  @route("/hello")
  interface HelloOperations {
    @get
    getHello(): HelloResponse;
  }

  @route("/echo")
  interface EchoOperations {
    @post
    echo(@body content: string): EchoResponse;
  }

  @route("/users")
  interface UserOperations {
    @get
    listUsers(): User[];

    @post
    createUser(@body user: User): User;

    @get
    @route("{name}")
    getUser(@path name: string): User | ErrorResponse;
  }
}
