import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import useAsync from 'Hooks/useAsync';
import { useCallback, useState } from 'react';
import CategoryService from 'services/CategoryService';
import ProductService from 'services/ProductService';
import CategoryNameSkeleton from 'skeletons/CategoryNameSkeleton';
import PricingTableSkeleton from 'skeletons/PricingTableSkeleton';
import theme from './CategoriesStyles';
import PricingTable from './PricingTable';

const Card = ({ sort }) => {
  const [value, setValue] = useState(0);
  const { data: category } = useAsync(CategoryService.getCategories);
  const getCategoryData = useCallback(
    () => ProductService.getServiceDataByCategory(category, value, sort),
    [value, sort]
  );
  const { data: categoryData, isLoading } = useAsync(getCategoryData);
  // console.log(categoryData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {isLoading && <CategoryNameSkeleton />}
          {!isLoading && (
            <TabList onChange={handleChange}>
              {category?.map((cat, index) => (
                <Tab label={cat.name} value={index} />
              ))}
            </TabList>
          )}
        </Box>
        {isLoading && <PricingTableSkeleton />}

        {!isLoading && (
          <div className="row g-5">
            {categoryData?.map((data) => (
              <div className="col-md-4">
                <div className="product-card mb-5 mb-lg-0">
                  <PricingTable key={data._id} services={data} />
                </div>
              </div>
            ))}
          </div>
        )}
      </TabContext>
    </ThemeProvider>
  );
};

export default Card;
