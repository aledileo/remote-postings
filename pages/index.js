import fetch from "isomorphic-unfetch";
import Item from '../components/Item';
import theme from '../theme';

const Index = ({ data }) => (
  <div>
    <ul>
      { data.map(job => (<Item job={job} key={job.slug}/>)) }
    </ul>
    { data && (<pre>{JSON.stringify(data, null, 2)}</pre>)}
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
      
      ul {
        margin: 0px;
        padding: 0px;
      }

      body {
        font-family: 'Roboto', sans-serif;
        background-color: ${theme.primary.background}
      }  
    `}</style>
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.ORIGIN_API}/api/jobs`);
  const data = await res.json();
  
  return { data };
}

export default Index;