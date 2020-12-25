import http from "./http";

export const getUser = () => http("get", "api/v1/user");
export const createUser = param => http("post", "api/v1/user", param);



// export const exampleGet = param => http.get("/api/v1/index", {param});
// export const examplePost = date => http.post("/api/v1/index", date);
