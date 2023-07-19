interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Placement Officer', 'Student', 'Faculty'],
  tenantName: 'Organization',
  applicationName: 'mock interview scheduler',
  addOns: ['chat', 'notifications'],
};
