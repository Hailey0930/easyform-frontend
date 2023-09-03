import { getSurveyPost } from "commons/api/create/getSurveyPost";
import * as S from "components/commons/layout/searchBar/SearchBar.styles";

export default function SearchBar() {
  const { mutate: createMutate } = getSurveyPost();

  const onClickCreateNew = () => {
    createMutate();
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchIcon>
          <S.SearchIconImage src="assets/header/icon_search.png" />
        </S.SearchIcon>
        <S.SearchInput type="search" placeholder="Search" />
      </S.SearchWrapper>
      <S.CreateButton onClick={onClickCreateNew}>Create New</S.CreateButton>
    </S.Wrapper>
  );
}
