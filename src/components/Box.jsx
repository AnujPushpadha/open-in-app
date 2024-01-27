import { useState } from "react";
import * as XLSX from "xlsx";
import upload from "../assets/upload.svg";
import Excel from "../assets/Excel.svg";

const Box = (props) => {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    const file = event.target.files[0];

    if (file) {
      if (file && fileTypes.includes(file.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
          setSelectedFileName(file.name);
        };
      } else {
        console.log("Please select only excel file types");
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  const removeFile = () => {
    setExcelFile(null);
    setSelectedFileName("");
  };

  const upload = () => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      // console.log(data);
      setExcelData(data.slice(0, 10));
      props.getData(data);
    }
  };

  const click1 = () => {
    console.log("browse");
  };

  return (
    <>
      <div className="lg:w-[596px] lg:h-[367px] w-[300px] h-[350px] lg:mt-[10px] mt-[10px] bg-lightgohan rounded-[8px] flex-row">
        <div className="lg:w-[596px] lg:h-[367px] w-[300px] h-[350px] rounded-[8px] flex justify-center items-center">
          <div className="absolute w-[267px] h-[76px]">
            <div className="inline-flex flex-col items-center gap-[16px] relative">
              <img
                className="relative w-[36px] h-[36px]"
                alt="Frame"
                src="https://c.animaapp.com/3wVon0Ah/img/frame-7682.svg"
              />
              <p className="relative w-fit [font-family:'Figtree',Helvetica] font-normal text-transparent text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                <span className="text-[#999ca0]">
                  {selectedFileName
                    ? selectedFileName
                    : "Drop your excel sheet here or "}
                </span>
                {selectedFileName && (
                  <button onClick={removeFile} className="text-[#605bff]">
                    Remove
                  </button>
                )}
                {!selectedFileName && (
                  <label
                    htmlFor="fileInput"
                    className="text-[#ff5b5b] cursor-pointer"
                  >
                    browse
                  </label>
                )}
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </p>
            </div>

            {typeError && (
              <div
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">Danger alert!</span> Please select
                only excel file types
              </div>
            )}
          </div>
          <div className="w-[564px] h-[258px] top-0 rounded-[8px] border border-dashed border-lightbeerushover" />
        </div>

        <div className="flex lg:w-[596px] lg:h-[67px] w-[300px] h-[50px] items-center justify-center gap-[8px] pl-[8px] pr-[16px] py-[8px] bg-[#605bff] rounded-[8px]">
          <img
            className="relative w-[24px] h-[24px]"
            alt="Icon"
            src="https://c.animaapp.com/3wVon0Ah/img/icon-14.svg"
          />
          <button
            onClick={upload}
            className="relative w-fit [font-family:'Figtree',Helvetica] font-semibold text-lightgoten text-[14px] tracking-[0] leading-[24px] whitespace-nowrap"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;
