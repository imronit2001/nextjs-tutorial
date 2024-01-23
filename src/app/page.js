import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
          <LearnLink />
          <LearnUseRouter />
          <h1>Api Call</h1>
          <LearnDataFetching />
      </div>
    </>
  );
}
