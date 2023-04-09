const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나만의 미니프로젝트 API 명세서",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // api-doc 문서 경로
};

export default options;
