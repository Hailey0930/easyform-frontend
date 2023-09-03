import * as S from "./Login.styles";
import { useRouter } from "next/router";

declare global {
  interface Window {
    naver: any;
  }
}

export default function Login() {
  const router = useRouter();

  const KakaoLogin = () => {
    if (window !== undefined)
      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL_API}/auth/kakao`;
  };

  const NaverLogin = () => {
    if (window !== undefined)
      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL_API}/auth/naver`;
  };

  const GoogleLogin = () => {
    if (window !== undefined)
      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL_API}/auth/google`;
  };

  return (
    <S.Wrapper>
      <S.Title />
      <S.Contents>
        지금 로그인하고 설문지를 작성해보세요.
        <br />
        팀원들의 가입 없이 같이 편리하게 작성할 수 있습니다.
      </S.Contents>
      <S.LoginButtonWrapper>
        <S.KaKaoLoginButton onClick={KakaoLogin}>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_kakao.png" />
          </S.LogoIconWrapper>
          카카오 로그인
        </S.KaKaoLoginButton>
        <S.NaverLoginButton onClick={NaverLogin}>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_naver.png" />
          </S.LogoIconWrapper>
          네이버 로그인
        </S.NaverLoginButton>
        <S.GoogleLoginButton onClick={GoogleLogin}>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_google.png" />
          </S.LogoIconWrapper>
          Google 로그인
        </S.GoogleLoginButton>
      </S.LoginButtonWrapper>
      <S.BottomContents>
        로그인은 <S.UnderlineText>개인 정보 처리 방침</S.UnderlineText> 및{" "}
        <S.UnderlineText>서비스 이용약관</S.UnderlineText>에 동의하는 것을
        의미하며,
        <br />
        서비스 이용을 위해 이메일을 수집합니다.
      </S.BottomContents>
    </S.Wrapper>
  );
}
