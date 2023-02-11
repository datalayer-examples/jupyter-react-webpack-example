import { Jupyter, IpyWidgetsComponent, Notebook, CellSidebarDefault } from '@datalayer/jupyter-react';
import CellComponents from './examples/cell/CellComponents';
import IPyWidgetsSimple from './examples/ipywidgets/IPyWidgetsSimple';
import OutputsComponents from './examples/outputs/OutputsComponents';

import './App.css';

function App() {
  return (
    <>
      <Jupyter startDefaultKernel={true}>
        <IpyWidgetsComponent Widget={IPyWidgetsSimple}/>
        <hr/>
        <OutputsComponents/>
        <hr/>
        <CellComponents/>
        <hr/>
        <Notebook
          path="/ping.ipynb"
          CellSidebar={CellSidebarDefault}
          />
      </Jupyter>
    </>
  );
}

export default App;
