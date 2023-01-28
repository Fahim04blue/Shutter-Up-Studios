import { Button } from 'react-bootstrap';

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;
  // console.log(pages - page);

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <Button
        key={idx + 1}
        onClick={() => changePage(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </Button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <Button
            key={startValue + idx + 1}
            onClick={() => changePage(startValue + idx + 1)}
            disabled={page === startValue + idx + 1}
          >
            {startValue + idx + 1}
          </Button>
        ))}
        <Button>...</Button>
        <Button onClick={() => changePage(pages)}>{pages}</Button>
      </>
    );

    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <Button onClick={() => changePage(1)}>1</Button>
            <Button>...</Button>
            <Button onClick={() => changePage(startValue)}>{startValue}</Button>
            {[...Array(5)].map((_, idx) => (
              <Button
                key={startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
                disabled={page === startValue + idx + 1}
                style={
                  pages < startValue + idx + 1 ? { display: 'none' } : null
                }
              >
                {startValue + idx + 1}
              </Button>
            ))}
          </>
        );
      } else {
        const amountLeft = pages - page + 5;
        middlePagination = (
          <>
            <Button onClick={() => changePage(1)}>1</Button>
            <Button>...</Button>
            <Button onClick={() => changePage(startValue)}>{startValue}</Button>
            {[...Array(amountLeft)].map((_, idx) => (
              <Button
                key={startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
                disabled={page === startValue + idx + 1}
                style={
                  pages < startValue + idx + 1 ? { display: 'none' } : null
                }
              >
                {startValue + idx + 1}
              </Button>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <div className="pagination">
        <Button
          className="pagination__prev"
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </Button>
        {middlePagination}
        <Button
          className="pagination__next"
          onClick={() => changePage((page) => page + 1)}
          disabled={page === pages}
        >
          &#187;
        </Button>
      </div>
    )
  );
};

export default Pagination;
