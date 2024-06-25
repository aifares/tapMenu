import "./App.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorMode,
  Button,
} from "@chakra-ui/react";
function App() {
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="font-bold underline">Resturant Logo</h1>
        <h1 className="font-bold underline">Resturant Logo</h1>
        <h1 className="font-bold underline">cart</h1>
      </div>

      <Tabs isFitted>
        <Box overflow="auto">
          <TabList w="max-content">
            <Tab>OneOneOneOneOneOne</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
