document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-rotate');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.style.transform = 'rotate(0deg) translateY(0)';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach((c, index) => {
                if (index === 0) {
                    c.style.transform = 'rotate(-15deg) translateX(8px) translateY(8px)';
                } else if (index === 1) {
                    c.style.transform = 'rotate(-5deg) translateX(4px) translateY(4px)';
                } else {
                    c.style.transform = 'rotate(5deg)';
                }
            });
        });
    });

    document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
});
tailwind.config = {
theme: {
    extend: {
        colors: {
            primary: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#014339',
                700: '#0369a1',
                800: '#014339',
                900: '#014339',
            },
            secondary: {
                50: '#f5f3ff',
                100: '#ede9fe',
                200: '#ddd6fe',
                300: '#c4b5fd',
                400: '#a78bfa',
                500: '#8b5cf6',
                600: '#7c3aed',
                700: '#6d28d9',
                800: '#5b21b6',
                900: '#4c1d95',
            }
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Poppins', 'sans-serif']
        },
        animation: {
            'accordion-open': 'accordion-open 0.3s ease-out',
            'accordion-close': 'accordion-close 0.3s ease-out'
        },
        keyframes: {
            'accordion-open': {
                '0%': { height: '0', opacity: '0' },
                '100%': { height: 'var(--accordion-height)', opacity: '1' }
            },
            'accordion-close': {
                '0%': { height: 'var(--accordion-height)', opacity: '1' },
                '100%': { height: '0', opacity: '0' }
            }
        }
    }
}
}
