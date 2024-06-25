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
import MenuItem from "./components/MenuItem/index.tsx";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-between w-full px-4">
          <h1 className="font-bold underline flex-1 text-left">s</h1>
          <h1 className="font-bold underline flex-1 text-center">l</h1>
          <h1 className="font-bold underline flex-1 text-right">Cart</h1>
        </div>
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
          <MenuItem
          name="Burger"
          price="$5.99"
          description="A delicious beef burger with lettuce, tomato, and cheese."
          imageUrl="https://via.placeholder.com/100" // Placeholder image URL
        />
        <MenuItem
          name="Pizza"
          price="$8.99"
          description="A classic margherita pizza with fresh basil and mozzarella."
          imageUrl="https://via.placeholder.com/100" // Placeholder image URL
        />
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
