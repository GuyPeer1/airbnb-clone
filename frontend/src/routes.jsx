import { StayIndex } from './pages/stay-index.jsx'
import { StayDetails } from './pages/stay-details.jsx'
import { StayConfirm } from './pages/stay-confirm.jsx'
import { OrdersMsg } from './pages/orders-msg.jsx'

const routes = [
    {
        path: '',
        component: <StayIndex />,
        label: 'stays'
    },
    {
        path: '/stay/:stayId',
        component: <StayDetails />,
    },
    {
        path: '/book/stays/',
        component: <StayConfirm />,
    },
    {
        path: '/book/stays/:stayId/:adults/:children/:infants/:pets/:startDate/:endDate',
        component: <StayConfirm />,
    },
    {
        path: '/orders/msgs',
        component: <OrdersMsg />
    }

]

export default routes