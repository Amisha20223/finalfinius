// export default function Quests() {
//   return <div className="h-[200vh]">QUESTS</div>
// }
// import React from 'react';
// import NextLink from 'next/link';
// import { SideMenuItem } from '@/components/user/SideMenuItem';
// import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton';
// import { SideMenuUserButton } from '@/components/user/SideMenuUserButton';
// import LogoSVG from '@/public/logo.svg';

// export default function Learn() {
//   return (
//     <div className="h-[200vh]">
//       <SideMenu />
//     </div>
//   );
// }

// export function SideMenu() {
//   return (
//     <div className="flex h-full flex-col justify-between pt-6">
//       <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
//         <NextLink href="/learn">
//           <button className="focus-visible self-start rounded-md w-12 h-12 max-sm:ml-4 sm:max-lg:self-center lg:ml-4">
//             <span className="hidden sm:max-lg:block">
//               <LogoSVG className="w-10 hover:animate-bounce" />
//             </span>
//             <span className="sm:max-lg:hidden">
//               <span className="font-display text-1xl font-bold -tracking-wide text-primary">
//               Investment
//               </span>
//             </span>
//           </button>
//         </NextLink>
//         <div className="flex flex-row  gap-y-20">
//           <SideMenuItem href="/learn" icon="learn" label="Learning Modules" />
//           <SideMenuItem href="/leaderboard" icon="leaderboard" label="Quizzes" />
//           <SideMenuItem href="/quests" icon="quests" label="Chatbot" />
//           <SideMenuItem href="/shop" icon="shop" label="Feedback" />
//         </div>
//       </nav>
//       <div className="space-y-5 border-t-20 px-2 pb-2 pt-20 sm:max-lg:px-2">
//         <SideMenuThemeButton />
//         <SideMenuUserButton />
//       </div>
//     </div>
//   );
// }




import React from 'react';
import NextLink from 'next/link';
import { SideMenuInnerItem } from '@/components/user/SideMenuItem';
import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton';
import { SideMenuUserButton } from '@/components/user/SideMenuUserButton';
import LogoSVG from '@/public/logo.svg';

// Default export for the page component
export default function Learn() {
  return (
    <div className="h-[200vh]">
      <SideMenu />
    </div>
  );
}

// Internal component, not exported
function SideMenu() {
  return (
    <div className="flex h-screen flex-col justify-between pt-6">
      <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
        <NextLink href="/quests">
          <button className="focus-visible self-start rounded-xl max-sm:ml sm:max-lg:self-center lg:ml">
            <span className="hidden sm:max-lg:block">
              <LogoSVG className="w-10 hover:animate-bounce" />
            </span>
            <span className="sm:max-lg:hidden">
              <span className="font-display text-1xl font-normal -tracking-wide text-pink-100">
                Choose your learning Path!
              </span>
            </span>
          </button>
        </NextLink>
        <div className="flex flex-col w-full h-screen justify-center items-center gap-y-10">
          <div className='flex flex-row gap-x-10'>
            <SideMenuInnerItem href="/learning" modulename="budget" icon="learn" label="Blogs/Articles" />
            <SideMenuInnerItem href="/learn" modulename="budget" icon="leaderboard" label="Gamified Learning" />
          </div>
          <div className='flex flex-row gap-x-10'>
            <SideMenuInnerItem href="/videos" modulename="budget" icon="quests" label="Videos" />
            <SideMenuInnerItem href="/shop" icon="shop" modulename="budget" label="Performance Tracker" />
          </div>
        </div>
      </nav>
      {/* Uncomment if needed */}
      {/* <div className="space-y-5 border-t-7 px-2 pb-2 pt-2 sm:max-lg:px-2">
        <SideMenuThemeButton />
        <SideMenuUserButton />
      </div> */}
    </div>
  );
}
