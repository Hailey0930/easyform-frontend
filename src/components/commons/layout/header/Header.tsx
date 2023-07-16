import { getUserInfo } from "commons/api/getUserInfo";
import { useCookie } from "commons/utils/cookie";
import modalClose from "commons/utils/modalClose";
import * as S from "components/commons/layout/header/Header.styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "store/loginState";

export default function Header() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isDisplayProfile, setIsDisplayProfile] = useState(false);
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);

  const outSide = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { data: userInfo } = getUserInfo();

  useEffect(() => {
    modalClose(isDisplayProfile, setIsDisplayProfile, outSide);
  }, [isDisplayProfile]);

  useEffect(() => {
    if (useCookie.getCookie("access-token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

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
    useCookie.removeCookie("access-token");
    setIsDisplayProfile(false);
    setIsLogin(false);
    router.replace("/");
  };

  return (
    <div>
      <S.PCTBWrapper>
        <S.LogoContainer onClick={onClickLogo}>
          <S.LogoImage src="/assets/header/logo.png" />
        </S.LogoContainer>

        {isLogin ? (
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
          isLogin ? (
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
  );
}
