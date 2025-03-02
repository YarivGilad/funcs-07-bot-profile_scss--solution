import ReactDOMClient from 'react-dom/client'
import { App } from './view/app/app.view'
// import './styles/main.scss';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <App />
)