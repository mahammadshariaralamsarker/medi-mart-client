import HomePageManage from "@/components/modules/Home";
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const HomePage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  return (
    <div>
      <HomePageManage searchParams={searchParams} />
      
    </div>
  );
};

export default HomePage;