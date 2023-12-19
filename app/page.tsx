import Image from "next/image";
import Button from "@/components/button";
import Card from "@/components/card";

async function getData() {
  const res = await fetch("https://random-data-api.com/api/v2/users?size=7");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex justify-center gap-4 flex-wrap">
        {data.map((item: any, index: number) => (
          <Card
            key={index}
            className="w-72"
            first_name={item.first_name}
            last_name={item.last_name}
            avatar={item.avatar}
            email={item.email}
            phone_number={item.phone_number}
            employment={item.employment}
          />
        ))}
      </div>
      <Button className="rounded-lg">Submit</Button>
    </div>
  );
}
