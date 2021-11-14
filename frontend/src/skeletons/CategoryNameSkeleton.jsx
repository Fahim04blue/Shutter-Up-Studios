import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryNameSkeleton = () => (
  <div className="d-flex pb-2 ">
    <Skeleton style={{ borderRadius: 5 }} height={40} width={170} />
    <Skeleton
      style={{ borderRadius: 5, marginLeft: 5 }}
      height={40}
      width={170}
    />
  </div>
);

export default CategoryNameSkeleton;
