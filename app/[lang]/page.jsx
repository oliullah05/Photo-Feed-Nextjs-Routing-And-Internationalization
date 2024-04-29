import Image from "next/image";
import { getDictonary } from "../dictonaries/dictonaries";
export default async function Home({params}) {
  const dist =await getDictonary(params?.lang)
  return (
    <div>
      
      <h1>{dist.followers}</h1>
    </div>

  );
}
