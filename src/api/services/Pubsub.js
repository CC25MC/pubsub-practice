import { request } from "../base";

export const getTopic = async () => {
	const res = await request.get("/api/pubsub");
	return res.data;
};

export const subscribe = async (payload) => {
	const res = await request.post("/api/pubsub/subscribe", payload);
	return res.data;
};

export const message = async (payload) => {
	const res = await request.post("/api/pubsub/message", payload);
	return res.data;
};

export const publish = async (payload) => {
	const res = await request.post("/api/pubsub/publish", payload);
	return res.data;
};

export const topic = async (payload) => {
	const res = await request.post("/api/pubsub/createTopic", payload);
	return res.data;
};