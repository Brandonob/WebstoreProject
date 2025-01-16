import React, { useState } from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Button,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AddSize } from './AddSize';

export const DynamicTabs = () => {
  const [tabs, setTabs] = useState<{ name: string; content: any }[]>([]);
  const [newTabName, setNewTabName] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const addTab = () => {
    if (newTabName.trim()) {
      setTabs([...tabs, { name: newTabName, content: <AddSize /> }]);
      setNewTabName('');
    }
  };

  const removeTab = (index: number) => {
    const updatedTabs = tabs.filter((_, i) => i !== index);
    setTabs(updatedTabs);
    if (activeIndex >= updatedTabs.length) {
      setActiveIndex(updatedTabs.length - 1);
    }
  };

  return (
    <>
      <HStack mb={4} spacing={4}>
        <Input
          placeholder='New tab name'
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
        />
        <Button onClick={addTab} colorScheme='blue'>
          Add Tab
        </Button>
      </HStack>

      <Tabs
        index={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        isLazy
        variant='enclosed'
      >
        <TabList>
          {tabs.map((tab, index) => (
            <HStack key={index} spacing={2}>
              <Tab>{tab.name}</Tab>
              <IconButton
                aria-label='Remove tab'
                icon={<CloseIcon />}
                size='xs'
                colorScheme='red'
                onClick={() => removeTab(index)}
              />
            </HStack>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              <Box>{tab.content}</Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
