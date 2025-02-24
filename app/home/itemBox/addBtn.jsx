import Image from "next/image";

const Page = ({e}) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <Image src="/monsterIcon.png" alt="icon" width={100} height={93} />
      <button
        className="mt-2"
        onClick={e}
      >
        <Image src="/addButton.png" alt="Add Button" width={40} height={40} />
      </button>
    </div>
  );
};

export default Page;