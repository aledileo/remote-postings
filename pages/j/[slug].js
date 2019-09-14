import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Job = (props) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <div dangerouslySetInnerHTML={{__html: props.data.content}}/>
      <div>{props.data.contentSnippet}</div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        body {
          font-family: 'Roboto', sans-serif;
        }  
    `}</style>
    </div>
  )
}

Job.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.ORIGIN_API}/api/job/${query.slug}`);
  const data = await res.json();
  
  return { data };
}


export default Job;