import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import HomeSection from "@/components/HomeSection";
import Footer from "@/components/Footer";
import { getProfiles } from "@/server/data-layer/profiles";

export default async function Home() {
  console.log("profiles here => ", await getProfiles());

  return <HomeSection />;
}
