// Component
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

// Styles
import "../../styles/common/globalstyle.css";
import "../../styles/common/layout/dashboard.css";

export const metadata = {
  title: "Zenwings",
};

export default function ParentLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex">
          <div className="sidebar-container fixed-sidebar">
            <Sidebar />
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
