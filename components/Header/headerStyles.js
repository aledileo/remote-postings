import css from 'styled-jsx/css';

export default css.global`
  h1 {
    font-size: 1em;
    margin: 8px;
  }

  .toggle {
    margin: 16px;
  }

  header {
    height: 48px;
    border-bottom: 1px solid var(--accents-6);
    color: var(--geist-foreground);
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-items: center;
    background-color: var(--geist-background);
  }
`;