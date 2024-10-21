const commonRequestParser = {};

commonRequestParser.assignUserParser = (userId , projectId) => {
    const formData = {
        userId : userId,
        projectId : projectId,
    }
    return formData;
}

export default commonRequestParser;