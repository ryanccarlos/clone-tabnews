import Image from "next/image";

function Home() {
  return (
    <div>
      <Image
        src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
        alt="gif"
        width={400}
        height={400}
        unoptimized
      />
    </div>
  );
}

export default Home;
