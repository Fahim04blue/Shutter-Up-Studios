import Categories from 'components/Services/Categories';
import MetaData from 'components/common/MetaData';
import { useState } from 'react';

const Services = () => {
  const [sort, setSort] = useState('');

  const handleSort = (e) => {
    setSort(e.target.value);
    // console.log(sort);
  };
  return (
    <section
      style={{ paddingTop: '5%', paddingBottom: '5%' }}
      className="pricing"
    >
      <MetaData title="Services" />
      <h1 className="top__heading">Our Packages</h1>
      <div className="container">
        <div className="text-end">
          <span>Sort By: </span>
          <select value={sort} onChange={handleSort}>
            <option value="">Default</option>
            <option value="sort=price">Price (Low &gt; High)</option>
            <option value="sort=-price">Price (High &gt; Low)</option>
          </select>
        </div>
        <Categories sort={sort} />
      </div>
    </section>
  );
};

export default Services;
