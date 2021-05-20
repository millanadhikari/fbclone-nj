import {useSession} from 'next-auth/client'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline"

import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon,
} from "@heroicons/react/solid"
import SidebarRow from './SidebarRow';


function Sidebar() {
    const [session, loading] = useSession();
    return (
        <div className="p-2 mt-5">
           <SidebarRow src={session.user.image} title={session.user.name} />
           <SidebarRow Icon={UserIcon} title="Friends" />
           <SidebarRow Icon={UserGroupIcon} title="Groups" />
           <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
           <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
           <SidebarRow Icon={CalendarIcon} title="Events" />
           <SidebarRow Icon={ClockIcon} title="Memories" />
           <SidebarRow animate Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}




export default Sidebar
