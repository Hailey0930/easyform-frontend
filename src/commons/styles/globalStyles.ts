import { css } from "@emotion/react";

export const globalStyles = css`
  // prettier-ignore
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
}

  // prettier-ignore
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    width: 100%;
    height: 100%;
    min-width: 360px;
  }

  html {
    font-size: 62.5%;
    font-family: "PretendardRegular";
  }

  input,
  textArea {
    font-family: inherit;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-ms-overflow-style {
    scrollbar-width: none;
  }
`;
