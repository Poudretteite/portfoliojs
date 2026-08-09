export function getLocalizedValue(
  field: any[],
  lang: 'pl' | 'en'
) {
  return field?.find(
    (item) => item.language === lang
  )?.value || '';
}