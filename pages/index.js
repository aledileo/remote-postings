import Link from 'next/link';
import Parser from 'rss-parser';

const WWRUrl = 'https://weworkremotely.com/categories/remote-programming-jobs.rss';

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

Index.getInitialProps = async () => {
  const parser = new Parser();
  const data = await parser.parseURL(WWRUrl);
  return { data };
}

export default Index;