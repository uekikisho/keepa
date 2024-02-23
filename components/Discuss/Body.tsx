import React from "react";
import Link from "next/link";

const Body = () => {
  const List1 = (
    title: string,
    description: string,
    no: number,
    colorClass: string
  ) => (
    <div className="flex flex-row border-solid border-t-2 border-t-gray-200">
      <div className={`${colorClass} w-[5px]`}></div>
      <div className="p-4">
        <a className="font-bold">{title}</a>
        <p>{description}</p>
      </div>
      <span className="float-right text-gray-600 p-2">{no + ""}</span>
    </div>
  );

  const List2 = (
    title: string,
    description: string,
    avatar: string,
    no: number
  ) => (
    <div className="flex flex-row p-2 w-full items-center border-solid border-t-2 border-t-gray-200">
      <div className="w-18 h-18 rounded-full p-2">
        <img src={avatar} alt="" />
      </div>
      <div className="">
        <a className="">{title}</a>
        <p className="text-sm">{description}</p>
      </div>
      <span className="float-right text-gray-600 p-2">
        <div>{no + ""}</div>
        <div>13h</div>
      </span>
    </div>
  );

  return (
    <div className="row full-width">
      <div className="list-area">
        <div className="contents">
          <div className="mx-auto w-[850px] ">
            <div>
              <ul className="flex flex-row w-full">
                <Link href="/discuss" className="mx-1">
                  Categories
                </Link>
                <Link href="/dicuss/latest" className="mx-1">
                  Latest
                </Link>
                <Link href={""} className="mx-1">
                  New
                </Link>
                <Link href={""} className="mx-1">
                  Unread
                </Link>
                <Link href={""} className="mx-1">
                  Top
                </Link>
              </ul>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 mx-2 bg-white border-b-gray-200 border-b-1 border-solid my-4">
                <div className="flex flex-row justify-between border-solid border-1 border-gray-200 mt-5 p-3">
                  <span>Category</span>
                  <span>Topics</span>
                </div>
                {List1(
                  "Announcements",
                  "Find out more about recent updates and changes to Keepa.",
                  47,
                  "bg-black"
                )}
                {List1(
                  "Feature Request",
                  "You can use this category to request new Keepa features.",
                  1,
                  "bg-green-400"
                )}
                {List1(
                  "Announcements",
                  "Find out more about recent updates and changes to Keepa.",
                  47,
                  "bg-red-600"
                )}
                {List1(
                  "Announcements",
                  "Find out more about recent updates and changes to Keepa.",
                  47,
                  "bg-gray-300"
                )}
                {List1(
                  "Announcements",
                  "Find out more about recent updates and changes to Keepa.",
                  47,
                  "bg-orange-300"
                )}
              </div>
              <div className="w-1/2 mx-2 bg-white border-b-gray-200 border-b-1 border-solid my-4">
                <div className="flex flex-row justify-between border-solid border-1 border-gray-200 mt-5 p-3">
                  <span>Latest</span>
                </div>
                {List2(
                  "Download Historical Data",
                  "Support",
                  "https://discuss.keepa.com/user_avatar/discuss.keepa.com/jessica/48/526_2.png",
                  4
                )}
                {List2(
                  "Download Historical Data",
                  "Support",
                  "https://discuss.keepa.com/user_avatar/discuss.keepa.com/jessica/48/526_2.png",
                  4
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
