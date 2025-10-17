import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonials/Testimonial";
import TestimonialNoPic from "./components/Testimonials/TestimonialNoPic";
import Logo from "./static/companyLogo.png";
import Button from "./components/Button/Button";
import Select from "./components/SelectorMenu/SelectorMenu";
import Tooltip from "./components/Tooltip/index";
import Toggle from "./components/ToggleButton/index";
import { useState } from "react";
import { FaUpload } from "react-icons/fa6";
import {
  CgArrowTopLeft,
  CgArrowUp,
  CgArrowTopRight,
  CgArrowBottomLeft,
  CgArrowBottomRight,
} from "react-icons/cg";

function App() {
  const [type, setType] = useState("bold");
  const [color, setColor] = useState("gray");

  const badgeTypes = ["square", "pill"];
  const badgeColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const tooltipTypes = ["Bold", "Light"];
  const tooltipColors = [
    { value: "gray", label: "Gray" },
    { value: "blue", label: "Blue" },
    { value: "pink", label: "Pink" },
    { value: "green", label: "Green" },
  ];

  return (
    <>
      <h1>Component Library</h1>
      <div className="parent-container">
        <h2>Badges</h2>
        {badgeTypes.map((badgeType) => {
          return (
            <div className="parent-container" key={badgeType}>
              <h3>{badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}</h3>
              <div className="component-container wrap">
                {badgeColors.map((badgeColor) => (
                  <Badge
                    type={badgeType}
                    color={badgeColor}
                    key={`${badgeType}${badgeColor}`}
                  >
                    {badgeColor}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="parent-container">
        <h2>Dropdown Menu</h2>
        <div style={{ width: "100px" }}>
          <Menu>
            <Menu.Button>Menu</Menu.Button>
            <Menu.Dropdown>
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
              <Menu.Item>Item 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <div className="parent-container">
        <h2>Banners</h2>
        <Banner
          status="success"
          title="Congratulations!"
          msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        />
        <Banner
          title="Info"
          msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        />
        <Banner
          status="warning"
          title="Alert"
          msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        />
        <Banner
          status="error"
          title="Error"
          msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        />
      </div>
      <div className="parent-container">
        <h2>Cards</h2>
        <Card
          title="Easy Deployment"
          msg="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        />
        <Card
          title="Easy Deployment"
          msg="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
          icon={<FaUpload />}
        />
      </div>
      <div className="parent-container">
        <h2>Testimonial Cards</h2>
        <h3>Without Picture</h3>
        <TestimonialNoPic
          msg="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
          name="May Andersons"
          jobTitle="CTO"
          company="Acme Corp"
          src={Logo}
        />
        <h3>With Picture</h3>
        <Testimonial
          msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          name="Master Chief"
          jobTitle="Officer"
          company="Halo Project"
          src="https://sm.ign.com/ign_br/screenshot/default/halo-infinite_hgkc.jpg"
        />
      </div>
      <div className="parent-container">
        <h2>Tooltip</h2>
        <div>
          <div className="component-container row">
            <div className="parent-container">
              <Toggle>
                {tooltipTypes.map((t) => (
                  <Toggle.Button
                    selected={t.toLowerCase() === type}
                    onClick={() => setType(t.toLowerCase())}
                    key={t}
                  >
                    {t}
                  </Toggle.Button>
                ))}
              </Toggle>
            </div>
            <Select
              label="Select a color"
              initialSelected={{
                value: color,
                label: color.charAt(0).toUpperCase() + color.slice(1),
              }}
              onChange={(c) => setColor(c)}
              options={tooltipColors}
            />
          </div>
        </div>
        <div className="parent-container">
          <Tooltip
            color={color}
            type={type}
            title="Archive notes"
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
          >
            <Tooltip.Trigger>
              <Button>Hover me!</Button>
            </Tooltip.Trigger>
          </Tooltip>
        </div>
      </div>
      <div className="parent-container">
        <h2>Toast</h2>
        <div className="grid">
          <Button>
            <CgArrowTopLeft />
          </Button>
          <Button>
            <CgArrowUp />
          </Button>
          <Button>
            <CgArrowTopRight />
          </Button>
          <Button>
            <CgArrowBottomLeft />
          </Button>
          <div className="grid-spacer"></div>
          <Button>
            <CgArrowBottomRight />
          </Button>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
