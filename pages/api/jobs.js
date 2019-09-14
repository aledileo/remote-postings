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

const formatTitle = title => title.split(':', 2)[1].trim();
const getCompany = title => title.split(':')[0];

export default async (req, res) => {
  const parser = new Parser();
  const rawData = await parser.parseURL(WWRUrl);
  const data = rawData.items.map(({title, content}) => ({
    title: formatTitle(title),
    imageUrl: getImageURL(content),
    company: getCompany(title),
    slug: slugify(title, SLUG_OPTIONS)
  }));

  res.status(200).json(data);
}