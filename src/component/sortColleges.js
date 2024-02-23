import React from "react";

const SortColleges = ({ data, setDisplayedData }) => {

  const searchCollege = (e) => {
    const query = e.target.value.toLowerCase();

    const filteredCollege = data.filter((item) => {
      const collegeName = item.Colleges.toLowerCase();
      return collegeName.includes(query);
    });

    if (filteredCollege.length === 0) {
      setDisplayedData("Searched college not found");
    } else {
      setDisplayedData(filteredCollege);
    }
  };

  const handleSort = (e) => {
    let sortedData = [...data];
    switch (e.target.id) {
      case "rating":
        sortedData.sort((a, b) => b.User_Reviews - a.User_Reviews);
        break;
      case "highestFees":
        sortedData.sort((a, b) => {
          const feeA = parseInt(a.Course_Fees.replace(/[₹,]/g, ""));
          const feeB = parseInt(b.Course_Fees.replace(/[₹,]/g, ""));
          return feeB - feeA;
        });
        break;
      case "lowestFees":
        sortedData.sort((a, b) => {
          const feeA = parseInt(a.Course_Fees.replace(/[₹,]/g, ""));
          const feeB = parseInt(b.Course_Fees.replace(/[₹,]/g, ""));
          return feeA - feeB;
        });
        break;
      case "popularity":
        sortedData.sort((a, b) => b.CD_Rating - a.CD_Rating);
        break;
      default:
        break;
    }
    setDisplayedData(sortedData);
  };

  return (
    <div className="d-flex align-items-center justify-content-around my-3">
      <input
        name="search"
        className="search__input form-control mr-sm-2 w-25"
        type="search"
        placeholder="Search for College"
        aria-label="Search"
        onChange={searchCollege}
      />
      <div className="d-flex align-items-center">
        <span className="fw-bold d-flex align-items-center">Sort By</span>
        <span className="px-3 d-flex align-items-center">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="popularity"
            onChange={(e) => handleSort(e)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Popularity
          </label>
        </span>
        <span className="px-3 d-flex align-items-center">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="rating"
            onChange={(e) => handleSort(e)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Rating
          </label>
        </span>
        <span className="px-3 d-flex align-items-center">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="highestFees"
            onChange={(e) => handleSort(e)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Highest Fees
          </label>
        </span>
        <span className="px-3 d-flex align-items-center">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="lowestFees"
            onChange={(e) => handleSort(e)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Lowest Fees
          </label>
        </span>
      </div>
    </div>
  );
};

export default SortColleges;
