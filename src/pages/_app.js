import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

export default app => {
    app.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false,
            },
        },
    });
};
