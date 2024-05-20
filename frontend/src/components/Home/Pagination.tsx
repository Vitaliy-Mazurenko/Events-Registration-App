import React, { useEffect, useState } from "react";
import './pagination.css';

interface childrenProps {
  arrOfPages: number[],
  lastPage: number,
  currentPage: number,
  paginate: (page: number) => void,
}


export const Pagination: React.FC<childrenProps> = ({arrOfPages, lastPage, currentPage, paginate}): JSX.Element => {

  const prevPageHandler = () => {
    if(currentPage !== 1) {
       paginate(currentPage - 1)}    
  }
  const nextPageHandler = () => {
    if(currentPage !== lastPage) {
       paginate(currentPage + 1)}    
  }

  const [arrOfCcurrentPage, setArrOfCurrentPage] = useState<Array<number>>([])

  useEffect (() => {
    let temparrOfPages: number[] = [...arrOfPages];
    temparrOfPages = [...temparrOfPages.slice(0, 4), lastPage];
    if(currentPage === 3){
      temparrOfPages = [2, 3, 4, 5, lastPage];
    }
    if(currentPage === 4 || currentPage === 5){
      temparrOfPages = [3, 4, 5, 6, lastPage];
    }
    if(currentPage > 5 ){
      temparrOfPages = [1, 2, 5, 6, lastPage];
    }
    setArrOfCurrentPage(temparrOfPages);

  },[currentPage, arrOfPages, lastPage]);

  const active = {
    fontSize: "19px",
    margin: "3px"
  }

  return (
    <div className='Wrapper'>
        <ul className='PaginationUl'>
        <li className='PrevPage' onClick={prevPageHandler}><a>&larr;</a></li>
          {           
            arrOfCcurrentPage.map((page, index) => (
              <li style = {currentPage === page ? active : undefined} className={`PaginationLi ${currentPage === page ? 'active' : ''}`} key={index}>
                <a className='PaginationLink' onClick={() => paginate(page)}>{(index === 3 && currentPage < 6) ? "..." : (index === 1 && currentPage > 5) ? "..." : page}</a> {/* href="!#" */}
              </li>
            ))
          }
          <li className='NextPage' onClick={nextPageHandler}><a>&rarr;</a></li>
        </ul>
    </div>
  );
};
