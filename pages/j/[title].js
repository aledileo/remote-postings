import { useRouter } from 'next/router';

const Job = (props) => {
  const router = useRouter();
  console.log({ props })
  return (
    <div>
      {router.query.title}
    </div>
  )
}

export default Job;