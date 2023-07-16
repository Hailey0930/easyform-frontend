export interface IGetUserInfo {
  ci: string;
  createdAt: Date;
  email: string;
  nickname: string;
  regSocialPlatform: "google" | "naver" | "kakao";
  updatedAt: Date;
}
