import Image from "next/image";
import Link from "next/link";


const PhotoCard = ({photo}) => {
    return (
        <Link href={`photos/${photo.id}`}>
            <Image src={photo.url} width={700} height={7000} alt={photo.title}></Image>
        </Link>
    );
};

export default PhotoCard;