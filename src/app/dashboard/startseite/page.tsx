import StartPage from "@/components/StartPage";
import { getActiveNavbar, getActiveRoute } from "@/utils/navigation";
import routes from "@/utils/routes";
import { headers } from "next/headers";

const page = () => {
  console.log("headers x-origin=> ", headers().get("x-origin"));
  console.log("headers x-pathname=> ", headers().get("x-pathname"));
  console.log("active => ", getActiveRoute(routes));
  console.log("active nav=> ", getActiveNavbar(routes));

  return <StartPage />;
};

export default page;
