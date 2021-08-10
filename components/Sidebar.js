import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="sidebar ml-10">
      <div>
        <h1 className="font-extrabold underline">TRENDINGS</h1>
      </div>
      <div className="grid overflow-x-hidden sidebar_grid ">
        <SidebarCard tag="Reactjs" />
        <SidebarCard tag="Programming" />
        <SidebarCard tag="Python" />
        <SidebarCard tag="TailwindCSS" />
        <SidebarCard tag="CSS" />
        <SidebarCard tag="Bootstarp" />
        <SidebarCard tag="NodeJS" />
        <SidebarCard tag="Javascript" />
        <SidebarCard tag="NextJs" />
        <SidebarCard tag="Nextra" />
        <SidebarCard tag="Bulma" />
        <SidebarCard tag="Express" />
        <SidebarCard tag="EJS" />
        <SidebarCard tag="Bulma" />
        <SidebarCard tag="Pug" />
      </div>
    </div>
  );
};

export default Sidebar;
