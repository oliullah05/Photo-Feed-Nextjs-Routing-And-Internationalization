
import PhotoList from "@/components/PhotoList";
export default async function Home({params}) {

const response = await fetch(`${process.env.BASE_API_URL}/photos`);
const photos = await response.json()


  return (
    <div>
      
      {/* <h1 className="text-3xl font-bold text-center">{dist.followers}</h1> */}
      <PhotoList photos={photos}></PhotoList>
    </div>

  );
}
