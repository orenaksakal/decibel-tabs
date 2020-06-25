import React, { useState } from 'react';
import './App.css';
import { Tab, Tabs } from '@decibel/components';

function TabsWrapper({ tabs }) {
  return (
    <Tabs>
      {tabs.map((tab, index) => {
        return <Tab key={index}>Hello from {tab.name} tab</Tab>;
      })}
    </Tabs>
  );
}

function App() {
  const [tabs, setTabs] = useState([{ name: 'first' }, { name: 'second' }, { name: 'third' }]);

  return (
    <>
      <span
        onClick={() => {
          setTabs([{ name: 'first' }]);
        }}
      >
        Remove last tabs
      </span>
      <TabsWrapper tabs={tabs}></TabsWrapper>
    </>
  );
}

export default App;
