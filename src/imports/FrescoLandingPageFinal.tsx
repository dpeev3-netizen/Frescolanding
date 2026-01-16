import svgPaths from "./svg-8xcwjsrjkq";
import imgFreskoLogoTransparentFooter from "figma:asset/a06f7bd756d15b8b0837a3f5d88fea969e13b7b1.png";
import imgPartnerDhl from "figma:asset/b6cba448405a83d911486481e46daf97e88460f3.png";
import imgPartnerSofiamed from "figma:asset/23df774c92bba4b3bd71ae227bd9184b841ffa2e.png";
import imgPartnerBussCentVitosha from "figma:asset/b86e636b2ac395cf0ae293a84a83cbd65f4face5.png";
import imgPartnerMondelez from "figma:asset/c8c951a919c2bdb59d1ad23d9ae4742486636ee7.png";
import imgPartnerFantastiko from "figma:asset/a4f90d295d613760167279743916dcb63501e835.png";
import imgPartnerAthletic from "figma:asset/6ff69db05231d85936fce9ad991d9be283dd01e2.png";
import imgPartnerPlayground from "figma:asset/d0b0d3b90a150c04852b3a7e6a831758e2334c0a.png";
import imgMainServiceIconDeepClean from "figma:asset/1e5fc1183d6842a023492399833e7b8accda42a2.png";
import imgMainServiceIconSubscribtionClean from "figma:asset/9b1cc35b32654b26a0f6d14822b7396e8f5df6cc.png";
import imgFrescoSocialIconInstagram from "figma:asset/930f0509c8f6f0fb076278c752e72561d8c3bd9b.png";
import imgFrescoSocialIconFacebook from "figma:asset/d5e0ec6ee1ed2c2ba55bb19aa97674ca67645610.png";
import imgBackgroundHeroImage from "figma:asset/0563dd95218496c5b23deebe3b52cb01a5902afb.png";
import imgHeroImage from "figma:asset/2337b9e2ca64ba21f44760583ec551409abef921.png";
import img4thSectionImg3 from "figma:asset/6b9ecb3f64e5fce00da4b38e05509014d469c2e2.png";
import img4thSectionImg1 from "figma:asset/c0d689a3250e4a2d3cbdc5df185919bd128c2659.png";
import img4thSectionImg2 from "figma:asset/16fd1356bf1105b5f898bdbfdf4b382906e5af19.png";
import img5thSectionDocumentIcon from "figma:asset/f16b0f34546cc9d7668fa602134ef8b5abcf0060.png";
import img5thSectionHouseIcon from "figma:asset/01004047fded41289af36cccf939e63390847d73.png";
import img5thSectionPhoneIcon from "figma:asset/307e4608fe3ef7e70e56c76f4cf9a4a92a527ed1.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FrescoLandingPageFinalProps {
  onButtonClick?: () => void;
}

export default function FrescoLandingPageFinal({ onButtonClick }: FrescoLandingPageFinalProps = {}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const designWidth = 1440;
      
      // Calculate scale factor for all viewport sizes
      const newScale = viewportWidth / designWidth;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <div 
        className="bg-white relative mx-auto"
        style={{
          width: '1440px',
          height: '4328px',
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
        }}
        data-name="FRESCO LANDING PAGE FINAL"
      >
      {/* Background sections */}
      <div className="absolute h-[765px] left-0 top-[2091px] w-[1440px]" data-name="4th section background gradient">
        <div className="absolute bg-gradient-to-b from-[8.484%] from-[rgba(24,81,57,0.6)] inset-0 to-[92.876%] to-[rgba(54,183,129,0)]" />
      </div>
      <motion.div 
        className="absolute h-[536px] left-0 top-[825px] w-[1440px]" 
        data-name="2nd section background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute bg-white inset-0 shadow-[0px_-10px_40px_10px_rgba(0,0,0,0.4)]" data-name="2nd section background" />
      </motion.div>
      <div className="absolute h-[300px] left-0 top-[1361px] w-[1440px]" data-name="3rd section tob backround">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none h-[300px] rotate-[180deg] w-[1440px]">
            <div className="bg-[#91cea2] shadow-[0px_10px_40px_3px_rgba(0,0,0,0.4)] size-full" />
          </div>
        </div>
      </div>
      <div className="absolute h-[326px] left-0 top-[4002px] w-[1440px]" data-name="footer section">
        <div className="absolute bg-[#072422] inset-0" data-name="footer section" />
      </div>

      {/* Service cards with animations */}
      <motion.div 
        className="absolute h-[280px] left-[163px] top-[1478px] w-[500px]" 
        data-name="3rd section button 1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="absolute bg-[#072422] inset-0 shadow-[0px_10px_40px_10px_rgba(0,0,0,0.45)] transition-all" />
      </motion.div>
      <motion.div 
        className="absolute h-[280px] left-[755px] top-[1479px] w-[500px]" 
        data-name="3rd section button 2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="absolute bg-[#072422] inset-0 shadow-[0px_10px_40px_10px_rgba(0,0,0,0.45)] transition-all" />
      </motion.div>

      {/* 4th section image backgrounds with animations */}
      <motion.div 
        className="absolute left-[170px] size-[266px] top-[2365px]" 
        data-name="4th section image bg 3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute bg-[#072422] inset-0 shadow-[0px_10px_40px_10px_rgba(0,0,0,0.45)]" />
      </motion.div>
      <motion.div 
        className="absolute h-[266px] left-[593px] top-[2365px] w-[267px]" 
        data-name="4th section image bg 2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute bg-[#072422] inset-0 shadow-[0px_10px_40px_10px_rgba(0,0,0,0.45)]" data-name="4th section image bg 2" />
      </motion.div>
      <motion.div 
        className="absolute left-[1017px] size-[266px] top-[2365px]" 
        data-name="4th section image bg 1"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute bg-[#072422] inset-0 shadow-[0px_10px_40px_10px_rgba(0,0,0,0.45)]" data-name="4th section image bg 1" />
      </motion.div>

      {/* Footer logo */}
      <div className="absolute left-[171px] size-[148px] top-[4187px]" data-name="fresko logo transparent footer">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreskoLogoTransparentFooter} />
      </div>

      {/* Section headers with animations */}
      <motion.div 
        className="absolute h-[44px] left-[439px] top-[2158px] w-[558px]" 
        data-name="4th section header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[normal] text-[#f6fcf2] text-[36px] text-shadow-[0px_4px_10px_rgba(0,0,0,0.35)] tracking-[1.8px] whitespace-pre-wrap">Защо да изберете FRESCO</p>
      </motion.div>
      <motion.div 
        className="absolute h-[44px] left-[521px] top-[2891px] w-[383px]" 
        data-name="5th section header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[normal] text-[#072422] text-[36px] text-shadow-[0px_4px_10px_rgba(0,0,0,0.35)] tracking-[1.8px] whitespace-pre-wrap">Процесът FRESCO</p>
      </motion.div>

      {/* Service titles */}
      <motion.div 
        className="absolute h-[78px] left-[227px] top-[1806px] w-[391px]" 
        data-name="Основно Почистване"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-[32px] text-center tracking-[3.2px] whitespace-pre-wrap">Основно Почистване</p>
      </motion.div>

      {/* Feature descriptions */}
      <motion.div 
        className="absolute h-[54px] left-[100px] top-[2256px] w-[391px]" 
        data-name="Не прекъсваме работния процес"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-[22px] text-center tracking-[2.2px] whitespace-pre-wrap">
          <p className="mb-0">Не прекъсваме</p>
          <p>работния процес</p>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[80px] left-[163px] top-[2683px] w-[266px]" 
        data-name="Работим в извън работни часове или според вашия график. Без забавяне, без неудобства."
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] text-center tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">{`Работим в извън работни часове или според вашия график. Без забавяне, `}</p>
          <p>без неудобства.</p>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[80px] left-[587px] top-[2683px] w-[266px]" 
        data-name="Проверени процедури, обучен екип и контрол на качеството  за резултати, които говорят сами."
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] text-center tracking-[1.6px] whitespace-pre-wrap">Проверени процедури, обучен екип и контрол на качеството – за резултати, които говорят сами.</p>
      </motion.div>
      <motion.div 
        className="absolute h-[100px] left-[1004px] top-[2683px] w-[281px]" 
        data-name="Служителите ни преминават през проверки и обучения, за да работят безопасно в чувствителни среди."
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] text-center tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">Служителите ни преминават през проверки и обучения, за да работят езопасно в чувствителни среди.</p>
          <p>&nbsp;</p>
        </div>
      </motion.div>

      {/* Process steps descriptions */}
      <motion.div 
        className="absolute h-[149px] left-[812px] top-[3116px] w-[294px]" 
        data-name="Веднага щом изпратите заявка Ви звъним и записваме час за оглед"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">Веднага щом изпратите заявка Ви звъним и записваме час за оглед</p>
          <p>&nbsp;</p>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[115px] left-[907px] top-[2262px] w-[473px]" 
        data-name="Доверен, проверен и дискретен персонал"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-[22px] text-center tracking-[2.2px] whitespace-pre-wrap">
          <p className="mb-0">Доверен, проверен</p>
          <p>и дискретен персонал</p>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[115px] left-[481px] top-[2256px] w-[473px]" 
        data-name="Гарантирано качество всеки път"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-[22px] text-center tracking-[2.2px] whitespace-pre-wrap">
          <p className="mb-0">Гарантирано качество</p>
          <p>всеки път</p>
        </div>
      </motion.div>

      {/* Process step 1 */}
      <motion.div 
        className="absolute h-[115px] left-[654px] top-[3063px] w-[473px]" 
        data-name="Разговор"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ol className="absolute block font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-0 leading-[0] list-decimal text-[#072422] text-[24px] text-center tracking-[2.4px]" start="1">
          <li className="list-inside ms-[36px] whitespace-pre-wrap">
            <span className="leading-[normal]">Разговор</span>
          </li>
        </ol>
      </motion.div>
      <motion.div 
        className="absolute h-[149px] left-[813px] top-[3354px] w-[265px]" 
        data-name="Запознаваме се с мястото и пространството, което искате да чистим"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] tracking-[1.6px] whitespace-pre-wrap">Запознаваме се с мястото и пространството, което искате да чистим</p>
      </motion.div>

      {/* Process step 2 */}
      <motion.div 
        className="absolute h-[115px] left-[633px] top-[3301px] w-[473px]" 
        data-name="Оглед"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ol className="absolute block font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-0 leading-[0] list-decimal text-[#072422] text-[24px] text-center tracking-[2.4px]" start="2">
          <li className="list-inside ms-[36px] whitespace-pre-wrap">
            <span className="leading-[normal]">Оглед</span>
          </li>
        </ol>
      </motion.div>
      <motion.div 
        className="absolute h-[149px] left-[805px] top-[3599px] w-[265px]" 
        data-name="Изготвяме ви персонална оферта, съобразена с вашите желания и нужди"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#072422] text-[16px] tracking-[1.6px] whitespace-pre-wrap">Изготвяме ви персонална оферта, съобразена с вашите желания и нужди</p>
      </motion.div>

      {/* Footer content */}
      <div className="absolute h-[48px] left-[190px] top-[4118px] w-[265px]" data-name='гр. София, ул. "Въстаник" 2, ет. 1, офис 1'>
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[16px] text-white tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">гр. София, ул. &quot;Въстаник&quot; 2, ет. 1, офис 1</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="absolute h-[48px] left-[576px] top-[4118px] w-[265px]" data-name="Понеделник до Петък 08:00 – 20:00">
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[16px] text-center text-white tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">
            Понеделник до Петък
            <br aria-hidden="true" />
            08:00 – 20:00
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="absolute h-[120px] left-[944px] top-[4094px] w-[265px]" data-name="+359 896 806 283 office@fresco-bg.com">
        <div className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[16px] text-right text-white tracking-[1.6px] whitespace-pre-wrap">
          <p className="mb-0">
            <span>
              <br aria-hidden="true" />
            </span>
            <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid underline" href="tel:00359896806283">
              <span className="[text-decoration-skip-ink:none] decoration-solid" href="tel:00359896806283">
                +359 896 806 283
              </span>
            </a>
            <span>
              <br aria-hidden="true" />
            </span>
            <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid underline" href="mailto:office@fresco-bg.com%C2%A0">
              <span className="[text-decoration-skip-ink:none] decoration-solid" href="mailto:office@fresco-bg.com%C2%A0">
                office@fresco-bg.com
              </span>
            </a>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>

      {/* Process step 3 */}
      <motion.div 
        className="absolute h-[115px] left-[639px] top-[3546px] w-[473px]" 
        data-name="Оферта"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ol className="absolute block font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-0 leading-[0] list-decimal text-[#072422] text-[24px] text-center tracking-[2.4px]" start="3">
          <li className="list-inside ms-[36px] whitespace-pre-wrap">
            <span className="leading-[normal]">Оферта</span>
          </li>
        </ol>
      </motion.div>

      {/* Footer headers */}
      <div className="absolute h-[115px] left-[-4px] top-[4072px] w-[473px]" data-name="Адрес:">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[20px] text-center text-white tracking-[2px] whitespace-pre-wrap">Адрес:</p>
      </div>
      <div className="absolute h-[115px] left-[483px] top-[4072px] w-[473px]" data-name="Работно Време:">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[20px] text-center text-white tracking-[2px] whitespace-pre-wrap">Работно Време:</p>
      </div>
      <div className="absolute h-[115px] left-[912px] top-[4072px] w-[473px]" data-name="Контакти:">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[20px] text-center text-white tracking-[2px] whitespace-pre-wrap">Контакти:</p>
      </div>

      <motion.div 
        className="absolute h-[78px] left-[838px] top-[1806px] w-[352px]" 
        data-name="Абонаментно Почистване"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-[32px] text-center tracking-[3.2px] whitespace-pre-wrap">Абонаментно Почистване</p>
      </motion.div>

      {/* Partner section header */}
      <motion.div 
        className="absolute h-[27px] left-[615px] top-[878px] w-[223px]" 
        data-name="Довериха ни се:"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-0 leading-[normal] text-[#072422] text-sm md:text-lg lg:text-[22px] tracking-[1.4px] md:tracking-[1.8px] lg:tracking-[2.2px] whitespace-nowrap">Довериха ни се:</p>
      </motion.div>

      {/* Partner logos with staggered animations */}
      <motion.div 
        className="absolute left-[74px] size-[350px] top-[856px]" 
        data-name="partner dhl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="block max-w-none size-full" height="350" src={imgPartnerDhl} width="350" />
      </motion.div>
      <motion.div 
        className="absolute left-[366px] size-[349px] top-[857px]" 
        data-name="partner sofiamed"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerSofiamed} />
      </motion.div>
      <motion.div 
        className="absolute left-[667px] size-[349px] top-[857px]" 
        data-name="partner buss.cent.vitosha"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerBussCentVitosha} />
      </motion.div>
      <motion.div 
        className="absolute left-[228px] size-[349px] top-[1031px]" 
        data-name="partner mondelez"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerMondelez} />
      </motion.div>
      <motion.div 
        className="absolute h-[349px] left-[541px] top-[1032px] w-[348px]" 
        data-name="partner fantastiko"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerFantastiko} />
      </motion.div>
      <motion.div 
        className="absolute left-[841px] size-[350px] top-[1048px]" 
        data-name="partner athletic"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerAthletic} />
      </motion.div>
      <motion.div 
        className="absolute left-[1006px] size-[350px] top-[856px]" 
        data-name="partner playground"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPartnerPlayground} />
      </motion.div>

      {/* Service icons with animations */}
      <motion.div 
        className="absolute left-[261px] size-[317px] top-[1460px]" 
        data-name="main service icon deep clean"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainServiceIconDeepClean} />
      </motion.div>
      <motion.div 
        className="absolute left-[812px] size-[404px] top-[1410px]" 
        data-name="main service icon subscribtion clean"
        initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainServiceIconSubscribtionClean} />
      </motion.div>

      {/* Social icons with hover animations */}
      <motion.div 
        className="absolute left-[1147px] size-[63px] top-[4230px]" 
        data-name="fresco social icon instagram"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrescoSocialIconInstagram} />
      </motion.div>
      <motion.div 
        className="absolute left-[1087px] size-[63px] top-[4231px]" 
        data-name="fresco social icon facebook"
        whileHover={{ scale: 1.15, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrescoSocialIconFacebook} />
      </motion.div>

      {/* CTA buttons with animations */}
      <motion.a 
        href="https://fresco-bg.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute h-[70px] left-[490px] top-[1938px] w-[460px] cursor-pointer" 
        data-name="3rd section cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -3 }}
      >
        <div className="absolute bg-[#91cea2] inset-0 rounded-[2025px] shadow-[0px_3px_20px_2px_rgba(0,0,0,0.3)] transition-all" />
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold flex items-center justify-end inset-0 leading-[normal] text-[#072422] text-[24px] tracking-[2.4px] whitespace-nowrap pr-[15%]">КЪМ НАШИЯТ УЕБСАЙТ</p>
        <motion.div 
          className="absolute inset-[51.67%_9.5%_48.33%_87.25%]"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="absolute inset-[-8.66px_0_-8.66px_-15.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.3205">
              <path d={svgPaths.p23537280} fill="var(--stroke-0, #072422)" id="Arrow 1" />
            </svg>
          </div>
        </motion.div>
      </motion.a>

      {/* Hero background and images */}
      <div className="absolute h-[728px] left-0 top-[98px] w-[1440px]" data-name="background hero image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.img 
            alt="" 
            className="absolute h-[127.34%] left-[-0.03%] max-w-none top-0 w-[115.34%]" 
            src={imgBackgroundHeroImage} 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <div className="absolute h-[728px] left-0 top-[98px] w-[1440px]" data-name="background image overlay">
        <div className="absolute bg-[rgba(24,81,57,0.3)] inset-0" />
      </div>
      <div className="absolute h-[728px] left-0 top-[98px] w-[1069px]" data-name="gradient overlay">
        <div className="absolute bg-gradient-to-r from-[55.769%] from-[rgba(24,81,57,0.6)] inset-0 to-[rgba(54,183,129,0)]" />
      </div>
      <motion.div 
        className="absolute h-[811px] left-[710px] top-[14px] w-[724px]" 
        data-name="hero image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.94%] left-[-0.02%] max-w-none top-0 w-[100.03%]" src={imgHeroImage} />
        </div>
      </motion.div>

      {/* Top navigation */}
      <motion.div 
        className="absolute h-[100px] left-0 top-0 w-[1440px]" 
        data-name="top section - menu&logo"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="absolute bg-[#092422] inset-0 shadow-[0px_5px_40px_10px_rgba(0,0,0,0.4)]" />
      </motion.div>
      <motion.div 
        className="absolute left-[54px] size-[200px] top-[-50px]" 
        data-name="fresko logo transparent header"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreskoLogoTransparentFooter} />
      </motion.div>
      <motion.div 
        className="absolute h-[25px] left-[1338px] top-[37px] w-[40px]" 
        data-name="burger menu"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="absolute bg-[#f6fbf2] inset-[0_0_88%_0]"
          animate={{ scaleX: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute bg-[#f6fbf2] inset-[44%_0]" />
        <motion.div 
          className="absolute bg-[#f6fbf2] inset-[88%_0_0_0]"
          animate={{ scaleX: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        />
      </motion.div>

      {/* Hero text content with animations */}
      <motion.div 
        className="absolute h-[85px] left-[116px] top-[213px] w-[659px]" 
        data-name="header"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-0 leading-[normal] text-[#f6fcf2] text-[70px] text-shadow-[0px_4px_10px_rgba(0,0,0,0.35)] tracking-[3.5px] whitespace-pre-wrap">ВИНАГИ ЧИСТО</p>
      </motion.div>
      <motion.div 
        className="absolute h-[176px] left-[120px] top-[332px] w-[607px]" 
        data-name="subheader"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#f6fcf2] text-[0px] text-[36px] tracking-[1.8px] whitespace-nowrap whitespace-pre">
          <p className="mb-0">
            <span className="font-['Montserrat:Bold',sans-serif] font-bold">FRESCO</span>
            <span>{` доставя безупречни `}</span>
          </p>
          <p className="mb-0">{`резултати, и не пречи на `}</p>
          <p className="mb-0">работния процес</p>
          <p>&nbsp;</p>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[44px] left-[135px] top-[683px] w-[340px]" 
        data-name="18 години с Вас!"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p className="absolute font-['Montserrat:SemiBold_Italic',sans-serif] font-semibold inset-0 italic leading-[normal] text-[#f6fcf2] text-[36px] tracking-[1.8px] whitespace-pre">18 години с Вас!</p>
      </motion.div>

      {/* Hero CTA button */}
      <motion.div 
        className="absolute h-[60px] left-[119px] top-[525px] w-[621px] cursor-pointer" 
        data-name="cta 1 - hero section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ scale: 1.05, y: -3 }}
        onClick={onButtonClick}
      >
        <div className="absolute bg-[#91cea2] inset-0 rounded-[2025px] shadow-[0px_3px_30px_3px_rgba(0,0,0,0.4)] transition-all" />
        <p className="absolute bottom-[26.67%] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[29.95%] right-[29.79%] text-[#072422] text-[24px] top-1/4 tracking-[2.4px] whitespace-nowrap text-left m-[0px]">КЪМ ЧИСТОТАТА</p>
        <motion.div 
          className="absolute inset-[48.33%_5.48%_51.67%_92.43%]"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="absolute inset-[-8.66px_0_-8.66px_-15.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.3205">
              <path d={svgPaths.p23537280} fill="var(--stroke-0, #072422)" id="Arrow 1" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        className="absolute h-[60px] left-[520px] top-[3821px] w-[400px] cursor-pointer" 
        data-name="5th section cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -3 }}
        onClick={onButtonClick}
      >
        <div className="absolute bg-[#91cea2] inset-0 rounded-[2025px] shadow-[0px_3px_20px_2px_rgba(0,0,0,0.3)] transition-all" />
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold inset-[28.33%_13.25%_23.33%_14.5%] leading-[normal] text-[#072422] text-[24px] tracking-[2.4px] whitespace-pre-wrap">ИЗПРАТИ ЗАЯВКА</p>
        <motion.div 
          className="absolute inset-[51.67%_8.75%_48.33%_88%]"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="absolute inset-[-8.66px_0_-8.66px_-15.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.3205">
              <path d={svgPaths.p23537280} fill="var(--stroke-0, #072422)" id="Arrow 1" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* 4th section images */}
      <motion.div 
        className="absolute h-[266px] left-[1006px] top-[2350px] w-[262px]" 
        data-name="4th section img 3"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.13%] max-w-none top-0 w-[106.36%]" src={img4thSectionImg3} />
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[266px] left-[156px] top-[2350px] w-[265px]" 
        data-name="4th section img 1"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.12%] left-0 max-w-none top-[-0.06%] w-[105.28%]" src={img4thSectionImg1} />
        </div>
      </motion.div>
      <motion.div 
        className="absolute left-[580px] size-[266px] top-[2350px]" 
        data-name="4th section img 2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4thSectionImg2} />
      </motion.div>

      {/* Process icons with animations */}
      <motion.div 
        className="absolute left-[400px] size-[161px] top-[3049px]" 
        data-name="5th section icon bg 1"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 161">
          <circle cx="80.5" cy="80.5" fill="var(--fill-0, #072422)" id="Ellipse 1" r="80.5" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute h-[160px] left-[400px] top-[3285px] w-[161px]" 
        data-name="5th section icon bg 2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 160">
          <ellipse cx="80.5" cy="80" fill="var(--fill-0, #072422)" id="Ellipse 2" rx="80.5" ry="80" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute left-[400px] size-[161px] top-[3520px]" 
        data-name="5th section icon bg 3"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 161">
          <circle cx="80.5" cy="80.5" fill="var(--fill-0, #072422)" id="Ellipse 1" r="80.5" />
        </svg>
      </motion.div>

      {/* Process step icons */}
      <motion.div 
        className="absolute h-[139px] left-[408px] top-[3530px] w-[145.619px]" 
        data-name="5th section document icon"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5thSectionDocumentIcon} />
      </motion.div>
      <motion.div 
        className="absolute h-[122px] left-[416px] top-[3301px] w-[128px]" 
        data-name="5th section house icon"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5thSectionHouseIcon} />
      </motion.div>
      <motion.div 
        className="absolute h-[122px] left-[413px] top-[3069px] w-[128px]" 
        data-name="5th section phone icon"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5thSectionPhoneIcon} />
      </motion.div>

      {/* Process arrows with animations */}
      <motion.div 
        className="absolute h-[257px] left-[594px] top-[3122px] w-[132px]" 
        data-name="arrow 1"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-[0.58%_1.39%_3.31%_0]">
          <div className="absolute inset-[-0.61%_-1.15%_-3.29%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.664 256.618">
              <path d={svgPaths.p3c990c00} fill="var(--stroke-0, #072422)" id="Vector 1" />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="absolute h-[258px] left-[229px] top-[3368px] w-[133px]" 
        data-name="arrow 2"
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute flex inset-[0.78%_0.63%_3.49%_1.5%] items-center justify-center">
          <div className="flex-none h-[247px] rotate-[180deg] scale-y-[-100%] w-[130.164px]">
            <div className="relative size-full">
              <div className="absolute inset-[-0.61%_-1.15%_-3.29%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.664 256.618">
                  <path d={svgPaths.p3c990c00} fill="var(--stroke-0, #072422)" id="Vector 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header CTA button */}
      <motion.div 
        className="absolute h-[50px] left-[1095px] top-[25px] w-[300px] cursor-pointer" 
        data-name="header cta button"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onButtonClick}
      >
        <div className="absolute bg-[#91cea2] inset-0 rounded-[2025px] shadow-[0px_3px_20px_2px_rgba(0,0,0,0.3)] transition-all" />
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold flex items-center justify-center inset-0 leading-[normal] text-[#072422] text-[16px] tracking-[1.8px] whitespace-nowrap pr-[8%]">НАПРАВИ ЗАПИТВАНЕ</p>
        <motion.div 
          className="absolute inset-[45%_8%_45%_88%]"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="absolute inset-[-8.66px_0_-8.66px_-15.38%] scale-[0.6]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.3205">
              <path d={svgPaths.p23537280} fill="var(--stroke-0, #072422)" id="Arrow 1" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}