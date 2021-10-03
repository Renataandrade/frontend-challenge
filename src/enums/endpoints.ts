export const ENDPOINTS = Object.freeze({
  LOGIN: '/userLogin',
  LOGOUT: '/userLogin', // Serviço possui limite de 5 endpoints contando com db
  CREATE_USER: '/userRegister',
  
  LIST_PURCHASE: '/purchasesPage',
  CREATE_PURCHASE: '/purchasesRegister'
})