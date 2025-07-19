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
  const { kernel } = useJupyter({ startDefaultKernel: true  });
  /*
  const { kernelManager, serviceManager } = useJupyter();
  const kernel1 = useMemo(() => {
    if (kernelManager && serviceManager) {
      return new Kernel({
        kernelManager,
        kernelName: 'python3',
        kernelSpecName: 'python3',
        kernelType: "notebook",
        kernelspecsManager: serviceManager.kernelspecs,
        sessionManager: serviceManager.sessions,
      });
    }
  }, [kernelManager, serviceManager]);
  */
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
          Notebook
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={CpuIcon}
          aria-current={tab === 1 ? "page" : undefined}
          onSelect={e => {
            e.preventDefault();
            setTab(1);
          }}
        >
          Cell
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={CpuIcon}
          aria-current={tab === 2 ? "page" : undefined}
          onSelect={e => {
            e.preventDefault();
            setTab(2);
          }}
        >
          Outputs
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={AppsIcon}
          aria-current={tab === 3 ? "page" : undefined}
          onSelect={e => {
            e.preventDefault();
            setTab(3);
          }}
        >
          Lab App
        </UnderlineNav.Item>
      </UnderlineNav>
      { tab === 0 && kernel &&
        <>
          <Notebook
            path="ipywidgets.ipynb"
            id="notebook-id"
            height="400px"
            extensions={[new CellSidebarExtension({ factory: CellSidebarRun })]}
            kernel={kernel}
          />
        </>
      }
      { tab === 1 && kernel &&
        <>
          <CellComponents kernel={kernel} />
        </>
      }
      { tab === 2 && kernel &&
        <>
          <OutputsComponents kernel={kernel} />
        </>
      }
      { tab === 2 &&
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
