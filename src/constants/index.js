// create endpoint api
// used
const apiAuth = `/api/Auth/Employee/`;
const apiCommon = `/api/Common/`;
const apiPool = `/api/Pool/`;
const apiPermission = `/api/Permission/`;
const apiUpload = `/api/Upload/`;
const apiCheck = `/api/Check/`;
const apiStatistics = `/api/Statistics/`;

const postUrl = {
  // common
  getListCountries: `${apiCommon}GetInfoAddress`,
  getListCities: `${apiCommon}GetInfoAddress`,
  getListZipCode: `${apiCommon}GetInfoAddress`,
  getUnitAndWarranty: `${apiCommon}GetCommonInfoForProduct`,
  getGroupGearAndFood: `${apiCommon}GetCommonInfoForProductCategory`,
  uploadImageBase64: `${apiUpload}Base64/Create`,
  // account
  userLogin: `${apiAuth}Login`,
  userLogout: `${apiAuth}Logout`,
  registerUser: `${apiAuth}Registry`,
  forgotPassword: `${apiAuth}ForgotPassword`,
  changePassword: `${apiAuth}ChangePassword`,
  statisticsShift: `${apiStatistics}Shift`,
  getNextShift: `${apiCheck}NextShift/Info`,
  // Role
  getAllScreen: `${apiPermission}EmloyeeRole/GetScreens`,
  getRuleByScreen: `${apiPermission}EmloyeeRole/GetPermissionByRole`,
  getTaskAssignment: `${apiPermission}EmloyeeRole/GetPermissionForWork`,
  saveTaskAssignment: `${apiPermission}EmloyeeRole/SetPermissionForRole`,
};
const urlApp = {
  postUrl,
};

export default urlApp;

//API STATUS
export const SUCCESS = 200;
export const SUCCESS_POST = 201;
export const NO_CONTENT = 204;
export const INVALID_DATA = 202;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const NOT_FOUND = 404;
export const INTERNAL_SERVER_ERROR = 500;

export const TIME_OUT = 20000;
// export const TIME_OUT = 5000;
export const LIMIT_IMAGE_SIZE_UPLOAD = 300000; // 512KB

export const limitSizeImage = 12 * 1024 * 1024; // 12mb
export const limitItems = 20;
// HTTP METHODS
export const POST = 'post';
export const GET = 'get';
export const PUT = 'put';
export const DELETE = 'delete';
export const errorStatusServer = [
  {code: 200, i18: 'message200'},
  {code: 201, i18: 'message201'},
  {code: 400, i18: 'message400'},
  {code: 401, i18: 'message401'},
  {code: 403, i18: 'message403'},
  {code: 404, i18: 'message404'},
  {code: 500, i18: 'message500'},
  {code: 1000, i18: 'message1000'},
  {code: 1001, i18: 'message1001'},
  {code: 1002, i18: 'message1002'},
  {code: 1003, i18: 'message1003'},
  {code: 1004, i18: 'message1004'},
  {code: 1005, i18: 'message1005'},
  {code: 1006, i18: 'message1006'},
  {code: 1007, i18: 'message1007'},
  {code: 1008, i18: 'message1008'},
  {code: 1009, i18: 'message1009'},
  {code: 1010, i18: 'message1010'},
  {code: 1011, i18: 'message1011'},
  {code: 1012, i18: 'message1012'},
  {code: 1013, i18: 'message1013'},
  {code: 1014, i18: 'message1014'},
  {code: 1015, i18: 'message1015'},
  {code: 1016, i18: 'message1016'},
  {code: 1017, i18: 'message1017'},
  {code: 1018, i18: 'message1018'},
  {code: 1019, i18: 'message1019'},
  {code: 1020, i18: 'message1020'},
  {code: 1021, i18: 'message1021'},
  {code: 1022, i18: 'message1022'},
  {code: 1023, i18: 'message1023'},
  {code: 1024, i18: 'message1024'},
  {code: 1025, i18: 'message1025'},
  {code: 1026, i18: 'message1026'},
  {code: 1027, i18: 'message1027'},
  {code: 1028, i18: 'message1028'},
  {code: 1029, i18: 'message1029'},
  {code: 1030, i18: 'message1030'},
  {code: 1031, i18: 'message1031'},
  {code: 1032, i18: 'message1032'},
  {code: 1033, i18: 'message1033'},
  {code: 1034, i18: 'message1034'},
  {code: 1035, i18: 'message1035'},
  {code: 1036, i18: 'message1036'},
  {code: 1037, i18: 'message1037'},
  {code: 1038, i18: 'message1038'},
  {code: 1039, i18: 'message1039'},
  {code: 1040, i18: 'message1040'},
  {code: 1041, i18: 'message1041'},
  {code: 1042, i18: 'message1042'},
  {code: 1043, i18: 'message1043'},
  {code: 1044, i18: 'message1044'},
  {code: 1045, i18: 'message1045'},
  {code: 1046, i18: 'message1046'},
  {code: 1047, i18: 'message1047'},
  {code: 1048, i18: 'message1048'},
  {code: 1049, i18: 'message1049'},
  {code: 1050, i18: 'message1050'},
  {code: 1051, i18: 'message1051'},
  {code: 1052, i18: 'message1052'},
  {code: 1053, i18: 'message1053'},
  {code: 1054, i18: 'message1054'},
  {code: 1055, i18: 'message1055'},
  {code: 1056, i18: 'message1056'},
  {code: 1057, i18: 'message1057'},
  {code: 1058, i18: 'message1058'},
  {code: 1059, i18: 'message1059'},
  {code: 1060, i18: 'message1060'},
];

export const ExtensionProductImageUpload = 'PNG';

export const URL_WEB = 'http://hbmetadata.phuckhangnet.vn';


