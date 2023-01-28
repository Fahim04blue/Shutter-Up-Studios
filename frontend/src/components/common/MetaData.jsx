import { Helmet } from 'react-helmet-async';

const MetaData = ({ title }) => {
  const defaultTitle = 'Shutter UP Studios';
  const defaultSep = '|';
  return (
    <Helmet>
      <title>
        {title ? `${title} ${defaultSep} ${defaultTitle}` : defaultTitle}
      </title>
    </Helmet>
  );
};
export default MetaData;
