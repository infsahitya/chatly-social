const HTTP = {
  POST: <ResponseType>(
    url: string,
    requestConfig: RequestInit & { method?: "POST" },
  ): Promise<ResponseType> => {
    requestConfig.method = "POST";
    requestConfig.mode = "cors";
    return fetch(url, requestConfig)
      .then((fetchedData) => fetchedData.json())
      .then((parsedData) => parsedData as ResponseType);
  },
  PUT: <ResponseType>(
    url: string,
    requestConfig: RequestInit & { method?: "PUT" },
  ): Promise<ResponseType> => {
    requestConfig.method = "PUT";
    requestConfig.mode = "cors";
    return fetch(url, requestConfig)
      .then((fetchedData) => fetchedData.json())
      .then((parsedData) => parsedData as ResponseType);
  },
  GET: <ResponseType>(
    url: string,
    requestConfig?: RequestInit & { method?: "GET" },
  ): Promise<ResponseType> => {
    if (typeof requestConfig === "undefined") {
      requestConfig = {};
    }
    requestConfig.method = "GET";
    requestConfig.mode = "cors";
    return fetch(url, requestConfig)
      .then((fetchedData) => fetchedData.json())
      .then((parsedData) => parsedData as ResponseType);
  },
  DELETE: <ResponseType>(
    url: string,
    requestConfig: RequestInit & { method?: "DELETE" },
  ): Promise<ResponseType> => {
    requestConfig.method = "DELETE";
    requestConfig.mode = "cors";
    return fetch(url, requestConfig)
      .then((fetchedData) => fetchedData.json())
      .then((parsedData) => parsedData as ResponseType);
  },
};

export default HTTP;
