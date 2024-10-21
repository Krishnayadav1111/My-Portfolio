import projectConfig from "projectConfig";
import url from "helpers/apiUrls";
import { axios } from "helpers/axios";

const commonService = {};

commonService.singleFileUpload = async ({
  file = null,
  showToaster = true,
}) => {
  const apiUrl = `${projectConfig.projectServiceUrl}project/add-single-document`;
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(apiUrl, formData, { showToaster: showToaster });

  if (res?.data) {
    return res?.data;
  }

  return {};
};

commonService.getAllRole = async () => {
  const res = await axios.get(url.getAllRoles,{ showToaster: false });
  if (res) {
    return res;
  }
  return {};
};

commonService.getCommonUser = async (roleId, projectId) => {
  const apiUrl = url.getCommonUser
    .replace("roleid", roleId)
    .replace("projectid", projectId);
  const res = await axios.get(apiUrl,{ showToaster: false });
  if (res) {
    return res;
  }
  return {};
};

commonService.assignUser = async (payload) => {
  const res = await axios.put(url.assignUser,payload); 
  if (res) {
    return res;
  }
  return {};
}
commonService.contactMe = async (payload) => {
  const res = await axios.post(url.addProject,payload); 
  if (res) {
    return res;
  }
  return {};
}

export { commonService };
