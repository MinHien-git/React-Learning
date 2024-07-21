import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./index.scss";

export default function Home_Layout(props) {
  return (
    <>
      <NavigationBar />
      <main className="home-layout">{props.children}</main>
    </>
  );
}
