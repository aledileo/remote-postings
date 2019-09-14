import fetch from "isomorphic-unfetch";
import Item from '../components/Item';
import indexStyles from './indexStyles';
import Header from '../components/Header';

const Index = ({ data }) => {
  return (
    <div>
      <style jsx global>{indexStyles}</style>
      <Header />
      <ul>
        { data.map(job => (<Item job={job} key={job.slug}/>)) }
      </ul>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.ORIGIN_API}/api/jobs`);
  const data = await res.json();
  
  return { data };
}

export default Index;