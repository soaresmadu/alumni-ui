import BarraUI from "@/UI/Animation/BarraUI";
import HeaderMenuClientPage from "@/components/header/HeaderMenuClientPage";
import HomeClientPage from "@/components/home/HomeClientPage";


export default function Home() {
  return (
    <div>
      <HeaderMenuClientPage />
      <HomeClientPage />
      <BarraUI/>
    </div>
  );
}
