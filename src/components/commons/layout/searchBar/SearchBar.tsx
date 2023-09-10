import { getSurveyPost } from "commons/api/create/getSurveyPost";
import * as S from "components/commons/layout/searchBar/SearchBar.styles";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loginState } from "store/loginState";

export default function SearchBar() {
  const login = useRecoilValue(loginState);

  const router = useRouter();

  const { mutate: createMutate } = getSurveyPost();

  const onClickCreateNew = () => {
    if (login.isLogin) createMutate();
    else if (!login.isLogin) router.push("/create");
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchIcon>
          <S.SearchIconImage src="/assets/header/icon_search.png" />
        </S.SearchIcon>
        <S.SearchInput type="search" placeholder="Search" />
      </S.SearchWrapper>
      <S.CreateButton onClick={onClickCreateNew}>Create New</S.CreateButton>
    </S.Wrapper>
  );
}
