import { Outlet } from 'react-router-dom' 
import MyNavbar from "../components2/MyNavbar"

const MyMainLayout = () => {
  return (
    <>
        {/* <MyNavbar /> */}
        <Outlet />
    </>
  )
}

export default MyMainLayout