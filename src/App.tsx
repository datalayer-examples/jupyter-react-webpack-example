import { useState } from 'react';
import { AppsIcon, CpuIcon } from '@primer/octicons-react';
import { Box, UnderlineNav } from '@primer/react';
import { useJupyter, JupyterReactTheme, Notebook2, CellSidebarRun, CellSidebarExtension } from '@datalayer/jupyter-react';
import CellComponents from './examples/cell/CellComponents';
import OutputsComponents from './examples/outputs/OutputsComponents';
import JupyterLabHeadlessApp from './examples/labapp/JupyterLabHeadlessApp';

import './App.css';

const JupyterApp = () => {
  const [tab, setTab] = useState(0);
  const { defaultKernel, serviceManager } = useJupyter({
    jupyterServerUrl: "https://oss.datalayer.run/api/jupyter-server",
    jupyterServerToken: "60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6",
    startDefaultKernel: true,
  });
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
      { tab === 0 && defaultKernel && serviceManager &&
        <>
          <Notebook2
            path="ipywidgets.ipynb"
            id="notebook-id"
            height="400px"
            kernelId={defaultKernel.id}
            serviceManager={serviceManager}
            extensions={[new CellSidebarExtension({ factory: CellSidebarRun })]}
          />
        </>
      }
      { tab === 1 && defaultKernel &&
        <>
          <CellComponents kernel={defaultKernel} />
        </>
      }
      { tab === 2 && defaultKernel &&
        <>
          <OutputsComponents kernel={defaultKernel} />
        </>
      }
      { tab === 3 && defaultKernel &&
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
