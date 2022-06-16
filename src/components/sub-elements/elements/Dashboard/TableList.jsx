import React from "react";
import DefaultImage from '../DefaultImage';
import { moreIcon } from "../../../../utils/images";
import { VerifiersList } from '../../../../utils/verifiers'

const Table = () => {
  return (
    <>
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
  
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                  <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    <input
                      type="checkbox"
                      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                      onClick="checkAll(this)"
                    />
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    First Name
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    Last Name
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    Phone Number
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    Partner
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    Location
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4">
                    Status
                  </th>
                  <td className="text-gray-600 dark:text-gray-400 font-semibold pr-8 text-left text-sm tracking-normal leading-4">
                  Actions
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  VerifiersList.map((item, index) => (
                    <tr key={`${item.firstname}--${index}`} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                      <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                          type="checkbox"
                          className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-primary outline-none"
                          onClick="tableInteract(this)"
                        />
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.firstname}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.lastname}
                      </td>
                      <td className="pr-6 whitespace-no-wrap">
                        <div className="flex items-center">
                          <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
                            {item.phone_number}
                          </p>
                        </div>
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.partner}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.location}
                      </td>
                      <td className="pr-6">
                        { 
                          item.status === 'active' && <span style={{color: '#27A713', background: 'rgba(39, 167, 19, 0.1)'}} class="text-sm font-medium mr-2 px-3 py-0.5 rounded-md">Active</span>
                        }
                        {
                          item.status === 'awaiting appraoval' && <span style={{color: '#FF9900', background: 'rgba(255, 153, 0, 0.1)'}} class="text-sm font-medium mr-2 px-3 py-0.5 rounded-md">Awaiting approval</span>
                        }
                        {
                          item.status === 'deactivated' &&  <span style={{color: '#FF0000', background: 'rgba(255, 0, 0, 0.1)'}} class="text-sm font-medium mr-2 px-3 py-0.5 rounded-md">Deactivated</span>
                        }
                      </td>
                      <td className="pr-8 relative">
                        <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none ">
                          <DefaultImage
                            src={moreIcon}
                            variant={"w-8 h-8"}
                            handleChange={() => {}}
                            alt="Alert icon"
                            value={""}
                            containerVariant={""}
                          />
                        </button>
                        {/* <div className="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                          <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                              Edit
                            </li>
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                              Delete
                            </li>
                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                              Duplicate
                            </li>
                          </ul>
                        </div> */}
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
