import projectConfig from "projectConfig";

const url = {};

url.sendOtp = "common/login/send-otp";
url.validateOtpApi = "/common/login/validate-otp";
url.getAllLeads =
`${projectConfig.leadServiceUrl}leads/list`;
url.getLeadDetails =
  `${projectConfig.leadServiceUrl}leads/detail`;
url.getActivityTimeline =
`${projectConfig.leadServiceUrl}leads/activity/timeline`;
  url.updateLeadIsResponsive =
  `${projectConfig.leadServiceUrl}leads/update-is-responsive`;
  url.addCoOwner = `${projectConfig.leadServiceUrl}leads/co-owner`;
  url.getAddCoOwner = `${projectConfig.leadServiceUrl}leads/co-owner/leadId`;
url.getPropertyTabs = `${projectConfig.projectServiceUrl}project/unit-type`;
url.getTowerConfig = `${projectConfig.projectServiceUrl}project/configuration/residential-value?project_id=projectId&tower_id=towerId`;
url.getUnitTypeOptions = `${projectConfig.projectServiceUrl}project/configuration/unit-plans/projectId/typeId`
url.getUpdatedFlatDetails = `${projectConfig.projectServiceUrl}project/configuration/flat/objectId`;
url.getUpdatedShopDetails = `${projectConfig.projectServiceUrl}project/configuration/shop/objectId`;

//BUILDER FLOORS 
url.getBuilderFloorTowerConfig = `${projectConfig.projectServiceUrl}project/configuration/builder-floor-value/projectId/typeId`;
url.getFloorUnitTypeOptions = `${projectConfig.projectServiceUrl}project/configuration/unit-plans/projectId/typeId`;
url.updateGroupFile = `${projectConfig.projectServiceUrl}project/group-profile/update-details`;
url.getGroupProfile = `${projectConfig.projectServiceUrl}project/group-profile/details`;
url.getCountries =`${projectConfig.leadServiceUrl}leads/common/countries`;
url.getStates =`${projectConfig.leadServiceUrl}leads/common/states`;
url.getCities =`${projectConfig.leadServiceUrl}leads/common/cities`;
url.getFollowUpList =`${projectConfig.leadServiceUrl}leads/follow-up/list`;
url.getFollowDetails=`${projectConfig.leadServiceUrl}leads/follow-up/details`;
url.getMeetingList =`${projectConfig.leadServiceUrl}leads/meeting/list`;
url.getMeetingDetails=`${projectConfig.leadServiceUrl}leads/meeting/details`;
url.addScheduleFollowUp=`${projectConfig.leadServiceUrl}leads/follow-up`;
url.addFollowUpRemark=`${projectConfig.leadServiceUrl}leads/follow-up/remark`;
url.deleteFollowUp=`${projectConfig.leadServiceUrl}leads/follow-up/delete`;
url.addScheduleMeeting=`${projectConfig.leadServiceUrl}leads/meeting`;
url.getSiteVisitList=`${projectConfig.leadServiceUrl}leads/site-visit/list`;
url.addScheduleSiteVisit=`${projectConfig.leadServiceUrl}leads/site-visit`;
url.getSiteVisitDetails=`${projectConfig.leadServiceUrl}leads/site-visit/details`;
url.getNotesList=`${projectConfig.leadServiceUrl}leads/note/list`;
url.getNotesDetails=`${projectConfig.leadServiceUrl}leads/note/details`;
url.addNotes=`${projectConfig.leadServiceUrl}leads/note`;
url.updateMeetingDetails=`${projectConfig.leadServiceUrl}leads/meeting/update`;
url.interested = `${projectConfig.leadServiceUrl}leads/details`;
url.meeting= `${projectConfig.leadServiceUrl}leads/details`;
url.siteVisit= `${projectConfig.leadServiceUrl}leads/details`;
url.negotiation= `${projectConfig.leadServiceUrl}leads/details`;
url.booking= `${projectConfig.leadServiceUrl}leads/details`;
url.bookingDocument = `${projectConfig.leadServiceUrl}leads/post_booking_document`;
url.getProjectsLists = `${projectConfig.projectServiceUrl}project/structures/projectId/typeId`;
url.getTowerDetails = `${projectConfig.projectServiceUrl}project/tower/projectId/typeId/towerId`;
url.getUnitDetails = `${projectConfig.projectServiceUrl}project/unit/projectId/typeId/flatId`;
url.getPlottedTowerDetails = `${projectConfig.projectServiceUrl}project/configuration/plotted/projectId`;
url.getIndependentTowerDetails = `${projectConfig.projectServiceUrl}project/configuration/independent-house/projectId`;
url.getBuilderFloorTowerDetails = `${projectConfig.projectServiceUrl}project/configuration/builder-floor/projectId`;
url.getParkingDetails = `${projectConfig.projectServiceUrl}project/parking/projectId/towerId`;
url.getLeadsList = `${projectConfig.projectServiceUrl}project/leads/projectId`;
url.updateFlatStatus = `${projectConfig.projectServiceUrl}project/change-status`;
url.getAllRoles= `${projectConfig.commonBaseUrl}role/get-roles`;
url.getAllUsers= `${projectConfig.commonBaseUrl}user/user-name-list?`;
url.addLeads= `${projectConfig.leadServiceUrl}leads/register`;
url.getLeadData = `${projectConfig.leadServiceUrl}leads/data-list/leadId`;
url.getUnitList = `${projectConfig.projectServiceUrl}project/unit-list/projectId/typeId/towerId`;
url.getDocumentData = `${projectConfig.projectServiceUrl}project/document/projectId?document_type=post_booking`;
url.getUserDetailsData = `${projectConfig.leadServiceUrl}leads/post_booking/user_basic_details/leadId`;
url.getSignedDocumentData = `${projectConfig.leadServiceUrl}leads/signed-documents/leadId`;
url.signedDocument = `${projectConfig.leadServiceUrl}leads/verify-documents/leadId`;
url.holdCustomer= `${projectConfig.leadServiceUrl}leads/details`;
url.priceBreak = `${projectConfig.leadServiceUrl}leads/price-break-down`
url.putForCoOwner = `${projectConfig.leadServiceUrl}leads/co-owner/co_ownerId`
//approval
url.getApprovalList= `${projectConfig.commonBaseUrl}request/list`;
url.getRequesterRole= `${projectConfig.commonBaseUrl}request/user_role_list`;
url.getRequesterDetails= `${projectConfig.commonBaseUrl}request/details`;
url.updateApprovalDetails= `${projectConfig.commonBaseUrl}request/update`;
url.getAllUsersData = `${projectConfig.commonBaseUrl}user/get-users`;
url.getUsersDetails = `${projectConfig.commonBaseUrl}user/get-user-detail/userId`;
url.addUser = `${projectConfig.commonBaseUrl}user/register`
url.getUserNameList = `${projectConfig.commonBaseUrl}user/user-name-list/?projectId=projectid&roleId=roleid`;
url.updateUser = `${projectConfig.commonBaseUrl}user/update-user`
url.deleteUser = `${projectConfig.commonBaseUrl}user/delete-user?userId=id`
url.transferLead = `${projectConfig.commonBaseUrl}user/assign-lead-customer`
url.getUserLead = `${projectConfig.commonBaseUrl}user/get-user-leads/userId`
url.getUserCustomer = `${projectConfig.commonBaseUrl}user/get-user-customers/userId`
url.getProjectList = `${projectConfig.projectServiceUrl}project/project-list`;
url.getUserSalesGraphData = `${projectConfig.commonBaseUrl}user/user-sales/userId`;
url.getUserRevenueGraphData = `${projectConfig.commonBaseUrl}user/user-revenue/userId`;
url.getPaymentPlanList = `${projectConfig.projectServiceUrl}project/payment-plan/projectId/typeId`
url.getMilestoneListOptions = `${projectConfig.projectServiceUrl}project/structures/projectId/typeId`;
url.getPlottedMilestoneListOptions = `${projectConfig.projectServiceUrl}project/configuration/plotted/projectId`;
url.getIndeHouseMilestoneListOptions = `${projectConfig.projectServiceUrl}project/configuration/independent-house/projectId`;
url.getBuildFloorsMilestoneListOptions = `${projectConfig.projectServiceUrl}project/configuration/builder-floor/projectId`;
url.getBuilderFloorTowerUpdatedConfig = `${projectConfig.projectServiceUrl}project/configuration/builder-floor/projectId/floorNumber`;
url.getAllCustomers =`${projectConfig.leadServiceUrl}customer/list`;
url.getCustomerDetails=`${projectConfig.leadServiceUrl}customer`;
url.getCustomerDocuments=`${projectConfig.leadServiceUrl}customer/documents`;
url.updateCustomerDetails=`${projectConfig.leadServiceUrl}customer/update`;
//myTeam
url.getTeamPerformance=`${projectConfig.commonBaseUrl}target/status_executive`; 
url.getExecutivePerformance=`${projectConfig.commonBaseUrl}target/executive_performance_list`; 
url.getSalesExecutiveList=`${projectConfig.commonBaseUrl}user/get-user-without-project`; 
url.addSalesExecutive=`${projectConfig.commonBaseUrl}user/assign-project`; 
url.removeUser=`${projectConfig.commonBaseUrl}user/remove-form-project`; 
url.updateAssignLeadsandCustomer=`${projectConfig.commonBaseUrl}user/assign-lead-customer`; 
url.getDownPaymentPlanList = `${projectConfig.projectServiceUrl}project/payment-plan/property-milestone/planId/propertyId`;
url.getUsersWithoutProjects = `${projectConfig.commonBaseUrl}user/get-user-without-project?roleId=roleid`;
url.getCommonUser=`${projectConfig.commonBaseUrl}user/user-name-list?roleId=roleid&projectId=projectid`;
url.assignUser = `${projectConfig.commonBaseUrl}user/assign-project`;
url.getIndependentHouseUpdatedConfig = `${projectConfig.projectServiceUrl}project/configuration/independent-house/projectId/houseUnitNumber`;
url.updateTower=`${projectConfig.projectServiceUrl}project/configuration/towers/towerId`;
url.getConstructionDetails = `${projectConfig.projectServiceUrl}project/construction-details/projectId`;
url.updateConstructionDetails = `${projectConfig.projectServiceUrl}project/construction-details`
url.getUplodedDocuments = `${projectConfig.projectServiceUrl}project/document/projectId?document_type=documentType`;
url.updateDocument = `${projectConfig.projectServiceUrl}project/update-document`;
url.deleteDocument = `${projectConfig.projectServiceUrl}project/document/:project_id/:document_id`;
url.builderFloorConfig = `${projectConfig.projectServiceUrl}project/configuration/builder-floor-tower/projectId/typeId`
url.deleteUnitPlans = `${projectConfig.projectServiceUrl}project/configuration/unit-plans/unit_plan_id`
url.getLandConfigDetails = `${projectConfig.projectServiceUrl}project/configuration/land-config/projectId/unitTypeId`;
url.deleteUnitPlan = `${projectConfig.projectServiceUrl}project/configuration/unit-plans/unitPlanId`
url.gethouseLandConfig = `${projectConfig.projectServiceUrl}project/configuration/land-config-details/projectId/typeId`
url.deleteAmenities = `${projectConfig.projectServiceUrl}project/configuration/amenities/amenitiesId`;
url.getAmenities = `${projectConfig.projectServiceUrl}project/configuration/amenities/projectId/unitTypeId`;

url.getFloorConfigDetails=`${projectConfig.projectServiceUrl}project/configuration/towers/projectId/typeId`;
url.updateUnitPlan = `${projectConfig.projectServiceUrl}project/configuration/unit-plans`;
url.deleteTower = `${projectConfig.projectServiceUrl}project/configuration/tower/towerId`;
url.getUploadedProjectInfo = `${projectConfig.projectServiceUrl}project/projects/projectId`;
url.updateUploadedProjectInfo = `${projectConfig.projectServiceUrl}project/update`;
url.getCurrentStep = `${projectConfig.projectServiceUrl}project/current-step/projectId`;
url.getPromotionalOffers = `${projectConfig.projectServiceUrl}project/promotional_offers/projectId`;
url.deletePromotionalOfferImages = `${projectConfig.projectServiceUrl}project/promotional_offers/:project_id/:offer_id`;
//broker
url.getAllBrokersData = `${projectConfig.commonBaseUrl}broker/get-brokers/brokerType`;
url.addBroker = `${projectConfig.commonBaseUrl}broker/add`;
url.getBrokerDetails = `${projectConfig.commonBaseUrl}broker/get/brokerId`
url.getInstallmentTypes = `${projectConfig.projectServiceUrl}project/configuration/price-breakdown/sub-categories/projectId/typeId`;
url.getBrokerRevenueData = `${projectConfig.commonBaseUrl}broker/brokerage-revenue/brokerId`;
url.getBrokerSalesData = `${projectConfig.commonBaseUrl}broker/broker-sales/brokerId`;
url.getBrokerLeadsData = `${projectConfig.commonBaseUrl}broker/lead-list/brokerId/type`;
url.getBrokerStats= `${projectConfig.commonBaseUrl}broker/brokerage-stats/brokerId`;
url.getBrokerageList = `${projectConfig.commonBaseUrl}broker/brokerage-list/brokerId`;

export default url;
