import MainContent from "@/components/MainContent";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div>
      <div
        className="
    flex
    flex-row
    gap-4
    p-10
  "
      >
        <SideBar />
        <div className="flex-1">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
