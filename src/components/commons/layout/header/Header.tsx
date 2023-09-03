import { getUserInfo } from "commons/api/getUserInfo";
import modalClose from "commons/utils/modalClose";
import * as S from "components/commons/layout/header/Header.styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { loginState } from "store/loginState";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [login, setLogin] = useRecoilState(loginState);
  const resetLogin = useResetRecoilState(loginState);
  const [isDisplayProfile, setIsDisplayProfile] = useState(false);
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);

  const outSide = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { data: userInfo } = getUserInfo();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (router.asPath.includes("=")) {
      const extractTokenFromURL = (url: string) => {
        const accessTokenMatch = url.match(/accessToken=([^&]+)/);
        const accessToken = accessTokenMatch ? accessTokenMatch[1] : null;

        const refreshTokenMatch = url.match(/refreshToken=([^&]+)/);
        const refreshToken = refreshTokenMatch ? refreshTokenMatch[1] : null;

        return { accessToken, refreshToken };
      };

      const { accessToken, refreshToken } = extractTokenFromURL(router.asPath);
      setLogin({
        isLogin: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });

      router.replace("/");
    }
  }, [login]);

  useEffect(() => {
    modalClose(isDisplayProfile, setIsDisplayProfile, outSide);
  }, [isDisplayProfile]);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLoginButton = () => {
    router.replace("/login");
  };

  const onClickProfileButton = () => {
    setIsDisplayProfile(!isDisplayProfile);
  };

  const onClickEmail = () => {
    router.push("/profile");
    setIsDisplayProfile(!isDisplayProfile);
  };

  const onClickSearchIcon = () => {
    setIsDisplaySearch(true);
  };

  const onClickBackIcon = () => {
    setIsDisplaySearch(false);
  };

  const onClickLogOut = () => {
    resetLogin();
    setIsDisplayProfile(false);
    router.replace("/");
  };

  return mounted ? (
    <div>
      <S.PCTBWrapper>
        <S.LogoContainer onClick={onClickLogo}>
          <S.LogoImage src="/assets/header/logo.png" />
        </S.LogoContainer>
        <div>{userInfo?.email}</div>

        {login.isLogin ? (
          <S.PCTBRightContainer>
            <S.AlertSearchIcon>
              <S.AlertSearchIconImage src="/assets/header/icon_alert.png" />
            </S.AlertSearchIcon>
            <S.ProfileContainer ref={outSide}>
              <S.ProfileImage />
              <S.ProfileButtonIcon
                onClick={onClickProfileButton}
                isDisplayProfile={isDisplayProfile}
              ></S.ProfileButtonIcon>
            </S.ProfileContainer>
          </S.PCTBRightContainer>
        ) : (
          <S.LoginButton onClick={onClickLoginButton}>Log In</S.LoginButton>
        )}

        <S.ProfileModal isDisplayProfile={isDisplayProfile}>
          <S.ModalTitle>Account</S.ModalTitle>
          <S.EmailWrapper onClick={onClickEmail}>
            <S.ModalIcon>
              <S.ModalIconImage src="/assets/header/icon_modal_email.png" />
            </S.ModalIcon>
            <S.EmailInfo>{userInfo?.email}</S.EmailInfo>
          </S.EmailWrapper>
          <S.BorderLine />
          <S.LogoutWrapper onClick={onClickLogOut}>
            <S.ModalIcon>
              <S.ModalIconImage src="/assets/header/icon_modal_logout.png" />
            </S.ModalIcon>
            <S.Logout>Log out</S.Logout>
          </S.LogoutWrapper>
        </S.ProfileModal>
      </S.PCTBWrapper>

      <S.MBWrapper>
        {!isDisplaySearch ? (
          login.isLogin ? (
            <>
              <S.LogoContainer onClick={onClickLogo}>
                <S.LogoImage src="/assets/header/logo.png" />
              </S.LogoContainer>
              <S.MBRightContainer>
                <S.AlertSearchIcon onClick={onClickSearchIcon}>
                  <S.AlertSearchIconImage src="/assets/header/icon_search.png" />
                </S.AlertSearchIcon>
                <S.HamburgerIcon>
                  <S.HamburgerIconImage src="/assets/header/icon_hamburger.png" />
                </S.HamburgerIcon>
              </S.MBRightContainer>
            </>
          ) : (
            <>
              <S.LogoContainer onClick={onClickLogo}>
                <S.LogoImage src="/assets/header/logo.png" />
              </S.LogoContainer>
              <S.LoginButton onClick={onClickLoginButton}>Log In</S.LoginButton>
            </>
          )
        ) : (
          <S.MBSearchContainer>
            <S.BackIconContainer onClick={onClickBackIcon}>
              <S.BackIconImage src="/assets/header/icon_back_mb.png" />
            </S.BackIconContainer>
            <S.SearchWrapper>
              <S.SearchIcon>
                <S.SearchIconImage src="/assets/header/icon_search.png" />
              </S.SearchIcon>
              <S.SearchInput type="search" placeholder="Search" />
            </S.SearchWrapper>
          </S.MBSearchContainer>
        )}
      </S.MBWrapper>
    </div>
  ) : (
    <></>
  );
}
