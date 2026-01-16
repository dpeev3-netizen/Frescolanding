import FrescoLandingPageFinal from './imports/FrescoLandingPageFinal';
import IPhone16ProMax1 from './imports/IPhone16ProMax1';
import { useEffect, useState } from 'react';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [mobileScale, setMobileScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateMobileScale = () => {
      const viewportWidth = window.innerWidth;
      const designWidth = 440;
      
      // Calculate scale factor for mobile version (works for all sizes including 344px)
      const newScale = viewportWidth / designWidth;
      setMobileScale(newScale);
    };

    updateMobileScale();
    window.addEventListener('resize', updateMobileScale);
    return () => window.removeEventListener('resize', updateMobileScale);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="size-full overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* Mobile version - visible on mobile, hidden on desktop (lg breakpoint) */}
      <div className="block lg:hidden">
        <div 
          className="w-full bg-white"
          style={{
            height: `${4432 * mobileScale}px`,
          }}
        >
          <div 
            className="bg-white relative"
            style={{
              width: '440px',
              height: '4432px',
              transformOrigin: 'top left',
              transform: `scale(${mobileScale})`,
            }}
          >
            <IPhone16ProMax1 onButtonClick={handleOpenModal} />
          </div>
        </div>
      </div>
      
      {/* Desktop version - hidden on mobile, visible on desktop (lg breakpoint and above) */}
      <div className="hidden lg:block">
        <FrescoLandingPageFinal onButtonClick={handleOpenModal} />
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}