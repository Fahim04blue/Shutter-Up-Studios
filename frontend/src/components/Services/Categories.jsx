import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import useAsync from 'Hooks/useAsync';
import React, { useCallback, useState } from 'react';
import CategoryService from 'services/CategoryService';
import CategoryNameSkeleton from 'skeletons/CategoryNameSkeleton';
import PricingTableSkeleton from 'skeletons/PricingTableSkeleton';
import theme from './CategoriesStyles';
import PricingTable from './PricingTable';

const Card = () => {
  const [value, setValue] = useState(0);
  const { data: category } = useAsync(CategoryService.getCategories);
  const getCategoryData = useCallback(
    () => CategoryService.getCategoryDataByName(category, value),
    [value]
  );
  const { data: categoryData, isLoading } = useAsync(getCategoryData);

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
              <>
                {data?.services?.map((service) => (
                  <div className="col-md-4">
                    <div className="card mb-5 mb-lg-0">
                      <PricingTable key={service._id} services={service} />
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        )}
      </TabContext>
    </ThemeProvider>
  );
};

export default Card;
