import Link from 'next/link';
import fetch from "isomorphic-unfetch";

const JobLink = ({ job }) => (
  <li>
    <Link href="/j/[title]" as={`/j/${job.slug}`}>
      <a>{job.title}</a>
    </Link>
  </li>
)

const Index = ({ data }) => (
  <div>
    <ul>
      { data.map(job => (<JobLink job={job} key={job.slug}/>)) }
    </ul>
    { data && (<pre>{JSON.stringify(data, null, 2)}</pre>)}
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.ORIGIN_API}api/jobs`);
  const data = await res.json();
  
  return { data };
}

export default Index;