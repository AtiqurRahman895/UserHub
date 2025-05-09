import { useNavigate } from "react-router";
import UseUrlQuery from "../../Hooks/UseUrlQuery";

const NextPreButtons = ({maxPage}) => {
  const navigate =useNavigate()  
  const {pageNo} = UseUrlQuery();

  const handlePreButton=()=>{
    navigate(`?page=${pageNo-1}`);
  }
  
  const handleNextButton=()=>{
    navigate(`?page=${pageNo+1}`);
  }

    return (
      <div className="flex items-center gap-2">
          <button type="button" onClick={handlePreButton} disabled={pageNo<=1} className={`${pageNo<=1?"opacity-50 cursor-not-allowed":""} primaryButton !px-4 !py-2`}>
              Previous
          </button>
          <b className="">{pageNo} of {maxPage}</b>
          <button type="button" onClick={handleNextButton} disabled={pageNo>=maxPage} className={`${pageNo>=maxPage?"opacity-50 cursor-not-allowed":""} primaryButton !px-4 !py-2`}>
              Next
          </button>
      </div>
  );
};

export default NextPreButtons;