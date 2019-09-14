import Parser from 'rss-parser';

const WWRUrl = 'https://weworkremotely.com/categories/remote-programming-jobs.rss';

export default async (req, res) => {
  const parser = new Parser();
  const data = await parser.parseURL(WWRUrl);

  res.status(200).json(data);
}