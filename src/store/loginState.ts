import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  default: { isLogin: false, accessToken: "", refreshToken: "" },
  effects_UNSTABLE: [persistAtom],
});
