module.exports = ({ env }) => {
  return {
    app_name:env("NEW_RELIC_APP_NAME"),
    license_key: env("NEW_RELIC_LICENSE_KEY"),
    distributed_tracing: {
      enabled: true,
    },
    logging: {
      level: "info",
    },
    allow_all_headers: true,
    attributes: {
      exclude: [
        "request.headers.cookie",
        "request.headers.authorization",
        "request.headers.proxyAuthorization",
        "request.headers.setCookie*",
        "request.headers.x*",
        "response.headers.cookie",
        "response.headers.authorization",
        "response.headers.proxyAuthorization",
        "response.headers.setCookie*",
        "response.headers.x*",
      ],
    },
  };
};
