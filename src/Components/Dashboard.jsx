import { useState } from "react";
import { Home, Inbox, BookOpen, ShieldOff, Bolt } from "lucide-react";
import Navbar from "../Components/Navbar";
import CourseInfo from "./CourseInfo";
import OtherInfo from "./OtherInfo";
import Drag from "../Components/Drag";
export default function Dashboard() {
  const [active, setActive] = useState("Courses");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      <aside className="w-64 shadow-md ">
        <div className=" w-full bg-gray-900">
          <h1 className="font-bold text-3xl pl-6 text-white py-4">Quyl.</h1>
        </div>

        <nav className="space-y-2 pt-3 bg-gray-800 h-full">
          <NavItem
            icon={<Home />}
            label="Dashboard"
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={<BookOpen />}
            label="Courses"
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={<Inbox />}
            label="Chapter"
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={<ShieldOff />}
            label="Reports"
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={<Bolt />}
            label="Settings"
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={<BookOpen />}
            label="Help"
            active={active}
            setActive={setActive}
          />
        </nav>
      </aside>

      {/* Main Content */}

      <main className="flex-1 px-6">
        <Navbar />
        <div className="flex gap-x-4">
          <section className="bg-white p-6 rounded shadow w-4/6">
            <h3 className="text-xl font-semibold">{active}</h3>

            <CourseInfo />
          </section>
          <section className="bg-white p-6 rounded shadow w-1/3 capitalize text-xl font-semibold ">
            <h1 className="mb-3 text-lg">upload thubmail</h1>
            <Drag />
          </section>
        </div>
        <OtherInfo />
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, setActive }) {
  return (
    <button
      className={`flex items-center p-2 w-full rounded ${
        active === label ? "bg-gray-900 text-white" : "text-gray-300"
      } hover:bg-gray-900`}
      onClick={() => setActive(label)}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );
}
