import Link from 'next/link';
import theme from '../theme';

const Item = ({ job }) => {
  return (
    <>
      <Link href="/j/[title]" as={`/j/${job.slug}`}>
        <li>
          <div>
            <h3>{job.title}</h3>
            <span>{job.company}</span>
          </div>
          <img src={job.imageUrl} alt={`${job.company} logo`} />
        </li>
      </Link>
      <style jsx>{`
        h3 {
          text-decoration: none;
          cursor: pointer;
          color: var(--geist-alert);
          font-size: 1em;
        }

        span {
          display: block;
          color: ${theme.primary.accent3};
        }

        li {
          background-color: var(--accents-7);
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
          border-radius: 50%;
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
