import Navbar from "@/components/Home/Navbar/Navbar";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Navbar");
  return (
    <div>
      <Navbar />
    </div>
  );
}
