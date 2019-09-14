import Parser from 'rss-parser';
import slugify from 'slugify';

const WWRUrl = 'https://weworkremotely.com/categories/remote-programming-jobs.rss';
const SLUG_OPTIONS = {
  lower: true,
  remove: /[*+~#$%&|.,\/()`'"!:@\[\]]/g
};

const getImageURL = content => {
  if (content.includes('<img')) {
    const rawURL = content.match(/src\=([^\s]*)\s/)[1];
    return rawURL.replace(/"/g, '');
  }
  return ''
}

export default async (req, res) => {
  const parser = new Parser();
  const rawData = await parser.parseURL(WWRUrl);
  const data = rawData.items.map(job => ({
    title: job.title,
    imageUrl: getImageURL(job.content),
    slug: slugify(job.title, SLUG_OPTIONS)
  }));

  res.status(200).json(data);
}