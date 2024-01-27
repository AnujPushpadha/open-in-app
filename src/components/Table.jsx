import React, { useState } from "react";

const Table = (props) => {
  return (
    <div className="">
      {props.data ? (
        <div className="">
          <table className="bg-neutral-100 rounded-lg">
            <thead className="p-8 w-[957px] h-[35px] relative">
              <tr className=" w-[43px]  text-stone-800 text-sm font-semibold font-['Figtree'] leading-normal">
                {Object.keys(props.data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>

            <tbody className=" text-stone-800 text-sm font-normal font-['Figtree'] leading-normal">
              {props.data.map((individualExcelData, index) => (
                <tr
                  className="w-[43px] self-stretch text-stone-800 text-sm font-normal font-['Figtree'] leading-normal"
                  key={index}
                >
                  {Object.keys(individualExcelData).map((key) => (
                    <td key={key}>{individualExcelData[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No File is uploaded yet!</div>
      )}
    </div>
  );
};

export default Table;
