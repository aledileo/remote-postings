import Link from 'next/link';
import fetch from "isomorphic-unfetch";

const JobLink = ({ job }) => (
  <li>
    <Link href="/j/[title]" as={`/j/${job.title}`}>
      <a>{job.title}</a>
    </Link>
  </li>
)

const Index = ({ data }) => (
  <div>
    <ul>
      { data.items.map(job => (<JobLink job={job} key={job.guid}/>)) }
    </ul>
    { data && (<pre>{JSON.stringify(data, null, 2)}</pre>)}
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const origin = req.headers.referer
  const res = await fetch(`${origin}api/jobs`);
  const data = await res.json();
  
  return { data };
}

export default Index;