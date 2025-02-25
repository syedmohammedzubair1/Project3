// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoginForm from './Login/LoginForm';
// import RegistrationForm from './Login/RegistrationForm';
// import Home from './Home';
// import About from './Footer/About';
// import Contact from './Contact';
// import ContentDetail from './ContentDetail';
// import ContentList from './ContentList';
// import Sidebar from './ProfileComponents/Sidebar';
// import AccountSettingsContent from './ProfileComponents/AccountSettingsContent';
// import PaymentMethodsContent from './ProfileComponents/PaymentMethodsContent';
// import PhotoContent from './ProfileComponents/PhotoContent';
// import ProfileContent from './ProfileComponents/ProfileContent';
// import PurchaseHistoryContent from './ProfileComponents/PurchaseHistoryContent';
// import SubscriptionsContent from './ProfileComponents/SubscriptionsContent';
// import LogoutContent from './ProfileComponents/LogoutContent';
// import VideoDetail from './VideoDetail';
// import LikedVideoDetail from './LikedVideoDetail';
// import SubscribePanel from './SubscribePanel';
// import WildCard from '../Pages/WildCard';
// import { Webinar } from './Webinar/Webinar';
// import { Purchase } from './Purchase/Purchase';
// import { Outlet } from 'react-router-dom';
// import VideoUpload from './VideoUpload';



// const ProfileLayout = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={{ marginLeft: '200px', padding: '20px' }}>
//         <Outlet /> {/* Child routes like ProfileContent, AccountSettings will render here */}
//       </div>
//     </div>
//   );
// };

// const Routing = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path='/signup' element={<RegistrationForm />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path="/content" element={<ContentList />} />
//         <Route path="/content/:id" element={<ContentDetail />} />

//         <Route path="/video/:id" element={<VideoDetail />} />
//         <Route path="/liked-videos/:id" element={<LikedVideoDetail />} />

        

//         {/* Subscribe Panel Route */}
//         <Route path='/subscribe' element={<SubscribePanel />} />
//         <Route path="/subscribe/webinar" element={<Webinar />} />
//         <Route path="/subscribe/purchase" element={<Purchase />} />
       

//         {/* Profile Routes Nested Correctly */}
//         <Route path='/subscribe/profile' element={<Sidebar />}>
//           <Route index element={<ProfileContent />} />
//           <Route path='AccountSettings' element={<AccountSettingsContent />} />
//           <Route path='PaymentMethod' element={<PaymentMethodsContent />} />
//           <Route path='Photo' element={<PhotoContent />} />
//           <Route path='ProfileContent' element={<ProfileContent />} />
//           <Route path='PurchaseHistory' element={<PurchaseHistoryContent />} />
//           <Route path='SubscriptionsContent' element={<SubscriptionsContent />} />
//           <Route path='logout' element={<LogoutContent />} />
//           </Route>
//           <Route path="/video/:id" element={<VideoDetail />} />
//           <Route path="/liked-videos/:id" element={<LikedVideoDetail/>} />
//           <Route path="/upload" element={<VideoUpload type="trending"/>} />
//           <Route path="/upload-liked" element={<VideoUpload type="liked"/>} />
//           <Route path="/webinar" element={<Webinar/>} />
//           <Route path="/purchase" element={<Purchase/>} />

       
//           <Route path="/webinar" element={<Webinar/>} />
//           <Route path="/purchase" element={<Purchase/>} />


//         <Route path='*' element={<WildCard />} />
//       </Routes>
//     </div>
//   );
// };

// export default Routing;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Login/RegistrationForm';
import Home from './Home';
import About from './Footer/About';
import Contact from './Contact';
import ContentDetail from './ContentDetail';
import ContentList from './ContentList';
import Sidebar from './ProfileComponents/Sidebar';
import AccountSettingsContent from './ProfileComponents/AccountSettingsContent';
import PaymentMethodsContent from './ProfileComponents/PaymentMethodsContent';
import PhotoContent from './ProfileComponents/PhotoContent';
import ProfileContent from './ProfileComponents/ProfileContent';
import PurchaseHistoryContent from './ProfileComponents/PurchaseHistoryContent';
import SubscriptionsContent from './ProfileComponents/SubscriptionsContent';
import LogoutContent from './ProfileComponents/LogoutContent';
import VideoDetail from './VideoDetail';
import LikedVideoDetail from './LikedVideoDetail';
import SubscribePanel from './SubscribePanel';
import WildCard from '../Pages/WildCard';
import { Webinar } from './Webinar/Webinar';
import { Purchase } from './Purchase/Purchase';
import { Outlet } from 'react-router-dom';
import VideoUpload from './VideoUpload';

import CartPage from '../pages/CartPage';

const ProfileLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        <Outlet /> {/* Profile child routes render here */}
      </div>
    </div>
  );
};

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/signup' element={<RegistrationForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/content" element={<ContentList />} />
        <Route path="/content/:id" element={<ContentDetail />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/liked-videos/:id" element={<LikedVideoDetail />} />

        {/* Subscribe Panel Routes */}
        <Route path='/subscribe' element={<SubscribePanel />} />
        <Route path="/subscribe/webinar" element={<Webinar />} />
        <Route path="/subscribe/purchase" element={<Purchase />} />

        {/* 🛒 Cart Route */}
        <Route path="/cart" element={<CartPage />} /> {/* ✅ New Cart Route */}

        {/* Profile Routes (Nested) */}
        <Route path='/subscribe/profile' element={<ProfileLayout />}>
          <Route index element={<ProfileContent />} />
          <Route path='AccountSettings' element={<AccountSettingsContent />} />
          <Route path='PaymentMethod' element={<PaymentMethodsContent />} />
          <Route path='Photo' element={<PhotoContent />} />
          <Route path='ProfileContent' element={<ProfileContent />} />
          <Route path='PurchaseHistory' element={<PurchaseHistoryContent />} />
          <Route path='SubscriptionsContent' element={<SubscriptionsContent />} />
          <Route path='logout' element={<LogoutContent />} />
        </Route>

        {/* Video Upload Routes */}
        <Route path="/upload" element={<VideoUpload type="trending" />} />
        <Route path="/upload-liked" element={<VideoUpload type="liked" />} />

        {/* Webinar & Purchase */}
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/purchase" element={<Purchase />} />

        {/* Catch-All (Wildcard) Route */}
        <Route path='*' element={<WildCard />} />
      </Routes>
    </div>
  );
};

export default Routing;



