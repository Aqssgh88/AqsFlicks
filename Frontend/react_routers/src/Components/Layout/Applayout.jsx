import { Outlet,useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Load } from "./Loadd";

export const Applayout = () => {
    const navigation = useNavigation();
    console.log(navigation);
  
    if (navigation.state === "loading") return <Load />;
  
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
