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
    name: "Mouse",
    href: "mouse-moment",
    icon: BuildingLibraryIcon,
    current: false,
  },
];
