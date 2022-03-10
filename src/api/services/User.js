import { request } from "../base";

export const signUp = async (payload) => {
	const res = await request.post("/api/users", payload);
	return res.data;
};

export const signIn = async (payload) => {
	const res = await request.post("/api/auth/login", payload);
	return res.data;
};

export const getUsers = async () => {
    const res = await request.get("/api/user");
    return res.data;
};
