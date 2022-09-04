import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const TabsProduct = () => {
  const tabStyle = {
    mr: ["5"],
    textAlign: "center",
    fontWeight: "900",
    fontSize: ["12px"],
    color: "#000",
  };
  return (
    <Tabs sx={{ mt: "107px", mb: "103px" }} borderColor="transparent">
      <TabList>
        <Tab sx={tabStyle}>DESCRIPTION</Tab>
        <Tab sx={tabStyle}>ADDITIONAL INFORMATION </Tab>
        <Tab sx={tabStyle}>REVIEWS (1)</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p color="#000000">
            Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue
            quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero
            libris signi fer umque ex. Et mel meis nostrum, te appa reat
            tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat
            simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri.
            Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per
            diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id
            al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.
            !
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue
            quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero
            libris signi fer umque ex. Et mel meis nostrum, te appa reat
            tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat
            simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri.
            Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per
            diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id
            al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.
            !!
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue
            quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero
            libris signi fer umque ex. Et mel meis nostrum, te appa reat
            tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat
            simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri.
            Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per
            diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id
            al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.
            !!
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
