export default defineI18nConfig(() => ({
  numberFormats: {

    en: {
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      short: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 2,
        useGrouping: false,
      },
      currency: {
        style: 'currency',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: 'USD',
      },
    },
    de: {
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      short: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 2,
        useGrouping: false,
      },
      currency: {
        style: 'currency',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: 'EUR',
      },
    },
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
      rangeYear: {
        year: 'numeric',
      },
      rangeMonth: {
        month: '2-digit',
      },
      rangeDay: {
        day: '2-digit',
      },
      long: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
    },
    de: {
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      },
      long: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
      rangeYear: {
        year: 'numeric',
      },
      rangeMonth: {
        month: '2-digit',
      },
      rangeDay: {
        day: '2-digit',
      },
    },
  },
}))
