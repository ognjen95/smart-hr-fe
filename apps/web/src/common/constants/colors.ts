import { ColorMapper } from "~common/types/types"

export const CARD_COLOR_MAPPER = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    info: 'bg-info',
    dark: 'bg-dark',
    light: 'bg-light',
    transparent: 'bg-transparent',
  }

  export const EMPLOYMENT_BADGE_COLOR_MAPPER: Record<string, ColorMapper> = {
    'employed': 'daisy-badge-success',
    'interviewing': 'daisy-badge-warning',
    'archived': 'daisy-badge-error',
  }