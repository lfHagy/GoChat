import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { ChatPanel } from './pages/home/chat-panel/chat-panel';

export const routes: Routes = [
    {
        path: "",
        component: Login,
    },
    {
        path: "home",
        component: Home,
        children: [
            {
                path: "chat",
                component: ChatPanel
            }
        ]
    }
];
