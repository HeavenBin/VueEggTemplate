import http from "./http";

export const getUser = () => http("get", "api/v1/user");
export const createUser = param => http("post", "api/v1/user", param)
export const showUser = id => http('get',`api/v1/user/${id}`)
export const putUser = (id,param) => http('put',`api/v1/user/${id}`,param)
export const deleteUser = id => http('delete',`api/v1/user/${id}`)

// export const exampleGet = param => http.get("/api/v1/index", {param});
// export const examplePost = date => http.post("/api/v1/index", date);
