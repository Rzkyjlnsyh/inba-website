import React, { useEffect, useRef } from 'react';

const StockTicker: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mencegah duplikasi script saat re-render
    if (containerRef.current && containerRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = "              ";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "IDX:COMPOSITE",
          "title": "IHSG"
        },
        {
          "proName": "IDX:LQ45",
          "title": "LQ45"
        },
        {
          "proName": "IDX:BBCA",
          "title": "BBCA"
        },
        {
          "proName": "IDX:BBRI",
          "title": "BBRI"
        },
        {
          "proName": "IDX:BMRI",
          "title": "BMRI"
        },
        {
          "proName": "IDX:TLKM",
          "title": "TLKM"
        },
        {
          "proName": "IDX:ASII",
          "title": "ASII"
        },
        {
          "proName": "IDX:ADRO",
          "title": "ADRO"
        },
        {
          "proName": "IDX:GOTO",
          "title": "GOTO"
        },
        {
          "proName": "FX_IDC:USDIDR",
          "title": "USD/IDR"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false, // Menggunakan background solid agar konsisten
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "id",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-[46px] z-50 relative border-b border-border-color">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default StockTicker;
