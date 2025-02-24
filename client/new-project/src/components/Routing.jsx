import React from 'react'
import LoginForm from './Login/LoginForm'
import { Routes,Route } from 'react-router-dom'
import RegistrationForm from './Login/RegistrationForm'
import Home from './Home'
import About from './Footer/About'
import Contact from './Contact'
import ContentDetail from './ContentDetail'
import ContentList from './ContentList'
import Sidebar from './ProfileComponents/Sidebar'
import AccountSettingsContent from './ProfileComponents/AccountSettingsContent'
import PaymentMethodsContent from './ProfileComponents/PaymentMethodsContent'
import PhotoContent from './ProfileComponents/PhotoContent'
import ProfileContent from './ProfileComponents/ProfileContent'
import PurchaseHistoryContent from './ProfileComponents/PurchaseHistoryContent'
import SubscriptionsContent from './ProfileComponents/SubscriptionsContent'
import LogoutContent from './ProfileComponents/LogoutContent'
const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path='/signup'element={<RegistrationForm/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path="/content" element={<ContentList/>} /> 
          <Route path="/content/:id" element={<ContentDetail/>} /> 
          <Route path='/profile' element={<Sidebar/>}>
              <Route path='AccountSettings' element={<AccountSettingsContent />} />
              <Route path='PaymentMethod' element={<PaymentMethodsContent />} />
              <Route path='Photo' element={<PhotoContent />} />
              <Route path='ProfileContent' element={<ProfileContent />} />
              <Route path='PurchaseHistory' element={<PurchaseHistoryContent />} />
              <Route path='SubscriptionsContent' element={<SubscriptionsContent />} />
              <Route path='logout' element={<LogoutContent />} />
</Route>

        </Routes>
    </div>
  )
}

export default Routing;