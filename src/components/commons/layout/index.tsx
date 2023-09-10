import { ReactNode } from "react";
import Header from "./header/Header";
import styled from "@emotion/styled";
import SearchBar from "./searchBar/SearchBar";
import MBWriteButton from "./MBWriteButton";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import MenuBar from "./menuBar/MenuBar";

interface ILayoutProps {
  children: ReactNode;
}

const CREATE_PAGE = "/create";
const RESULT_PAGE = "/result";
const LOGIN_PAGE = "/login";

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const loginPage = router.asPath.includes(LOGIN_PAGE);
  const createPage = router.asPath.includes(CREATE_PAGE);
  const resultPage = router.asPath.includes(RESULT_PAGE);

  return (
    <>
      {loginPage ? (
        <SearchBarBodyWrapper>{props.children}</SearchBarBodyWrapper>
      ) : (
        <>
          <Header />
          <SearchBarBodyWrapper>
            {createPage || resultPage ? <MenuBar /> : <SearchBar />}
            {props.children}
          </SearchBarBodyWrapper>
          <MBWriteButton />
        </>
      )}
    </>
  );
}

const SearchBarBodyWrapper = styled.div`
  padding: 0 12.5vw;

  ${setTabletStyle(css`
    padding: 0;
  `)}

  ${setMobileStyle(css`
    padding: 0;
  `)}
`;
