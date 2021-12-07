import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ServiceTableSkeleton = () => (
  <>
    {Array(8)
      .fill('')
      ?.map((service, idx) => (
        <tr key={idx}>
          <td>
            <Skeleton height={50} width={60} />
          </td>
          <td>
            <Skeleton height={40} width={130} />
          </td>
          <td>
            <Skeleton height={40} width={100} />
          </td>
          <td>
            <Skeleton height={40} width={130} />
          </td>
          <td>
            <Skeleton height={30} width={60} />
          </td>
        </tr>
      ))}
  </>
);

export default ServiceTableSkeleton;
