"use client";
import React, { useState } from "react";
import FlightSearchBox from "./components/flightSearchBox/flightSearchBox";

function Page() {
  // Define the required states for the props
  const [type, setType] = useState<string>("oneway");
  const [value, setValue] = useState<string>("oneway");
  const [fromSearchText, setFromSearchText] = useState<string>("");
  const [toSearchText, setToSearchText] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [faddress, setfaddress] = useState<string>("");
  const [toAddress, setToAddress] = useState<string>("");
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(0);
  const [infant, setInfant] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [className, setClassName] = useState<string>("");
  const [changeState, setChangeState] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const [isModified, setIsModified] = useState<boolean>(false);
  const data2 = {};
  const fromSendData = {};
  const toSendData = {};
  const searchData = {};
  const multiSearchData = {};
  const isLoaded = false;

  return (
    <div>
      <FlightSearchBox
        type={type}
        setType={setType}
        data2={data2}
        value={value}
        setValue={setValue}
        fromSearchText={fromSearchText}
        setFromSearchText={setFromSearchText}
        toSearchText={toSearchText}
        setToSearchText={setToSearchText}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        faddress={faddress}
        setfaddress={setfaddress}
        toAddress={toAddress}
        setToAddress={setToAddress}
        fromSendData={fromSendData}
        setFromSendData={() => {}}
        toSendData={toSendData}
        setToSendData={() => {}}
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childCount={childCount}
        setChildCount={setChildCount}
        infant={infant}
        setInfant={setInfant}
        result={result}
        setResult={setResult}
        className={className}
        setClassName={setClassName}
        setChangeState={setChangeState}
        changeState={changeState}
        changeFrom={""} // You can define this state if necessary
        setChangeFrom={() => {}}
        searchData={searchData}
        setSearchData={() => {}}
        multiSearchData={multiSearchData}
        setMultiSearchData={() => {}}
        isLoaded={isLoaded}
        setClick={setClick}
        click={click}
        isModified={isModified}
        setIsModified={setIsModified}
      />
    </div>
  );
}

export default Page;
