import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star/Star";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonials/Testimonial";
import TestimonialNoPic from "./components/Testimonials/TestimonialNoPic";
import Logo from "./static/companyLogo.png";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Star />
      <br />
      <Badge type="pill" color="indigo">
        Badge
      </Badge>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Sport</Menu.Item>
          <Menu.Item>Sport</Menu.Item>
          <Menu.Item>Sport</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Banner
        status="success"
        title="Congratulations!"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      <Banner title="Info" />
      <Banner status="warning" title="Alert">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Card
        title="Easy Deployment"
        msg="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
      <TestimonialNoPic
        msg="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
        name="May Andersons"
        jobTitle="CTO"
        company="Acme Corp"
        src={Logo}
      />
      <Testimonial
        msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
        name="Master Chief"
        jobTitle="Officer"
        company="Halo Project"
        src="https://sm.ign.com/ign_br/screenshot/default/halo-infinite_hgkc.jpg"
      />
      <br />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
