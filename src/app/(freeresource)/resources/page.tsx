import CourseCard from "@/components/pages/(free-resources)/resource/course-card";
import MarketingResource from "@/components/pages/(free-resources)/resource/marketing-resource";
import VisitMeOn from "@/components/pages/(free-resources)/resource/visit-me-on";

const Resources = () => {
  return (
    <main className="App">
      <MarketingResource />
      <CourseCard />
      <VisitMeOn />
    </main>
  );
};

export default Resources;
