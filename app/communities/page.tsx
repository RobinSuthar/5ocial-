import React from "react";
import { SidebarDemo } from "../components/Sidebar/SideBar";
import Dashboard from "../components/Dashboard/Dashboard";
import Card from "../components/Card/Card";
import ProfileLetter from "../components/ProfilePicture/ProfileLetter";
import Communities from "./Communities";
const page = () => {
  return (
    <div>
      <SidebarDemo>
        <Dashboard>
          <Card>
            <Communities></Communities>
          </Card>
        </Dashboard>
      </SidebarDemo>
    </div>
  );
};

export default page;
