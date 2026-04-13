import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import WeeklyTopList from "@/components/WeeklyTopList";

const TopList = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <WeeklyTopList />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default TopList;
