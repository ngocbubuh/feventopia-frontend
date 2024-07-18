import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import UserProfile from "../pages/userPage/userprofile";
import ExploreEvent from "../components/searchEvent";
import FAQ from "../pages/Help-Support/faq";
import HelpArticleDetailView from "../pages/Help-Support/help_article_detail_view";
import HelpCenterKnowledgeBase from "../pages/Help-Support/help_center_knowledge_base";
import HelpSectionDetailView from "../pages/Help-Support/help_section_detail_view";
import HelpCenter from "../pages/Help-Support/help_center";
import TransactionInfo from "../pages/transaction";
import EventDetails from "../pages/eventDetails";
import Checkout from "../pages/checkout";
import CheckoutStall from "../pages/checkoutStall";
import OperatorPages from "../pages/OperatorPages/OperatorMain";
import CreateEvent from "../pages/OperatorPages/EventType/createEvent";
import UpdateEvent from "../pages/OperatorPages/EventType/updateEvent";
import EventDetailsEdit from "../pages/OperatorPages/EventDetail-Editmode";
import NotFound from "../components/error_404";
import ContactUs from "../pages/Help-Support/Contact";
import EventAssignees from "../pages/OperatorPages/EventAssignee";
import EventSponsorship from "../pages/SponsorPages/EventSponsor";
import SponsorProfile from "../pages/SponsorPages/sponsorProfile";
import StaffProfile from "../pages/StaffPages/StaffProfile";
import Invoice from "../pages/invoice";
import EmailConfirmation from "../pages/confirmEmail";
import AdminPages from "../pages/AdminPages/AdminMain";

const AppRoutes = () => {
  const { role } = useAuth();

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Public Routes */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="/helpSectionDetailView" element={<HelpSectionDetailView />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      <Route path="/helpCenterKnowledgeBase" element={<HelpCenterKnowledgeBase />} />
      <Route path="/helpArticleDetailView" element={<HelpArticleDetailView />} />
      <Route path="/confirmEmail" element={<EmailConfirmation />} />
      <Route path="/transactioninfo" element={<TransactionInfo />} />
      <Route path="/event/:eventId" element={<EventDetails />} />
      <Route path="/Contact" element={<ContactUs />} />

      {/* Home Route with Redirection */}
      <Route
        path="/"
        element={
          role === "EVENTOPERATOR" ? (
            <Navigate to="/operatorPages" />
          ) : role === "CHECKINGSTAFF" ? (
            <Navigate to="/staffprofile" />
          ) : role === "ADMIN" ? (
            <Navigate to="/AdminPages" />
          ) : (
            <Home />
          )
        }
      />

      <Route
        path="/explored"
        element={
          role === "EVENTOPERATOR" ? (
            <Navigate to="/operatorPages" />
          ) : role === "CHECKINGSTAFF" ? (
            <Navigate to="/staffprofile" />
          ) : role === "ADMIN" ? (
            <Navigate to="/AdminPages" />
          ) : (
            <ExploreEvent />
          )
        }
      />

      {/* Routes for Visitors */}
      {(!role || role === "VISITOR" || role === "SPONSOR" || role === "ADMIN") && (
        <>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutstall" element={<CheckoutStall />} />
          <Route path="/invoice/:ticketId" element={<Invoice />} />
        </>
      )}

      {/* Routes for Sponsors */}
      {role === "SPONSOR" && (
        <>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sponsorProfile" element={<SponsorProfile />} />
          <Route path="/sponsor-event/:eventId" element={<EventSponsorship />} />
        </>
      )}

      {/* Routes for Checking Staff */}
      {role === "CHECKINGSTAFF" && (
        <>
          <Route path="/staffprofile" element={<StaffProfile />} />
          <Route path="/*" element={<Navigate to="/staffprofile" />} />
        </>
      )}

      {/* Routes for Event Operators */}
      {role === "EVENTOPERATOR" && (
        <>
          <Route path="/operatorPages" element={<OperatorPages />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/update-event/:eventId" element={<UpdateEvent />} />
          <Route path="/edit-eventDetails/:eventId" element={<EventDetailsEdit />} />
          <Route path="/event-assignees/:eventId" element={<EventAssignees />} />
          <Route path="/*" element={<Navigate to="/operatorPages" />} />
        </>
      )}

      {/* Routes for Admin */}
      {role === "ADMIN" && (
        <>
          <Route path="/AdminPages" element={<AdminPages />} />
          {/* Include all other routes accessible by admin */}
          <Route path="/operatorPages" element={<OperatorPages />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/update-event/:eventId" element={<UpdateEvent />} />
          <Route path="/edit-eventDetails/:eventId" element={<EventDetailsEdit />} />
          <Route path="/event-assignees/:eventId" element={<EventAssignees />} />
          <Route path="/staffprofile" element={<StaffProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutstall" element={<CheckoutStall />} />
          <Route path="/invoice/:ticketId" element={<Invoice />} />
          <Route path="/sponsorProfile" element={<SponsorProfile />} />
          <Route path="/sponsor-event/:eventId" element={<EventSponsorship />} />
        </>
      )}

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
