import {
  BuildingLibraryIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  HomeIcon,
  ChartBarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  {
    name: "dynamic-counter",
    href: "dynamic-counter",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "traffic-light",
    href: "traffic-light",
    icon: BanknotesIcon,
    current: false,
  },
  { name: "nxn", href: "nxn", icon: BuildingLibraryIcon, current: false },
  {
    name: "OTP box",
    href: "otp-box",
    icon: BuildingLibraryIcon,
    current: false,
  },
  { name: "TODO", href: "to-do", icon: BuildingLibraryIcon, current: false },
  {
    name: "Mouse hover pointer",
    href: "mouse-hover-pointer",
    icon: Cog6ToothIcon,
    current: false,
  },
  {
    name: "User List",
    href: "user-list",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "Chips input",
    href: "chips-input",
    icon: BuildingLibraryIcon,
    current: false,
  },
  {
    name: "Toast",
    href: "toast",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "Mouse Position",
    href: "mouse-position",
    icon: BuildingLibraryIcon,
    current: false,
  },
  {
    name: "Event source",
    href: "event-source",
    icon: ChartBarIcon,
    current: false,
  }
];
