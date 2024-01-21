import MainContent from "@/components/MainContent";
import SideBar from "@/components/SideBar";

export default function Home() {
  const bodyContent = <div></div>;
  return (
    <div>
      <MainContent bodyContent={bodyContent} title="All tasks" />
    </div>
  );
}
