import { useRouter } from "next/router";
import * as S from "./Home.styles";
import { useRecoilValue } from "recoil";
import { loginState } from "store/loginState";
import { useEffect } from "react";

export default function Home() {
  const isLogin = useRecoilValue(loginState);

  const router = useRouter();

  useEffect(() => {
    if (isLogin) router.replace("/main");
  }, [isLogin]);

  const onClickCloseModal = () => {
    router.push("/main");
  };

  const onClickMoveToCreate = () => {
    router.push("/create");
  };

  return (
    <S.Wrapper>
      <S.ModalContainer>
        <S.ModalCloseContainer>
          <S.ModalCloseButton onClick={onClickCloseModal} />
        </S.ModalCloseContainer>
        <S.ContentsContainer>
          <S.ContentsTitle>혼자 설문지 종합하기 힘드셨나요?</S.ContentsTitle>
          <S.ContentsBoldTitle>
            링크 공유 하나로 팀원들의 가입 없이
          </S.ContentsBoldTitle>
          <S.ContentsTitle>
            함께 작성하고 관리하세요. <S.FireIcon />
          </S.ContentsTitle>
        </S.ContentsContainer>
        <S.HomeImageWrapper>
          <S.HomeImage src="/assets/img_home_modal.png" />
        </S.HomeImageWrapper>
      </S.ModalContainer>
    </S.Wrapper>
  );
}
