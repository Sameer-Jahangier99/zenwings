
// Component
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";


// Styles
import "../../styles/common/globalstyle.css";
import "../../styles/common/layout/dashboard.css";

export const metadata = {
  title: "Zenwings"
};

const routes = [
  { name: "Dahboard", icon: "/dashboarIcon.svg", isActive: true },
  { name: "Communications", icon: "/speech-bubble.svg", isActive: false },
  { name: "Reporting", icon: "/report.svg", isActive: false },
  { name: "Support", icon: "/customer-support.svg", isActive: false },
];

export default function TeacherLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex">
          <div className="sidebar-container fixed-sidebar">
            <Sidebar routes={routes} />
          </div>
          <div className="content-contaier sky-blue-background-color">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
