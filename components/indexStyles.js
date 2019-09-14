import theme from '../theme';
import css from 'styled-jsx/css';

export default css.global`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body.light-mode {
    --geist-foreground: ${theme.primary.background};
    --geist-background: ${theme.primary.foreground};
    --accents-6: ${theme.primary.accent2};
    --accents-7: ${theme.primary.accent1};
  }

  body.dark-mode {
    --geist-foreground: ${theme.primary.foreground};
    --geist-background: ${theme.primary.background};
    --accents-6: ${theme.primary.accent6};        
    --accents-7: ${theme.primary.accent7};
  }

  ul {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    --geist-success: ${theme.success.default};
    --geist-alert: ${theme.highlight.alert};
    font-family: 'Roboto', sans-serif;
    background-color: var(--geist-background);
    margin: 0px;
  }  

`;