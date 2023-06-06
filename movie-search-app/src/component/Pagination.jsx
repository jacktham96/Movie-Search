import React from "react";

const Pagination = ({page , totalPages , onPageChange}) => {
    
    const getPageNumber = () => {
        const pageNumber = []
        const totalPageNumber = 10
        const delta = Math.floor(totalPageNumber/2)  // 確定當前頁面的前後顯示頁碼範圍
        
        let startPage = Math.max(1 , page - delta)
        let endPage = startPage + totalPageNumber -1
        
        if (endPage > totalPages) {
            endPage = totalPages
            startPage = Math.max(1, endPage - totalPageNumber +1)
        }

        for (let i=startPage ; i<=endPage; i++) {
            pageNumber.push(i)
        }
        return pageNumber
    
    }

    const handlePageChange = (newPage) => {
        if (newPage === page) return ;
        onPageChange(newPage)
    }

    const handlePrevPage = () => {
        if(page > 1) {
            onPageChange(page-1)
        }
    }

    const handleNextPage = () => {
        if (page < totalPages) {
            onPageChange(page+1)
        }
    }

    const renderPageNumbers = () => {
        const pageNumbers = getPageNumber();
    
        return pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-number ${pageNumber === page ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ));
      };

    return(
        <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mr-2 bg-gray-300"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <div className="flex items-center gap-3 mx-2"> 
            {renderPageNumbers()}
        </div>
        <button
          className="px-4 py-2 ml-2 bg-gray-300"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next Page
        </button>
      </div>
    )

}

export default Pagination