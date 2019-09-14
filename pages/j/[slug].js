import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Header from '../../components/Header';
import theme from '../../theme';

const Job = (props) => {
  return (
    <>
      <Header />
      <div className="posting">
        <h2>{props.data.title}</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.content}}/>
        <a href={props.data.link}>Click here to see this posting in WeWorkRemotely!</a>

        <style jsx global>{`
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
          
          body {
            --geist-success: ${theme.success.default};
            --geist-alert: ${theme.highlight.alert};

            font-family: 'Roboto', sans-serif;
            background-color: var(--geist-background);
            margin: 0px;
          }  

          .posting {
            max-width: 98vw;
            padding: 16px;
            color: var(--geist-foreground);
          }

          a {
            color: var(--geist-success);
            text-decoration: none;
            cursor: pointer:
          }

          h2 {
            text-align: center;
          }

          img {
            display: block;
            background-color: #FFF;
            border-radius: 50%;
            margin: 1.5em auto;
          }

          strong {
            color: var(--geist-alert);
          }
      `}</style>
      </div>
    </>
  )
}

Job.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.ORIGIN_API}/api/job/${query.slug}`);
  const data = await res.json();
  
  return { data };
}


export default Job;