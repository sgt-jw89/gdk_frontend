export const getOSMEditorURL = (nodeId: number): string => {
  const mapcompleteUrl = 'https://mapcomplete.org';
  const params = new URLSearchParams();
  params.set(
    'userlayout',
    'https://raw.githubusercontent.com/technologiestiftung/MapComplete-ThemeHelper/024ef9134987e0ead34f261a6270d5572c4d31a4/OSM-Berlin-Themes/man_made-walter_well-status-checker/theme.json'
  );
  params.set('language', 'de');
  const selectedPump = `#node/${nodeId}`;
  return `${mapcompleteUrl}?${params.toString()}${selectedPump}`;
};
