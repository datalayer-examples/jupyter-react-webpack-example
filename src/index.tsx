import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div);

root.render(<App />);
