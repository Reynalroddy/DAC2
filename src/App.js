import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import DonationList from "./pages/DonationList";
import DonationDetails from "./pages/DonationDetails";
import DonateNow from "./pages/DonateNow";
import Events from "./pages/Events";
import BlogVersionOne from "./pages/BlogVersionOne";
import BlogVersionTwo from "./pages/BlogVersionTwo";
import BlogSidebar from "./pages/BlogSidebar";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

function App() {
  useEffect(() => {
    new WOW.WOW({
        live: false
      }).init();
    }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
        <Routes>
            <Route path={`/`} exact element={<HomeDefault />} />
            <Route path={`/home-two`} exact element={<HomeTwo />} />
            <Route path={`/home-three`} exact element={<HomeThree />} />
            <Route path={`/about`} exact element={<About />} />
            <Route path={`/team`} exact element={<Team />} />
            <Route path={`/team-details`} exact element={<TeamDetails />} />
            <Route path={`/projects`} exact element={<Projects />} />
            <Route path={`/project-details`} exact element={<ProjectDetails />} />
            <Route path={`/testimonials`} exact element={<Testimonials />} />
            <Route path={`/gallery`} exact element={<Gallery />} />
            <Route path={`/donation`} exact element={<Donation />} />
            <Route path={`/donation-list`} exact element={<DonationList />} />
            <Route path={`/donation-details`} exact element={<DonationDetails />} />
            <Route path={`/donate-now`} exact element={<DonateNow />} />
            <Route path={`/Events`} exact element={<Events />} />
            <Route path={`/blog-v-1`} exact element={<BlogVersionOne />} />
            <Route path={`/blog-v-2`} exact element={<BlogVersionTwo />} />
            <Route path={`/blog-sidebar`} exact element={<BlogSidebar />} />
            <Route path={`/blog-details`} exact element={<BlogDetails />} />
            <Route path={`/contact`} exact element={<Contact />} />
            <Route path={`/*`} exact element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaAngleUp />} />
    </Router>
  );
}

export default App;