import { request } from "./base";
import { User, PubSub } from "./services";

request.user = User;
request.pubsub = PubSub;

export { request };
