import "@typespec/http";

using Http;

@service(#{ title: "namo" })
namespace Namo;

model Administrator {
  id: string;
  name: string;
  status: "active" | "inactive";
}

model AdministratorList {
  items: Administrator[];
}

@error
model Error {
  code: int32;
  message: string;
}

model AnalyzeResult {
  id: string;
  analysis: string;
}

@route("/api")
namespace API {
  @route("/administrators")
  @tag("Administrator")
  namespace Administrators {
    @get op list(): Administrator | Error;
    @get op read(@path id: string): Administrator | Error;
    @post op create(@body body: Administrator): Administrator | Error;
    @patch op update(
      @path id: string,
      @body body: MergePatchUpdate<Administrator>,
    ): Administrator | Error;
    @delete op delete(@path id: string): void | Error;
  }

  @route("/healthcheck")
  @tag("Healthcheck")
  namespace Healthcheck {
    @get op read(): {
      @statusCode statusCode: 204;
    };
  }
}
