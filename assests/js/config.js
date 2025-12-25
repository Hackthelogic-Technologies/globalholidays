const ENV_CONFIG = {
    // EmailJS Configuration
    EMAILJS: {
        SERVICE_ID: 'service_q3fnbcm',
        TEMPLATE_ID: 'template_2usmrbk',
        PUBLIC_KEY: 'BtJbPz8o578STsT2Q'
    },
    // Google Analytics Configuration
    GA: {
        MEASUREMENT_ID: 'G-VMWERFWQWL'
    },
    // WhatsApp Configuration
    WHATSAPP: {
        NUMBER: '919940700442'
    }
};

// Simple logic to inject GA if needed across pages
if (typeof window !== 'undefined' && ENV_CONFIG.GA.MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ENV_CONFIG.GA.MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', ENV_CONFIG.GA.MEASUREMENT_ID);
}
