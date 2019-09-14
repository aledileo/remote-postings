import Link from 'next/link';
import theme from '../theme';
const Item = ({ job }) => {
  return (
    <>
          <Link href="/j/[title]" as={`/j/${job.slug}`}>
      <li>
        <div>
            <a>{job.title}</a>
          <span>{job.company}</span>
        </div>
        <img src={job.imageUrl} alt={`${job.company} logo`} />
      </li>
          </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          cursor: pointer;
          color: ${theme.success.light}
        }

        span {
          display: block;
          color: ${theme.primary.accent3}
        }

        li {
          background-color: ${theme.primary.accent7};
          display: flex;
          justify-content: space-between;
          height: 100px;
          margin: 16px 4px;
        }

        img {
          margin: 8px;
          align-self: center;
          object-fit: scale-down;
          height: 60px;
          width: 60px;
          background-color: ${theme.primary.foreground};
          border-radius: 50%
        } 

        div {
          padding: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default Item
