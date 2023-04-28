import clsx from "clsx";
import { forwardRef, memo, SyntheticEvent, useState } from "react";

import { SIZE_CLASS_MAPPER, SIZE_REGISTER } from "./constants";
import { IconSize, IconType } from "./enums";
import AcceptedRisks from "./variations/accepted-risks";
import ArrowX from "./variations/arrow-x";
import ArrowY from "./variations/arrow-y";
import Avatar from "./variations/avatar";
import Calendar from "./variations/calendar";
import Checkmark from "./variations/checkmark";
import Dashboard from "./variations/dashboard";
import Fixed from "./variations/fixed";
import MenuArrow from "./variations/menu-arrow";
import Notification from "./variations/notification";
import PendingFix from "./variations/pending-fix";
import Project from "./variations/project";
import Settings from "./variations/settings";
import SidebarLogo from "./variations/sidebar-logo";
import Time from "./variations/time";

export const ICON_REGISTER = {
  [IconType.CHECKMARK]: <Checkmark />,
  [IconType.PROJECT]: <Project />,
  [IconType.DASHBOARD]: <Dashboard />,
  [IconType.SETTINGS]: <Settings />,
  [IconType.TIME]: <Time />,
  [IconType.ARROWX]: <ArrowX />,
  [IconType.ARROWY]: <ArrowY />,
  [IconType.MENU_ARROW]: <MenuArrow />,
  [IconType.NOTIFICATION]: <Notification />,
  [IconType.AVATAR]: <Avatar />,
  [IconType.SIDEBAR_LOGO]: <SidebarLogo />,
  [IconType.ACCEPTED_RISKS]: <AcceptedRisks />,
  [IconType.FIXED]: <Fixed />,
  [IconType.PENDING_FIX]: <PendingFix />,
  [IconType.CALENDAR]: <Calendar />,
};

type IconProps = {
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
  type: IconType;
  size?: IconSize;
  hoverColor?: string;
  fill?: string;
};

const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      type,
      size = IconSize.MEDIUM,
      onClick,
      hoverColor,
      fill = "currentColor",
    },
    ref
  ) => {
    const iconSize = SIZE_REGISTER[size];
    const sizeClasses = SIZE_CLASS_MAPPER[size];
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(sizeClasses, { "cursor-pointer": !!onClick })}
      >
        <svg
          fill={isHovered && hoverColor ? hoverColor : fill}
          viewBox="0 0 24 24"
          {...iconSize}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {ICON_REGISTER[type]}
        </svg>
      </div >
    );
  }
);

export default memo(Icon);
