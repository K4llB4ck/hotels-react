import Login from '../containers/Login';
import Home from '../containers/Home';
import Hotels from '../containers/Hotels';
const routes = [

    {
        path:'hotels',
        component: Hotels,
        private:false
        
    },
    {
        path:'/',
        component:Home,
        private:false
    }
];

export default routes;