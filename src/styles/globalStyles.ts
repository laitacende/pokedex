import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }  : {theme: any })=> theme.body};
        color: ${({ theme }  : {theme: any })=> theme.text};
    }
    
    .pokemon-list-element {
        background-color: ${({ theme }  : {theme: any })=> theme.card};
    }
    
    .modal-content {
        background-color: ${({ theme }  : {theme: any })=> theme.card};
        color: ${({ theme }  : {theme: any })=> theme.text};
    }
    
    .more-info span {
      color: ${({ theme }  : {theme: any })=> theme.icon};
    }
    
    .more-button {
      color: ${({ theme }  : {theme: any })=> theme.moreButton};
      border: ${({ theme }  : {theme: any })=> theme.moreButton} solid 3px;
    }
    
    .more-button:hover {
        background-color: ${({ theme }  : {theme: any })=> theme.moreButton};
        color: ${({ theme }  : {theme: any })=> theme.card};
    }
    
    .mode-toggle {
        color: ${({ theme }  : {theme: any })=> theme.toggle};
    }    
`;

export const lightTheme = {
    body: 'rgba(252, 252, 252, 0.99)',
    text: '#000',
    card: '#fff',
    icon: '#416CB0',
    moreButton: '#FF1616',
    toggle: '#c2c2c2'
};

export const darkTheme = {
  body: '#3f3f3f',
  text: '#fff',
  card: '#303030',
  icon: '#F8CC47',
    moreButton: '#F8CC47',
    toggle: '#888888'
};

