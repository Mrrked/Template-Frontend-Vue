import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes';

export interface ColorScheme {
  colorSchemeName: string,
  colors: {
    50:  string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
    950: string,
  }
}

export const COLOR_SCHEMES: ColorScheme[] = [
    {
      colorSchemeName: 'Main',
      colors: {
        50:  '#fdeced',
        100: '#fbc6c9',
        200: '#f9a1a6',
        300: '#f17c83',
        400: '#f0747a',
        500: '#7A191D',
        600: '#6D151A',
        700: '#620C16',
        800: '#550A13',
        900: '#49070E',
        950: '#150203',
      }
    },
    {
      colorSchemeName: 'Legacy',
      colors: {
        50: '#e6ffe6',
        100: '#ccffcc',
        200: '#99ff99',
        300: '#66ff66',
        400: '#33ff33',
        500: '#009900',
        600: '#007a00',
        700: '#005f00',
        800: '#004d00',
        900: '#003300',
        950: '#001a00',
      }
    },
    {
      colorSchemeName: 'Emerald',
      colors: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
        950: '#022c22',
      }
    },
    {
      colorSchemeName: 'Green',
      colors: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      }
    },
    {
      colorSchemeName: 'Lime',
      colors: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#a3e635',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#3f6212',
        900: '#365314',
        950: '#1a2e05',
      }
    },
    {
      colorSchemeName: 'Orange',
      colors: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
        950: '#431407',
      }
    },
    {
      colorSchemeName: 'Amber',
      colors: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      }
    },
    {
      colorSchemeName: 'Yellow',
      colors: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
        950: '#422006',
      }
    },
    {
      colorSchemeName: 'Teal',
      colors: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e',
      }
    },
    {
      colorSchemeName: 'Cyan',
      colors: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344',
      }
    },
    {
      colorSchemeName: 'Sky',
      colors: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      }
    },
    {
      colorSchemeName: 'Blue',
      colors: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      }
    },
    {
      colorSchemeName: 'Indigo',
      colors: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
        950: '#1e1b4b',
      }
    },
    {
      colorSchemeName: 'Violet',
      colors: {
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
        950: '#2e1065',
      }
    },
    {
      colorSchemeName: 'Purple',
      colors: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
        950: '#3b0764',
      }
    },
    {
      colorSchemeName: 'Fuchsia',
      colors: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
        950: '#4a044e',
      }
    },
    {
      colorSchemeName: 'Pink',
      colors: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
        950: '#500724',
      }
    },
    {
      colorSchemeName: 'Rose',
      colors: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337',
        950: '#4c0519',
      }
    },
]

const stored_color_scheme_name = localStorage.getItem('color_scheme');
const storedColorScheme:ColorScheme|undefined = COLOR_SCHEMES.find((color_scheme) => color_scheme.colorSchemeName === stored_color_scheme_name)

let selectedColorScheme: ColorScheme = COLOR_SCHEMES[0]

if (storedColorScheme) {
    selectedColorScheme = storedColorScheme
}


export const MainPreset = definePreset(Aura, {
    primitive: {
        borderRadius: {
            none: '0',
            xs: '2px',
            sm: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px'
        },
        cityland: {
            50:  '#fdeced',
            100: '#fbc6c9',
            200: '#f9a1a6',
            300: '#f17c83',
            400: '#f0747a',
            500: '#7A191D',
            600: '#6D151A',
            700: '#620C16',
            800: '#550A13',
            900: '#49070E',
            950: '#150203',
        },
        emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
        green: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
        lime: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' },
        red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' },
        orange: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' },
        amber: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' },
        yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
        teal: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' },
        cyan: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' },
        sky: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' },
        blue: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
        indigo: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' },
        violet: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' },
        purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
        fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' },
        pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
        rose: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
        slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
        gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' },
        zinc: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' },
        neutral: { 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a' },
        stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' }
    },
    semantic: {
        transitionDuration: '0.2s',
        focusRing: {
            width: '1px',
            style: 'solid',
            color: '{primary.color}',
            offset: '2px',
            shadow: 'none'
        },
        disabledOpacity: '0.6',
        iconSize: '1rem',
        anchorGutter: '2px',
        primary: {
            // DYNAMIC
            ...selectedColorScheme.colors
            // 50: '{cityland.50}',
            // 100: '{cityland.100}',
            // 200: '{cityland.200}',
            // 300: '{cityland.300}',
            // 400: '{cityland.400}',
            // 500: '{cityland.500}',
            // 600: '{cityland.600}',
            // 700: '{cityland.700}',
            // 800: '{cityland.800}',
            // 900: '{cityland.900}',
            // 950: '{cityland.950}',
        },
        formField: {
            paddingX: '0.75rem',
            paddingY: '0.5rem',
            borderRadius: '{border.radius.md}',
            focusRing: {
                width: '0',
                style: 'none',
                color: 'transparent',
                offset: '0',
                shadow: 'none'
            },
            transitionDuration: '{transition.duration}'
        },
        list: {
            padding: '0.25rem 0.25rem',
            gap: '2px',
            header: {
                padding: '0.5rem 0.75rem 0.25rem 0.75rem'
            },
            option: {
                padding: '0.5rem 0.75rem',
                borderRadius: '{border.radius.sm}'
            },
            optionGroup: {
                padding: '0.5rem 0.75rem',
                fontWeight: '600'
            }
        },
        content: {
            borderRadius: '{border.radius.md}'
        },
        mask: {
            transitionDuration: '0.15s'
        },
        navigation: {
            list: {
                padding: '0.25rem 0.25rem',
                gap: '2px'
            },
            item: {
                padding: '0.5rem 0.75rem',
                borderRadius: '{border.radius.sm}',
                gap: '0.5rem'
            },
            submenuLabel: {
                padding: '0.5rem 0.75rem',
                fontWeight: '600'
            },
            submenuIcon: {
                size: '0.875rem'
            }
        },
        overlay: {
            select: {
                borderRadius: '{border.radius.md}',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            popover: {
                borderRadius: '{border.radius.md}',
                padding: '0.75rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            modal: {
                borderRadius: '{border.radius.xl}',
                padding: '1.25rem',
                shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            },
            navigation: {
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}'
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.4)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.200}',
                    filledBackground: '{surface.50}',
                    filledFocusBackground: '{surface.50}',
                    borderColor: '{surface.400}',
                    hoverBorderColor: '{surface.800}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.400}',
                    color: '{surface.700}',
                    disabledColor: '{surface.500}',
                    placeholderColor: '{surface.500}',
                    floatLabelColor: '{surface.500}',
                    floatLabelFocusColor: '{surface.500}',
                    floatLabelInvalidColor: '{red.400}',
                    iconColor: '{surface.400}',
                    shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                },
                text: {
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    mutedColor: '{surface.500}',
                    hoverMutedColor: '{surface.600}'
                },
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.100}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.100}',
                        activeBackground: '{surface.100}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}',
                            activeColor: '{surface.500}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    },
                    submenuIcon: {
                        color: '{surface.400}',
                        focusColor: '{surface.500}',
                        activeColor: '{surface.500}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                },
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.900}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}'
                },
                highlight: {
                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                },
                mask: {
                    background: 'rgba(0,0,0,0.6)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.800}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{surface.400}',
                    floatLabelInvalidColor: '{red.300}',
                    iconColor: '{surface.400}',
                    shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.300}'
                },
                content: {
                    background: '{surface.900}',
                    hoverBackground: '{surface.800}',
                    borderColor: '{surface.700}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.800}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.800}',
                        activeBackground: '{surface.800}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}',
                            activeColor: '{surface.400}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    },
                    submenuIcon: {
                        color: '{surface.500}',
                        focusColor: '{surface.400}',
                        activeColor: '{surface.400}'
                    }
                }
            }
        }
    },
    components: {
        inputtext: {
            background: '{form.field.background}',
            disabledBackground: '{form.field.disabled.background}',
            filledBackground: '{form.field.filled.background}',
            filledFocusBackground: '{form.field.filled.focus.background}',
            borderColor: '{form.field.border.color}',
            hoverBorderColor: '{form.field.hover.border.color}',
            focusBorderColor: '{form.field.focus.border.color}',
            invalidBorderColor: '{form.field.invalid.border.color}',
            color: '{form.field.color}',
            disabledColor: '{form.field.disabled.color}',
            placeholderColor: '{form.field.placeholder.color}',
            shadow: '{form.field.shadow}',
            paddingX: '{form.field.padding.x}',
            paddingY: '{form.field.padding.y}',
            borderRadius: '{form.field.border.radius}',
            focusRing: {
                width: '{form.field.focus.ring.width}',
                style: '{form.field.focus.ring.style}',
                color: '{form.field.focus.ring.color}',
                offset: '{form.field.focus.ring.offset}',
                shadow: '{form.field.focus.ring.shadow}'
            },
            transitionDuration: '{form.field.transition.duration}',
            sm: {
                fontSize: '0.875rem',
                paddingX: '0.625rem',
                paddingY: '0.375rem'
            },
            lg: {
                fontSize: '1.125rem',
                paddingX: '0.875rem',
                paddingY: '0.625rem'
            }
        },
        fieldset: {
            root: {
                background: '{content.background}',
                borderColor: '{content.color}',
                borderRadius: '{content.border.radius}',
                color: '{content.color}',
                padding: '0 1.125rem 1.125rem 1.125rem',
                transitionDuration: '{transition.duration}'
            },
            legend: {
                background: '{content.background}',
                hoverBackground: '{content.hover.background}',
                color: '{content.color}',
                hoverColor: '{content.hover.color}',
                borderRadius: '{content.border.radius}',
                borderWidth: '1px',
                borderColor: 'transparent',
                padding: '0.5rem 0.75rem',
                gap: '0.5rem',
                fontWeight: '600',
                focusRing: {
                  width: '{focus.ring.width}',
                  style: '{focus.ring.style}',
                  color: '{focus.ring.color}',
                  offset: '{focus.ring.offset}',
                  shadow: '{focus.ring.shadow}'
                }
            },
            toggleIcon: {
                color: '{text.muted.color}',
                hoverColor: '{text.hover.muted.color}'
            },
              content: {
                padding: '0'
            }
        },
        inputgroup: {
            addon: {
                background: '{primary-color}',
                borderColor: '{primary-color}',
                color: '{form.field.icon.color}',
                borderRadius: '{form.field.border.radius}'
            }
        },
        stepper: {
            root: {
                transitionDuration: '{transition.duration}'
            },
            separator: {
                background: '{text.color}',
                activeBackground: '{primary.color}',
                margin: '0 0 0 1.625rem',
                size: '2px'
            },
            step: {
                padding: '0.5rem',
                gap: '1rem'
            },
            stepHeader: {
                padding: '0',
                borderRadius: '{content.border.radius}',
                focusRing: {
                  width: '{focus.ring.width}',
                  style: '{focus.ring.style}',
                  color: '{focus.ring.color}',
                  offset: '{focus.ring.offset}',
                  shadow: '{focus.ring.shadow}'
                },
                gap: '0.5rem'
            },
            stepTitle: {
                color: '{primary.color}',
                activeColor: '{primary.color}',
                fontWeight: '500'
            },
            stepNumber: {
                background: '{content.background}',
                activeBackground: '{primary.color}',
                borderColor: '{primary.color}',
                activeBorderColor: '{primary.color}',
                color: '{primary.color}',
                activeColor: '{content.background}',
                size: '2rem',
                fontSize: '1.143rem',
                fontWeight: '500',
                borderRadius: '50%',
                shadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)'
            },
            steppanels: {
                padding: '0.875rem 0.5rem 1.125rem 0.5rem'
            },
            steppanel: {
                background: '{content.background}',
                color: '{content.color}',
                padding: '0 0 0 1rem'
            }
        },
        divider: {
            root: {
                borderColor: '{content.border.color}'
            },
            content: {
                background: '{content.background}',
                color: '{text.color}'
            },
            horizontal: {
                margin: '1rem 0',
                padding: '0 1rem',
                content: {
                    padding: '0 0.5rem'
                }
            },
            vertical: {
                margin: '0 1rem',
                padding: '0.5rem 0',
                content: {
                    padding: '0.5rem 0'
                }
            }
        },
        togglebutton: {
            root: {
                padding: '0.5rem 1rem',
                borderRadius: '{content.border.radius}',
                gap: '0.5rem',
                fontWeight: '500',
                disabledBackground: '{form.field.disabled.background}',
                disabledBorderColor: '{form.field.disabled.background}',
                disabledColor: '{form.field.disabled.color}',
                invalidBorderColor: '{form.field.invalid.border.color}',
                focusRing: {
                    width: '{focus.ring.width}',
                    style: '{focus.ring.style}',
                    color: '{focus.ring.color}',
                    offset: '{focus.ring.offset}',
                    shadow: '{focus.ring.shadow}'
                },
                transitionDuration: '{form.field.transition.duration}'
            },
            icon: {
                disabledColor: '{form.field.disabled.color}'
            },
            content: {
                left: '0.25rem',
                top: '0.25rem',
                checkedShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)'
            },
            colorScheme: {
                light: {
                    root: {
                        background: '{surface.100}',
                        checkedBackground: '{surface.100}',
                        hoverBackground: '{surface.100}',
                        borderColor: '{surface.100}',
                        color: '{surface.500}',
                        hoverColor: '{surface.700}',
                        checkedColor: '{content.background}',
                        checkedBorderColor: '{surface.100}'
                    },
                    content: {
                        checkedBackground: '{primary.color}'
                    },
                    icon: {
                        color: '{surface.500}',
                        hoverColor: '{surface.700}',
                        checkedColor: '{surface.900}'
                    }
                },
                dark: {
                    root: {
                        background: '{surface.950}',
                        checkedBackground: '{surface.950}',
                        hoverBackground: '{surface.950}',
                        borderColor: '{surface.950}',
                        color: '{surface.400}',
                        hoverColor: '{surface.300}',
                        checkedColor: '{content.background}',
                        checkedBorderColor: '{surface.950}'
                    },
                    content: {
                        checkedBackground: '{primary.color}'
                    },
                    icon: {
                        color: '{surface.400}',
                        hoverColor: '{surface.300}',
                        checkedColor: '{surface.0}'
                    }
                }
            }
        },
        datatable: {
            root: {
                transitionDuration: '{transition.duration}'
            },
            header: {
                background: '{content.background}',
                borderColor: '{datatable.border.color}',
                color: '{content.color}',
                borderWidth: '0 0 1px 0',
                padding: '0.75rem 1rem'
            },
            headerCell: {
                background: '{content.background}',
                hoverBackground: '{content.hover.background}',
                selectedBackground: '{highlight.background}',
                borderColor: '{datatable.border.color}',
                color: '{content.color}',
                hoverColor: '{content.hover.color}',
                selectedColor: '{highlight.color}',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                focusRing: {
                    width: '{focus.ring.width}',
                    style: '{focus.ring.style}',
                    color: '{focus.ring.color}',
                    offset: '-1px',
                    shadow: '{focus.ring.shadow}'
                }
            },
            columnTitle: {
                fontWeight: '600'
            },
            row: {
                background: '{content.background}',
                hoverBackground: '{content.hover.background}',
                selectedBackground: '{highlight.background}',
                color: '{content.color}',
                hoverColor: '{content.hover.color}',
                selectedColor: '{highlight.color}',
                focusRing: {
                    width: '{focus.ring.width}',
                    style: '{focus.ring.style}',
                    color: '{focus.ring.color}',
                    offset: '-1px',
                    shadow: '{focus.ring.shadow}'
                }
            },
            bodyCell: {
                borderColor: '{datatable.border.color}',
                padding: '0.75rem 1rem'
            },
            footerCell: {
                background: '{content.background}',
                borderColor: '{datatable.border.color}',
                color: '{content.color}',
                padding: '0.75rem 1rem'
            },
            columnFooter: {
                fontWeight: '600'
            },
            footer: {
                background: '{content.background}',
                borderColor: '{datatable.border.color}',
                color: '{content.color}',
                borderWidth: '0 0 1px 0',
                padding: '0.75rem 1rem'
            },
            dropPointColor: '{primary.color}',
            columnResizerWidth: '0.5rem',
            resizeIndicator: {
                width: '1px',
                color: '{primary.color}'
            },
            sortIcon: {
                color: '{text.muted.color}',
                hoverColor: '{text.hover.muted.color}'
            },
            loadingIcon: {
                size: '2rem'
            },
            rowToggleButton: {
                hoverBackground: '{content.hover.background}',
                selectedHoverBackground: '{content.background}',
                color: '{text.muted.color}',
                hoverColor: '{text.color}',
                selectedHoverColor: '{primary.color}',
                size: '1.75rem',
                borderRadius: '50%',
                focusRing: {
                    width: '{focus.ring.width}',
                    style: '{focus.ring.style}',
                    color: '{focus.ring.color}',
                    offset: '{focus.ring.offset}',
                    shadow: '{focus.ring.shadow}'
                }
            },
            filter: {
                inlineGap: '0.5rem',
                overlaySelect: {
                    background: '{overlay.select.background}',
                    borderColor: '{overlay.select.border.color}',
                    borderRadius: '{overlay.select.border.radius}',
                    color: '{overlay.select.color}',
                    shadow: '{overlay.select.shadow}'
                },
                overlayPopover: {
                    background: '{overlay.popover.background}',
                    borderColor: '{overlay.popover.border.color}',
                    borderRadius: '{overlay.popover.border.radius}',
                    color: '{overlay.popover.color}',
                    shadow: '{overlay.popover.shadow}',
                    padding: '{overlay.popover.padding}',
                    gap: '0.5rem'
                },
                rule: {
                    borderColor: '{content.border.color}'
                },
                constraintList: {
                    padding: '{list.padding}',
                    gap: '{list.gap}'
                },
                constraint: {
                    focusBackground: '{list.option.focus.background}',
                    selectedBackground: '{list.option.selected.background}',
                    selectedFocusBackground: '{list.option.selected.focus.background}',
                    color: '{list.option.color}',
                    focusColor: '{list.option.focus.color}',
                    selectedColor: '{list.option.selected.color}',
                    selectedFocusColor: '{list.option.selected.focus.color}',
                    separator: {
                        borderColor: '{content.border.color}'
                    },
                    padding: '{list.option.padding}',
                    borderRadius: '{list.option.border.radius}'
                }
            },
            paginatorTop: {
                borderColor: '{datatable.border.color}',
                borderWidth: '0 0 1px 0'
            },
            paginatorBottom: {
                borderColor: '{datatable.border.color}',
                borderWidth: '0 0 1px 0'
            },
            colorScheme: {
                light: {
                    root: {
                        borderColor: '{content.border.color}'
                    },
                    row: {
                        stripedBackground: '{surface.50}'
                    },
                    bodyCell: {
                        selectedBorderColor: '{primary.100}'
                    }
                },
                dark: {
                    root: {
                        borderColor: '{surface.800}'
                    },
                    row: {
                        stripedBackground: '{surface.950}'
                    },
                    bodyCell: {
                        selectedBorderColor: '{primary.900}'
                    }
                }
            }
        },
        dialog: {
            root: {
                background: '{overlay.modal.background}',
                borderColor: '{overlay.modal.border.color}',
                color: '{overlay.modal.color}',
                borderRadius: '{overlay.modal.border.radius}',
                shadow: '{overlay.modal.shadow}'
            },
            header: {
                padding: '{overlay.modal.padding}',
                gap: '0.5rem'
            },
            title: {
                fontSize: '1.25rem',
                fontWeight: '600'
            },
            content: {
                padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
            },
            footer: {
                padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
                gap: '0.5rem'
            }
        }
    }
});