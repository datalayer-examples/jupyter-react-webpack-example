import { useState } from 'react';
import { AppsIcon, CpuIcon } from '@primer/octicons-react';
import { Box, UnderlineNav } from '@primer/react';
import { useJupyter, JupyterReactTheme, Notebook, CellSidebarRun, CellSidebarExtension } from '@datalayer/jupyter-react';
import CellComponents from './examples/cell/CellComponents';
import OutputsComponents from './examples/outputs/OutputsComponents';
import JupyterLabHeadlessApp from './examples/labapp/JupyterLabHeadlessApp';

import './App.css';

const JupyterApp = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <UnderlineNav aria-label='gallery'>
        <UnderlineNav.Item
          icon={CpuIcon}
          aria-current={tab === 0 ? "page" : undefined}
          onSelect={e => {
            e.preventDefault();
            setTab(0);
          }}
        >
          Examples
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={AppsIcon}
          aria-current={tab === 1 ? "page" : undefined}
          onSelect={e => {
            e.preventDefault();
            setTab(1);
          }}
        >
          Lab App
        </UnderlineNav.Item>
      </UnderlineNav>
      { tab === 0 &&
        <>
          <Notebook
            path="ipywidgets.ipynb"
            id="notebook-id"
            height="400px"
            extensions={[new CellSidebarExtension({ factory: CellSidebarRun })]}
            startDefaultKernel
          />
          <hr/>
          <CellComponents/>
          <hr/>
          <OutputsComponents/>
        </>
      }
      { tab === 1 &&
        <>
          <JupyterLabHeadlessApp/>
        </>
      }
    </>
  )
}

const App = () => {
  return (
    <>
      <Box>
        <JupyterReactTheme>
          <JupyterApp />
        </JupyterReactTheme>
      </Box>
    </>
  );
}

export default App;
