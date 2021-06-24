import { initSidebar } from '../../components/Sidebar';
import { LinkMenuItemDefinition } from '../../components/Sidebar/menu/LinkMenuItem';
import { SubMenuItemDefinition } from '../../components/Sidebar/menu/SubMenuItem';
import { PageExplorerMenuItemDefinition } from '../../components/Sidebar/menu/PageExplorerMenuItem';

import { CustomBrandingModuleDefinition } from '../../components/Sidebar/modules/CustomBranding';
import { WagtailBrandingModuleDefinition } from '../../components/Sidebar/modules/WagtailBranding';
import { SearchModuleDefinition } from '../../components/Sidebar/modules/Search';
import { MainMenuModuleDefinition } from '../../components/Sidebar/modules/MainMenu';
import { SidebarPreferencesDefinition } from '../../components/Sidebar/SidebarPreferences.ts';

window.telepath.register('wagtail.sidebar.SidebarPreferences', SidebarPreferencesDefinition);
window.telepath.register('wagtail.sidebar.LinkMenuItem', LinkMenuItemDefinition);
window.telepath.register('wagtail.sidebar.SubMenuItem', SubMenuItemDefinition);
window.telepath.register('wagtail.sidebar.PageExplorerMenuItem', PageExplorerMenuItemDefinition);

window.telepath.register('wagtail.sidebar.WagtailBrandingModule', WagtailBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.CustomBrandingModule', CustomBrandingModuleDefinition);
window.telepath.register('wagtail.sidebar.SearchModule', SearchModuleDefinition);
window.telepath.register('wagtail.sidebar.MainMenuModule', MainMenuModuleDefinition);

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
});
