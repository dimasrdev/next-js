import React from "react";
interface CardProps {
  className: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  phone_number: string;
  employment: { title: string; key_skill: string };
}
const Card = ({
  className,
  first_name,
  last_name,
  avatar,
  email,
  phone_number,
  employment,
}: CardProps) => {
  return (
    <div
      className={`${className} flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      <img
        className="w-full h-auto rounded-t-xl"
        src={avatar}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {`${first_name} ${last_name}`}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{email}</p>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{phone_number}</p>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {employment.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
