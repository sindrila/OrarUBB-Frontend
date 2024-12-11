import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import InformatiiSaliPage from "./pages/InformatiiSaliPage/InformatiiSali";
import AllTeachersPage from "./pages/AllTeachersPage/AllTeachersPage";
import AllRoomsPage from "./pages/AllRoomsPage/AllRoomsPage";
import AllCoursesPage from "./pages/AllCoursesPage/AllCoursesPage";
import ProfessorsSchedule from "./pages/ProfessorsSchedule/ProfessorsSchedule";
import MainPage from "./pages/MainPage/MainPage";
import StudyProgramsPage from "./pages/MainPage/StudyProgramsPage/StudyProgramsPage";
import GroupsSchedule from "./pages/MainPage/GroupsSchedule/GroupsSchedule";
import RoomsSchedule from "./pages/RoomsSchedule/RoomsSchedule";
import UserSchedule from "./pages/UserSchedule/UserSchedule";
import CrudSchedule from "./pages/UserSchedule/CrudSchedule";
import RoomsAvailabilityPage from "./pages/RoomsAvailabilityPage/RoomsAvailabilityPage";
import LegendaSalilorPage from "./pages/LegendaSalilorPage/LegendaSalilorPage";

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/informatii-sali" element={<InformatiiSaliPage />} />
        <Route
          path="informatii-sali/legenda"
          element={<LegendaSalilorPage />}
        />
        <Route path="/teachers" element={<AllTeachersPage />} />
        <Route path="/rooms" element={<AllRoomsPage />} />
        <Route path="/courses" element={<AllCoursesPage />} />
        <Route path="/teacher/:teacherCode" element={<ProfessorsSchedule />} />
        {/* why do we need both the name and the id?*/}
        {/*update: we don't!*/}
        {/* <Route
          path="/teacher/c2c03206-4e5d-589c-91ac-40cd86665ca1"
          element={<ProfessorsSchedule />}
        /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/study-programs" element={<StudyProgramsPage />} />
        <Route
          path="/group/:abbreviation/:groupYear"
          element={<GroupsSchedule />}
        />
        <Route path="/room/:roomName" element={<RoomsSchedule />} />
        <Route path="/course/:courseName" element={<></>} />{" "}
        {/* TODO - there is no course page yet afaik */}
        <Route path="/crud-schedule" element={<CrudSchedule />} />
        <Route path="/my-schedule" element={<UserSchedule />} />
        <Route
          path="/rooms/rooms-schedule"
          element={<RoomsAvailabilityPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return <AppContent></AppContent>;
}

export default App;
