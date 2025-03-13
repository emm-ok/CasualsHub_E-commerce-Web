import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import MyMainLayout from './layout2/MyMainLayout'
import MyHomePage from './pages2/MyHomePage'
import MyProductsPage from './pages2/MyProductsPage'
import MyAboutPage from './pages2/MyAboutPage'

const MyApp = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MyMainLayout />}>
                <Route path='/' element={<MyHomePage />}/>
                <Route path='/products' element={<MyProductsPage />}/>
                <Route path='/about' element={<MyAboutPage />}/>
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default MyApp