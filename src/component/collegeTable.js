import React from "react";
import Table from "react-bootstrap/Table";
import { FaArrowRightLong, FaArrowRightArrowLeft } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

const CollegeTable = ({ displayedData }) => {
  return (
    <div>
      {Array.isArray(displayedData) ? (
        <Table bordered className="table">
          <thead>
            <tr className="heading text-white text-start">
              <th>CD Rating</th>
              <th className="w-50">Colleges</th>
              <th>Course Fees</th>
              <th>Placement</th>
              <th>User Reviews</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index}>
                <td>{item.CD_Rating}</td>

                <td>
                  <div className=" mt-2 ">
                    <div className="text-start d-flex">
                      <span className="px-2">
                        <img
                          className="rounded-circle"
                          src={item.Image}
                          alt="img"
                        />
                      </span>
                      <div>
                        <h5 className="font-weight-medium text-lg mb-0 college">
                          {item.Colleges}
                        </h5>
                        <span className="font-weight-medium text-sm">
                          {item.City},{item.State}
                        </span>
                        <div className="d-flex flex-column college-cutoff p-1 my-2 ">
                          <span className="text-orange">
                            {item.Courses}
                            <span className="text-orange">
                              <IoChevronDownSharp />
                            </span>
                          </span>
                          <span>JEE-Advanced 2023 Cutoff : {item.Cutoff}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-start d-flex align-items-center justify-content-between">
                      <span className="d-flex align-items-center px-3 text-orange">
                        <span className="text-orange">
                          {<FaArrowRightLong />}
                        </span>
                        <span className="text-orange">Apply Now</span>
                      </span>
                      <span className="d-flex align-items-center px-3 text-green">
                        <span className="text-green">
                          {<HiOutlineDownload />}
                        </span>
                        <span className="text-green">Download Brochure</span>
                      </span>
                      <span className="d-flex align-items-center px-3">
                        <input type="checkbox" />
                        <span> Add To Compare</span>
                      </span>
                    </div>
                  </div>
                </td>


                <td>
                  <div className="pl-2 text-start">
                    <span className="text-green fw-bold">
                      {item.Course_Fees}
                    </span>
                    <span className="mb-1 mt-1 font-weight-medium text-sm text-dark-gray d-block">
                      <span>MBA/PGDM</span>
                      <p>
                        <small>- total fees</small>
                      </p>
                    </span>
                    <span className="d-block font-weight-bold mb-1 text-orange">
                      {<FaArrowRightArrowLeft />} Compare Fees
                    </span>
                  </div>
                </td>


                <td className="col-placement">
                  <div className="text-start px-1">
                    <span>
                      <span className="text-green d-block mb-1 fw-bold">
                        {item.Average_Package}
                      </span>
                      <span className=" mb-1 font-weight-medium text-sm text-dark-gray d-block">
                        Average Package
                      </span>
                    </span>
                    <span className="mb-2">
                      <span>
                        <span className="text-green d-block fw-bold mb-1">
                          {item.Highest_Package}
                        </span>
                        <span
                          title="Highest Package"
                          className=" mb-1 font-weight-medium text-sm text-dark-gray d-block"
                        >
                          Highest Package
                        </span>
                      </span>
                    </span>
                    <span className="text-md text-orange d-block mt-1">
                      <span className=" mr-1 icon text-orange">
                        {<FaArrowRightArrowLeft />}
                      </span>
                      <span className="text-orange">Compare Placement</span>
                    </span>
                  </div>
                </td>


                <td>
                  <div>
                    <div className="text-start">
                      <span>{item.User_Reviews}/10</span>
                      <span className="d-block mt-2">
                        Based on {item.Cutoff} User
                      </span>
                      <span>Review</span>
                      <div className="mt-2 w-75 college-cutoff">
                        <span className="text-review">
                          <IoMdCheckmark />
                        </span>
                        <span className="text-review">
                          Best in Infrastructure
                          <span className="text-review">
                            <IoChevronDownSharp />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>


                <td>
                  <div className="text-start">
                    <span>{item.Ranking}</span>
                    <div>
                      <div className="mt-2 w-75 college-ranking">
                        <span className="text-ranking">
                          + {item.User_Reviews} More
                          <span className="text-ranking">
                            <IoChevronDownSharp />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>
          <h1 className="text-center">{displayedData}</h1>
        </div>
      )}
    </div>
  );
};

export default CollegeTable;
