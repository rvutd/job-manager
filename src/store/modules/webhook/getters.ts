import { GetterTree } from "vuex";
import RootState from "@/store/RootState";
import WebhooksState from "./WebhooksState";

const getters: GetterTree<WebhooksState, RootState> = {
  getCachedWebhook: (state) => state.cached
}

export default getters